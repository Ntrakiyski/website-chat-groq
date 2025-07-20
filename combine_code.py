import os
import fnmatch

def get_language_for_extension(filename):
    """Maps a file's extension to a Markdown language identifier for syntax highlighting."""
    ext_map = {
        '.ts': 'typescript',
        '.tsx': 'tsx',
        '.js': 'javascript',
        '.mjs': 'javascript',
        '.jsx': 'jsx',
        '.json': 'json',
        '.css': 'css',
        '.scss': 'scss',
        '.html': 'html',
        '.py': 'python',
        '.md': 'markdown',
        '.yaml': 'yaml',
        '.yml': 'yaml',
        '.sh': 'shell',
        '.gitignore': 'text',
        '.d.ts': 'typescript'
    }
    
    # Check for multi-part extensions first, like .d.ts
    for ext, lang in ext_map.items():
        if filename.endswith(ext):
            return lang

    _, single_ext = os.path.splitext(filename)
    if single_ext in ext_map:
        return ext_map[single_ext]
        
    if filename.endswith('.env.example'):
        return 'text'
        
    return 'text' # Default to plain text

def append_file_content(outfile, filepath, project_root):
    """
    Appends a file's content to the output file, formatted in a Markdown code block
    with appropriate syntax highlighting.
    """
    try:
        relative_filepath = os.path.relpath(filepath, project_root).replace('\\', '/')
        language = get_language_for_extension(os.path.basename(filepath))

        outfile.write(f"---\n### File: `{relative_filepath}`\n---\n\n")
        outfile.write(f"```{language}\n")
        with open(filepath, "r", encoding="utf-8", errors='ignore') as f:
            outfile.write(f.read())
        outfile.write("\n```\n\n")
    except Exception as e:
        outfile.write(f"# Error reading file {relative_filepath}: {e}\n\n")

def combine_codebase_to_markdown(output_filename="combined_codebase.md"):
    """
    Walks the entire project directory, intelligently ignoring unnecessary files/folders,
    and combines all relevant code into a single Markdown file.
    """
    project_root = os.path.dirname(os.path.abspath(__file__))
    output_filepath = os.path.join(project_root, output_filename)

    # --- Configuration ---
    # 1. Define a priority order for important configuration files.
    # These will appear first in the document for context.
    priority_files = [
        "README.md",
        "package.json",
        "next.config.ts",
        "next-env.d.ts",
        "tsconfig.json",
        "postcss.config.mjs",
        "eslint.config.mjs",
        "components.json",
        "instrumentation.ts",
        ".env.example",
        ".gitignore",
    ]

    # 2. Define all patterns to ignore. The script walks the entire project
    # and uses this list to exclude files and directories.
    ignore_patterns = {
        'node_modules', '.next', '.git', '.vscode', 'dist', 'build',
        '.env', 'pnpm-lock.yaml', 'package-lock.json',
        output_filename, '*.pyc', '__pycache__', os.path.basename(__file__)
    }

    # 3. Define extensions for asset files to list by name only.
    asset_extensions = {'.ico', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp'}
    # --- End of Configuration ---

    with open(output_filepath, "w", encoding="utf-8") as outfile:
        outfile.write("# Combined Project Codebase: WEBSITE-CHAT-GROQ\n\n")
        outfile.write("This document contains the consolidated code from the project, structured for clarity.\n\n")

        # Part 1: Process priority files first
        outfile.write("## 1. Key Configuration Files\n\n")
        for filename in priority_files:
            filepath = os.path.join(project_root, filename)
            if os.path.exists(filepath):
                append_file_content(outfile, filepath, project_root)

        # Part 2: Process all other project source files
        outfile.write("\n## 2. Project Source Code\n\n")
        
        all_other_files = []
        for root, dirs, files in os.walk(project_root, topdown=True):
            # Prune ignored directories from traversal
            dirs[:] = [d for d in dirs if d not in ignore_patterns]
            
            for file in files:
                filepath = os.path.join(root, file)
                relative_path = os.path.relpath(filepath, project_root).replace('\\', '/')

                # Skip if file is in priority list (already processed) or is an ignored pattern
                if relative_path in priority_files or any(fnmatch.fnmatch(file, p) for p in ignore_patterns):
                    continue
                
                all_other_files.append(filepath)

        # Sort the collected files alphabetically for consistent output
        all_other_files.sort()

        # Write the content of the sorted files
        for filepath in all_other_files:
             _, ext = os.path.splitext(filepath)
             relative_filepath = os.path.relpath(filepath, project_root).replace('\\', '/')
             
             if ext.lower() in asset_extensions:
                 outfile.write(f"- Asset: `{relative_filepath}`\n")
             else:
                 append_file_content(outfile, filepath, project_root)
        
        outfile.write("\n---\n*End of Codebase Report.*\n")

    print(f"Codebase successfully combined into {output_filepath}")

if __name__ == "__main__":
    combine_codebase_to_markdown()