# Combined Project Codebase: WEBSITE-CHAT-GROQ

This document contains the consolidated code from the project, structured for clarity.

## 1. Key Configuration Files

---
### File: `README.md`
---

```markdown
<a href="https://ai-sdk-starter-groq.vercel.app">
  <h1 align="center">Vercel x Groq Chatbot</h1>
</a>

<p align="center">
  An open-source AI chatbot app template built with Next.js, the AI SDK by Vercel, and Groq.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Streaming text responses powered by the [AI SDK by Vercel](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably with just a few lines of code.
- Built-in tool integration for extending AI capabilities (demonstrated with a weather tool example).
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=Vercel+x+Groq+Chatbot&repository-name=ai-sdk-starter-groq&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-starter-groq&demo-title=Vercel+x+Groq+Chatbot&demo-url=https%3A%2F%2Fai-sdk-starter-groq.labs.vercel.dev%2F&demo-description=A+simple+chatbot+application+built+with+Next.js+that+uses+Groq+via+the+AI+SDK+and+the+Vercel+Marketplace&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22ai%22%2C%22productSlug%22%3A%22api-key%22%2C%22integrationSlug%22%3A%22groq%22%7D%5D)

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   # or
   pnpm install -g vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables.

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI chatbot application.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors.

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.

```

---
### File: `package.json`
---

```json
{
  "name": "ai-sdk-starter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ai-sdk/groq": "^1.2.5",
    "@ai-sdk/react": "^1.2.6",
    "@mendable/firecrawl-js": "^1.29.1",
    "@openrouter/ai-sdk-provider": "1.0.0-beta.1",
    "@opentelemetry/api-logs": "^0.200.0",
    "@opentelemetry/instrumentation": "^0.200.0",
    "@opentelemetry/sdk-logs": "^0.200.0",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-slot": "^1.1.2",
    "@vercel/otel": "^1.10.4",
    "ai": "^4.3.2",
    "autoevals": "^0.0.125",
    "braintrust": "^0.0.195",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "fast-deep-equal": "^3.1.3",
    "lucide-react": "^0.487.0",
    "motion": "^12.6.3",
    "next": "15.2.4",
    "next-themes": "^0.4.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.1",
    "@tailwindcss/postcss": "^4.1.3",
    "@types/node": "^22.14.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.1",
    "eslint": "^9.24.0",
    "eslint-config-next": "15.2.4",
    "tailwindcss": "^4.1.3",
    "typescript": "^5.8.3"
  }
}

```

---
### File: `next.config.ts`
---

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

---
### File: `next-env.d.ts`
---

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---
### File: `tsconfig.json`
---

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

---
### File: `postcss.config.mjs`
---

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

```

---
### File: `eslint.config.mjs`
---

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

```

---
### File: `components.json`
---

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---
### File: `instrumentation.ts`
---

```typescript
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({
    serviceName: 'next-app',
    instrumentations: [
      {
        name: 'ai-instrumentation',
        include: [/^\/api\/ai/]
      }
    ]
  })
}
```

---
### File: `.gitignore`
---

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env
.env.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
.env*.local

```


## 2. Project Source Code

---
### File: `ai/providers.ts`
---

```typescript
import { groq } from "@ai-sdk/groq";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

const languageModels = {
  "kimi-k2": groq("moonshotai/kimi-k2-instruct"),
  "meta-llama/llama-4-scout-17b-16e-instruct": groq(
    "meta-llama/llama-4-scout-17b-16e-instruct",
  ),
  "llama-3.1-8b-instant": groq("llama-3.1-8b-instant"),
  "deepseek-r1-distill-llama-70b": wrapLanguageModel({
    middleware: extractReasoningMiddleware({
      tagName: "think",
    }),
    model: groq("deepseek-r1-distill-llama-70b"),
  }),
  "llama-3.3-70b-versatile": groq("llama-3.3-70b-versatile"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "kimi-k2";

```

---
### File: `ai/tools.ts`
---

```typescript
import { tool } from "ai";
import { z } from "zod";

export const weatherTool = tool({
  description: "Get the weather in a location",
  parameters: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),
  execute: async ({ location }) => ({
    location,
    temperature: 72 + Math.floor(Math.random() * 21) - 10,
  }),
});

```

---
### File: `app/api/chat/route.ts`
---

```typescript
import { model, modelID } from "@/ai/providers";
import { generateText, UIMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
    context,
  }: {
    messages: UIMessage[];
    selectedModel: modelID;
    context?: string;
  } = await req.json();

  let systemPrompt = "You are a helpful assistant.";

  if (context) {
    systemPrompt = `You are a customer support AI assistant for a product or service described in the context below.
    Your personality is helpful, friendly, and professional.
    Your primary goal is to answer user questions based ONLY on the provided context.

    Follow these rules strictly:
    1.  Provide short, concise, and to-the-point answers. Do not be verbose.
    2.  Always end your response with a relevant, open-ended question to encourage conversation.
    3.  If the answer is not in the context, you MUST respond with: "I'm sorry, I don't have that information. Is there another way I can help you?" Do not make up answers.
    4.  Do not mention that you are an AI or that you are referencing a "context". Speak as if you are a knowledgeable support agent.

    Here is the context:
    ---
    ${context}
    ---
    `;
  }

  try {
    const result = await generateText({
      model: model.languageModel(selectedModel),
      system: systemPrompt,
      messages,
    });

    return NextResponse.json({ response: result.text });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Rate limit")) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 },
        );
      }
    }
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred." },
      { status: 500 },
    );
  }
}
```

---
### File: `app/api/process-data/route.ts`
---

```typescript
import { NextResponse } from "next/server";
import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";

// Define the schema for the request body
const processDataSchema = z.object({
  url: z.string().url({ message: "Invalid URL format." }),
  depth: z
    .number()
    .min(1, { message: "Page limit must be at least 1." })
    .max(5, { message: "Page limit cannot exceed 5." }),
});

export async function POST(req: Request) {
  // 1. Validate API Key
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Firecrawl API key is not configured." },
      { status: 500 },
    );
  }

  try {
    // 2. Validate Request Body
    const body = await req.json();
    const validationResult = processDataSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    const { url, depth } = validationResult.data;

    // 3. Initialize Firecrawl and Crawl
    const app = new FirecrawlApp({ apiKey });
    const crawlResponse = await app.crawlUrl(url, {
      limit: depth,
      scrapeOptions: {
        formats: ["markdown"], // We only need the clean markdown content
      },
    });

    if (!crawlResponse.success || !crawlResponse.data) {
      console.error("Firecrawl API Error:", crawlResponse);
      return NextResponse.json(
        { error: (crawlResponse as any).error || "Failed to crawl the specified URL." },
        { status: 500 },
      );
    }

    // 4. Combine the markdown content from all crawled pages
    const combinedText = crawlResponse.data
      .map((item) => item.markdown)
      .join("\n\n---\n\n"); // Separate pages with a clear divider

    console.log("Combined Text from Firecrawl:", combinedText);

    // 5. Return the combined text
    return NextResponse.json({ context: combinedText });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}

```

---
### File: `app/api/process-pdf/route.ts`
---

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { file } = await req.json();

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const n8nWebhookUrl = "https://n8n.worfklow.org/webhook/bb7354f4-f426-47e7-b3dd-94896c3397df";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file }),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      throw new Error(`n8n webhook error: ${n8nResponse.status} - ${errorText}`);
    }

    // In a real application, you would expect n8n to return the processed context.
    // For this example, we'll return a placeholder success message.
    // You might want to update this to actually get the context from n8n or a database.
    const context = "PDF content processed successfully. This is a placeholder context."; // Replace with actual processed context from n8n

    return NextResponse.json({ context });
  } catch (error: any) {
    console.error("Error processing PDF:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

```

- Asset: `app/favicon.ico`
---
### File: `app/globals.css`
---

```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.21 0.006 285.885);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.705 0.015 286.067);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.21 0.006 285.885);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.705 0.015 286.067);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.141 0.005 285.823);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.141 0.005 285.823);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.21 0.006 285.885);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.274 0.006 286.033);
  --input: oklch(0.274 0.006 286.033);
  --ring: oklch(0.442 0.017 285.786);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.274 0.006 286.033);
  --sidebar-ring: oklch(0.442 0.017 285.786);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

---
### File: `app/layout.tsx`
---

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vercel x Groq Chatbot",
  description:
    "This starter project uses Groq with the AI SDK via the Vercel Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

```

---
### File: `app/page.tsx`
---

```tsx
"use client";

import { useState, useEffect } from "react";
import Chat from "@/components/chat";
import { DataSourceForm } from "@/components/data-source-form";
import { useLlmResponse } from "@/lib/hooks/use-llm-response";
import { useWelcomeMessage } from "@/lib/hooks/use-welcome-message"; // 1. Import the new hook
import { Loader2 } from "lucide-react"; // Import a loading spinner icon

export default function Page() {
  const [rawContext, setRawContext] = useState<string | null>(null);
  const [refinedContext, setRefinedContext] = useState<string | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null); // 2. Add state for the welcome message

  // Hook to refine the raw context (this is unchanged)
  const { response: llmResponse, isLoading: llmLoading } = useLlmResponse({
    prompt:
      "Summarize and structure the following content into readable markdown. Identify the main topics and key points.",
    context: rawContext,
    enabled: rawContext !== null && refinedContext === null,
  });

  // 3. Add the new hook to generate the welcome message from the refined context
  const { response: generatedWelcomeMessage, isLoading: welcomeLoading } =
    useWelcomeMessage({
      context: refinedContext,
      enabled: refinedContext !== null && welcomeMessage === null,
    });

  // Effect to set the refined context once it's loaded (this is unchanged)
  useEffect(() => {
    if (llmResponse && !llmLoading && refinedContext === null) {
      setRefinedContext(llmResponse);
    }
  }, [llmResponse, llmLoading, refinedContext]);

  // 4. Add a new effect to set the welcome message once it's generated
  useEffect(() => {
    if (
      generatedWelcomeMessage &&
      !welcomeLoading &&
      welcomeMessage === null
    ) {
      setWelcomeMessage(generatedWelcomeMessage);
    }
  }, [generatedWelcomeMessage, welcomeLoading, welcomeMessage]);

  // --- RENDER LOGIC ---

  // 5. Update the render logic to handle the new loading states and pass props

  // If no data source is provided yet, show the form (unchanged)
  if (rawContext === null) {
    return (
      <main className="h-screen p-4 md:p-6">
        <DataSourceForm onContextLoaded={setRawContext} />
      </main>
    );
  }

  // Show a more informative loading screen while processing content
  if (
    llmLoading ||
    refinedContext === null ||
    welcomeLoading ||
    welcomeMessage === null
  ) {
    let statusText = "Refining content...";
    if (refinedContext) statusText = "Creating a warm welcome...";
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-lg">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p>{statusText}</p>
      </div>
    );
  }

  // Once everything is ready, render the chat with the new props
  return (
    <Chat
      context={refinedContext}
      welcomeMessage={welcomeMessage}
      onNewChat={() => {
        setRawContext(null);
        setRefinedContext(null);
        setWelcomeMessage(null);
      }}
    />
  );
}
```

---
### File: `components/chat.tsx`
---

```tsx
"use client";

import { useState } from "react";
import { modelID, MODELS, defaultModel } from "@/ai/providers";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp, Loader2 } from "lucide-react";
import { Message } from "./message";
import { UIMessage } from "ai";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

interface ChatProps {
  context: string;
  welcomeMessage: string;
  onNewChat: () => void;
}

export default function Chat({ context, welcomeMessage, onNewChat }: ChatProps) {
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: "initial-ai-message",
      role: "assistant",
      content: welcomeMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<modelID>(defaultModel);
  const [containerRef, endRef] = useScrollToBottom();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: UIMessage = {
      id: uuidv4(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          selectedModel,
          context: context,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "API request failed");
      }

      const { response: aiText } = await response.json();

      const aiMessage: UIMessage = {
        id: uuidv4(),
        role: "assistant",
        content: aiText,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      toast.error(err.message);
      setMessages((prev) => prev.slice(0, prev.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-semibold">AI Assistant</h1>
        <Button variant="outline" size="sm" onClick={onNewChat}>
          Start New Chat
        </Button>
      </header>

      {/* This className is the key change for the centered layout */}
      <main ref={containerRef} className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
          <div ref={endRef} />
        </div>
      </main>

      {/* The footer is now styled to contain the centered form */}
      <footer className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-2xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1"
            disabled={isLoading}
          />
          <Select
            value={selectedModel}
            onValueChange={(value) => setSelectedModel(value as modelID)}
            disabled={isLoading}
          >
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              {MODELS.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={isLoading || !input}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowUp className="w-4 h-4" />
            )}
          </Button>
        </form>
      </footer>
    </div>
  );
}
```

---
### File: `components/data-source-form.tsx`
---

```tsx
"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface DataSourceFormProps {
  onContextLoaded: (context: string) => void;
}

export function DataSourceForm({ onContextLoaded }: DataSourceFormProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("url");

  useEffect(() => {
    if (activeTab === "url") {
      setPdfFile(null);
      setError("");
    } else {
      setUrl("");
      setDepth(1);
      setError("");
    }
  }, [activeTab]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    let apiEndpoint = "";
    let requestBody: any = {};

    if (activeTab === "url") {
      if (!url) {
        setError("URL cannot be empty.");
        setIsLoading(false);
        return;
      }
      apiEndpoint = "/api/process-data";
      requestBody = { url, depth };
    } else if (activeTab === "pdf") {
      if (!pdfFile) {
        setError("Please select a PDF file.");
        setIsLoading(false);
        return;
      }

      apiEndpoint = "/api/process-pdf";

      try {
        const reader = new FileReader();
        reader.readAsArrayBuffer(pdfFile);
        await new Promise<void>((resolve, reject) => {
          reader.onload = () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            const base64String = Buffer.from(arrayBuffer).toString("base64");
            requestBody = { file: base64String };
            resolve();
          };
          reader.onerror = (error) => reject(error);
        });
      } catch (fileReadError: any) {
        setError(fileReadError.message);
        setIsLoading(false);
        return;
      }
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to process data source.");
      }

      const data = await response.json();
      onContextLoaded(data.context);
      toast.success("Data source loaded successfully!");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

    97→  return (
    98→    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
    99→      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
   100→        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
   101→          Provide a Data Source
   102→        </h2>
   103→        <Tabs
   104→          defaultValue="url"
   105→          className="w-full"
   106→          onValueChange={setActiveTab}
   107→        >
   108→          <TabsList className="grid w-full grid-cols-2">
   109→            <TabsTrigger value="url">Website URL</TabsTrigger>
   110→            <TabsTrigger value="pdf">PDF Upload</TabsTrigger>
   111→          </TabsList>
   112→          <TabsContent value="url">
   113→            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
   114→              <div>
   115→                <Label
   116→                  htmlFor="url"
   117→                  className="text-gray-700 dark:text-gray-300"
   118→                >
   119→                  Website URL
   120→                </Label>
   121→                <Input
   122→                  id="url"
   123→                  type="url"
   124→                  placeholder="https://example.com"
   125→                  value={url}
   126→                  onChange={(e) => setUrl(e.target.value)}
   127→                  disabled={isLoading}
   128→                  className="mt-1 block w-full"
   129→                />
   130→              </div>
   131→              <div>
   132→                <Label
   133→                  htmlFor="depth"
   134→                  className="text-gray-700 dark:text-gray-300"
   135→                >
   136→                  Crawl Depth (1-5 pages)
   137→                </Label>
   138→                <Input
   139→                  id="depth"
   140→                  type="number"
   141→                  min="1"
   142→                  max="5"
   143→                  value={depth}
   144→                  onChange={(e) =>
   145→                    setDepth(Math.min(5, Math.max(1, parseInt(e.target.value))))
   146→                  }
   147→                  disabled={isLoading}
   148→                  className="mt-1 block w-full"
   149→                />
   150→              </div>
   151→              {error && <p className="text-red-500 text-sm">{error}</p>}
   152→              <Button type="submit" className="w-full" disabled={isLoading}>
   153→                {isLoading ? "Processing..." : "Load Data Source"}
   154→              </Button>
   155→            </form>
   156→          </TabsContent>
   157→          <TabsContent value="pdf">
   158→            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
   159→              <div>
   160→                <Label
   161→                  htmlFor="pdfFile"
   162→                  className="text-gray-700 dark:text-gray-300"
   163→                >
   164→                  Upload PDF
   165→                </Label>
   166→                <Input
   167→                  id="pdfFile"
   168→                  type="file"
   169→                  accept=".pdf"
   170→                  onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
   171→                  disabled={isLoading}
   172→                  className="mt-1 block w-full"
   173→                />
   174→              </div>
   175→              {error && <p className="text-red-500 text-sm">{error}</p>}
   176→              <Button type="submit" className="w-full" disabled={isLoading}>
   177→                {isLoading ? "Processing..." : "Upload PDF"}
   178→              </Button>
   179→            </form>
   180→          </TabsContent>
   181→        </Tabs>
   182→      </div>
   183→    </div>
   184→  );
   185→}

```

---
### File: `components/deploy-button.tsx`
---

```tsx
import Link from "next/link";

export const DeployButton = () => (
  <Link
    href={`https://vercel.com/new/clone?project-name=Vercel+x+Groq+Chatbot&repository-name=ai-sdk-starter-groq&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-starter-groq&demo-title=Vercel+x+Groq+Chatbot&demo-url=https%3A%2F%2Fai-sdk-starter-groq.labs.vercel.dev%2F&demo-description=A+simple+chatbot+application+built+with+Next.js+that+uses+Groq+via+the+AI+SDK+and+the+Vercel+Marketplace&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22ai%22%2C%22productSlug%22%3A%22api-key%22%2C%22integrationSlug%22%3A%22groq%22%7D%5D`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 ml-2 bg-black text-white text-sm px-3 py-1.5 rounded-md hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
  >
    <svg
      data-testid="geist-icon"
      height={14}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={14}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
    Deploy
  </Link>
);
```

---
### File: `components/header.tsx`
---

```tsx
import Link from "next/link";
import { DeployButton } from "./deploy-button";
import { GroqIcon } from "./icons";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-white dark:bg-zinc-950">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2 shrink-0 ">
          <span className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-2 home-links">
            <Link
              className="text-zinc-800 dark:text-zinc-100 -translate-y-[.5px]"
              rel="noopener"
              target="_blank"
              href="https://vercel.com/"
            >
              <svg
                data-testid="geist-icon"
                height={18}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={18}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <div className="jsx-e3e12cc6f9ad5a71 w-4 text-lg text-center text-zinc-300 dark:text-zinc-600">
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-4">
              <Link className="flex flex-row items-end gap-2" target="_blank" href="https://groq.com">
                <GroqIcon size={32} />
              </Link>
            </div>
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 shrink-0">
          <DeployButton />
        </div>
      </div>
    </div>
  );
};

```

---
### File: `components/icons.tsx`
---

```tsx
import Link from "next/link";
import * as React from "react";
import type { SVGProps } from "react";

export const VercelIcon = ({ size = 17 }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SpinnerIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: "currentcolor" }}
  >
    <g clipPath="url(#clip0_2393_1490)">
      <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5" />
      <path
        opacity="0.5"
        d="M8 16V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.9"
        d="M3.29773 1.52783L5.64887 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.1"
        d="M12.7023 1.52783L10.3511 4.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.4"
        d="M12.7023 14.472L10.3511 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.6"
        d="M3.29773 14.472L5.64887 11.236"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.2"
        d="M15.6085 5.52783L11.8043 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.7"
        d="M0.391602 10.472L4.19583 9.23598"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.3"
        d="M15.6085 10.4722L11.8043 9.2361"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.8"
        d="M0.391602 5.52783L4.19583 6.7639"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_2393_1490">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

export function StarButton() {
  return (
    <Link
      href="https://github.com/vercel-labs/ai-sdk-preview-reasoning"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300"
    >
      <Github className="size-4" />
      <span className="hidden sm:inline">Star on GitHub</span>
    </Link>
  );
}

export const GroqIcon = ({ size = 16 }) => {
  return (
    <svg
      data-testid="geist-icon"
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 160 59"
      width={size * (160 / 120)}
      className="pt-1"
      style={{ color: 'currentcolor' }}
    >
      <mask
        id="mask0_4345_1846"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="160"
        height="59"
      >
        <path
          d="M0.273438 0.219727H159.216V58.1817H0.273438V0.219727Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4345_1846)">
        <path
          d="M95.4635 0.314595C84.4822 0.314595 75.5599 9.19525 75.5599 20.1677C75.5599 31.1402 84.4632 40.0208 95.4635 40.0208C106.464 40.0208 115.367 31.1402 115.367 20.1677C115.348 9.21427 106.445 0.333611 95.4635 0.314595ZM95.4635 32.5664C88.6002 32.5664 83.0333 27.0136 83.0333 20.1677C83.0333 13.3218 88.6002 7.76902 95.4635 7.76902C102.327 7.76902 107.894 13.3218 107.894 20.1677C107.894 27.0136 102.327 32.5664 95.4635 32.5664ZM67.9912 0.39066C67.3049 0.314595 66.6376 0.276562 65.9513 0.276562C65.6081 0.276562 65.284 0.276562 64.9599 0.295578C64.6358 0.314595 64.2926 0.333611 63.9685 0.352628C62.634 0.44771 61.2995 0.675906 60.0031 1.03722C57.3531 1.74082 54.8556 2.99591 52.7013 4.68836C50.4898 6.43787 48.7358 8.68181 47.5347 11.23C46.9437 12.5041 46.5052 13.8543 46.2193 15.2234C46.0858 15.908 45.9905 16.5926 45.9142 17.2772C45.8952 17.6195 45.857 17.9618 45.857 18.3041L45.838 18.8175V19.293L45.8761 32.5854L45.9142 39.2221H53.3685L53.4067 32.5854L53.4448 19.293V18.5893C53.4448 18.3802 53.4829 18.171 53.4829 17.9618C53.5211 17.5434 53.5973 17.1441 53.6736 16.7257C53.8452 15.9271 54.093 15.1474 54.4362 14.4057C55.1225 12.9225 56.152 11.6293 57.4293 10.6025C58.7639 9.53755 60.3081 8.75787 61.9477 8.3205C62.7865 8.0923 63.6635 7.94017 64.5405 7.8641C64.7693 7.84509 64.979 7.82607 65.2078 7.82607C65.4365 7.82607 65.6653 7.80705 65.875 7.80705C66.2944 7.80705 66.7329 7.82607 67.1524 7.8641C68.8491 8.03525 70.4887 8.54869 71.9948 9.38541L75.7124 2.93886C73.3484 1.56968 70.7175 0.694923 67.9912 0.39066ZM20.3484 0.219513C9.36711 0.124431 0.36855 8.92902 0.273226 19.8825C0.177902 30.8359 9.00488 39.8116 19.9862 39.9067H26.8876V32.4713H20.3484C13.4851 32.5474 7.84193 27.0707 7.76567 20.2057C7.68941 13.3408 13.1801 7.73099 20.0624 7.65492H20.3484C27.2117 7.65492 32.7786 13.2077 32.8167 20.0536V38.3284C32.8167 45.1172 27.2689 50.651 20.4819 50.7271C17.2218 50.708 14.1142 49.3959 11.8265 47.0949L6.54553 52.3625C10.206 56.0326 15.1628 58.1244 20.3484 58.1625H20.6153C31.4632 58.0103 40.1757 49.2248 40.2329 38.4044V19.5592C39.966 8.81492 31.1391 0.238529 20.3484 0.219513ZM139.389 0.314595C128.407 0.314595 119.485 9.19525 119.504 20.1677C119.504 31.1212 128.407 40.0018 139.389 40.0018H146.195V32.5664H139.389C132.525 32.5664 126.958 27.0136 126.958 20.1677C126.958 13.3218 132.525 7.76902 139.389 7.76902C145.833 7.76902 151.209 12.6943 151.781 19.1028H151.762V57.2116H159.216V20.1677C159.216 9.21427 150.351 0.314595 139.389 0.314595Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

```

---
### File: `components/input.tsx`
---

```tsx
import { ArrowUp } from "lucide-react";
import { Input as ShadcnInput } from "./ui/input";

interface InputProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  status: string;
  stop: () => void;
}

export const Input = ({
  input,
  handleInputChange,
  isLoading,
  status,
  stop,
}: InputProps) => {
  return (
    <div className="relative w-full">
      <ShadcnInput
        className="bg-secondary py-6 w-full rounded-xl pr-12"
        value={input}
        autoFocus
        placeholder={"Say something..."}
        onChange={handleInputChange}
      />
      {status === "streaming" || status === "submitted" ? (
        <button
          type="button"
          onClick={stop}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black hover:bg-zinc-800 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors"
        >
          <div className="animate-spin h-4 w-4">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black hover:bg-zinc-800 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowUp className="h-4 w-4 text-white" />
        </button>
      )}
    </div>
  );
};

```

---
### File: `components/markdown.tsx`
---

```tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React, { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Partial<Components> = {
  pre: ({ children }) => <>{children}</>,
  ol: ({ node, children, ...props }) => {
    return (
      <ol className="list-decimal list-outside ml-4" {...props}>
        {children}
      </ol>
    );
  },
  li: ({ node, children, ...props }) => {
    return (
      <li className="py-1" {...props}>
        {children}
      </li>
    );
  },
  ul: ({ node, children, ...props }) => {
    return (
      <ul className="list-decimal list-outside ml-4" {...props}>
        {children}
      </ul>
    );
  },
  strong: ({ node, children, ...props }) => {
    return (
      <span className="font-semibold" {...props}>
        {children}
      </span>
    );
  },
  a: ({ node, children, ...props }) => {
    return (
      // @ts-expect-error error
      <Link
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  },
  h1: ({ node, children, ...props }) => {
    return (
      <h1 className="text-3xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }) => {
    return (
      <h2 className="text-2xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }) => {
    return (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }) => {
    return (
      <h4 className="text-lg font-semibold mt-6 mb-2" {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ node, children, ...props }) => {
    return (
      <h5 className="text-base font-semibold mt-6 mb-2" {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ node, children, ...props }) => {
    return (
      <h6 className="text-sm font-semibold mt-6 mb-2" {...props}>
        {children}
      </h6>
    );
  },
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
```

---
### File: `components/message.tsx`
---

```tsx
"use client";

import { UIMessage } from "ai";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { SparklesIcon } from "lucide-react";

export function Message({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "w-full flex",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className="flex gap-2 items-start max-w-[85%]">
        {/* AI Icon */}
        {!isUser && (
          <div className="size-8 flex items-center justify-center bg-muted shrink-0 rounded-full">
            <SparklesIcon size={14} />
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={cn(
            "px-4 py-2 rounded-lg prose prose-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground",
          )}
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
```

---
### File: `components/messages.tsx`
---

```tsx
import type { Message as TMessage } from "ai";
import { Message } from "./message";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";

export const Messages = ({
  messages,
  isLoading,
  status,
}: {
  messages: TMessage[];
  isLoading: boolean;
  status: "error" | "submitted" | "streaming" | "ready";
}) => {
  const [containerRef, endRef] = useScrollToBottom();
  return (
    <div
      className="flex-1 h-full space-y-4 overflow-y-auto py-8"
      ref={containerRef}
    >
      <div className="max-w-xl mx-auto pt-8">
        {messages.map((m, i) => (
          <Message
            key={i}
            isLatestMessage={i === messages.length - 1}
            isLoading={isLoading}
            message={m}
            status={status}
          />
        ))}
        <div className="h-1" ref={endRef} />
      </div>
    </div>
  );
};

```

---
### File: `components/model-picker.tsx`
---

```tsx
"use client";
import { modelID, MODELS } from "@/ai/providers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ModelPickerProps {
  selectedModel: modelID;
  setSelectedModel: (model: modelID) => void;
}

export const ModelPicker = ({
  selectedModel,
  setSelectedModel,
}: ModelPickerProps) => {
  return (
    <div className="absolute bottom-2 left-2 flex flex-col gap-2">
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {MODELS.map((modelId) => (
              <SelectItem key={modelId} value={modelId}>
                {modelId}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

```

---
### File: `components/project-overview.tsx`
---

```tsx
import NextLink from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">Vercel x Groq Chatbot</h1>
      <p className="text-center">
        This starter project uses <Link href="https://groq.com/">Groq</Link>{" "}
        with the <Link href="https://sdk.vercel.ai/docs">AI SDK</Link> via the{" "}
        <Link href="https://vercel.com/marketplace/groq">
          Vercel Marketplace
        </Link>
        .
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};

```

---
### File: `components/suggested-prompts.tsx`
---

```tsx
"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { memo } from "react";

interface SuggestedPromptsProps {
  sendMessage: (input: string) => void;
}

function PureSuggestedPrompts({ sendMessage }: SuggestedPromptsProps) {
  const suggestedActions = [
    {
      title: "What are the advantages",
      label: "of using Next.js?",
      action: "What are the advantages of using Next.js?",
    },
    {
      title: "What is the weather",
      label: "in San Francisco?",
      action: "What is the weather in San Francisco?",
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? "hidden sm:block" : "block"}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              sendMessage(suggestedAction.action);
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedPrompts = memo(PureSuggestedPrompts, () => true);

```

---
### File: `components/textarea.tsx`
---

```tsx
import { modelID } from "@/ai/providers";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { ModelPicker } from "./model-picker";

interface InputProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  status: string;
  stop: () => void;
  selectedModel: modelID;
  setSelectedModel: (model: modelID) => void;
}

export const Textarea = ({
  input,
  handleInputChange,
  isLoading,
  status,
  stop,
  selectedModel,
  setSelectedModel,
}: InputProps) => {
  return (
    <div className="relative w-full pt-4">
      <ShadcnTextarea
        className="resize-none bg-secondary w-full rounded-2xl pr-12 pt-4 pb-16"
        value={input}
        autoFocus
        placeholder={"Say something..."}
        // @ts-expect-error err
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim() && !isLoading) {
              // @ts-expect-error err
              const form = e.target.closest("form");
              if (form) form.requestSubmit();
            }
          }
        }}
      />
      <ModelPicker
        setSelectedModel={setSelectedModel}
        selectedModel={selectedModel}
      />

      {status === "streaming" || status === "submitted" ? (
        <button
          type="button"
          onClick={stop}
          className="cursor-pointer absolute right-2 bottom-2 rounded-full p-2 bg-black hover:bg-zinc-800 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors"
        >
          <div className="animate-spin h-4 w-4">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-2 bottom-2 rounded-full p-2 bg-black hover:bg-zinc-800 disabled:bg-zinc-300 disabled:dark:bg-zinc-700 dark:disabled:opacity-80 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowUp className="h-4 w-4 text-white" />
        </button>
      )}
    </div>
  );
};

```

---
### File: `components/ui/button.tsx`
---

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

---
### File: `components/ui/input.tsx`
---

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

---
### File: `components/ui/label.tsx`
---

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```

---
### File: `components/ui/select.tsx`
---

```tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "text-muted-foreground data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-fit items-center justify-between gap-2 rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-secondary data-[state=open]:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-secondary text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```

---
### File: `components/ui/sonner.tsx`
---

```tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```

---
### File: `components/ui/textarea.tsx`
---

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```

---
### File: `lib/hooks/use-llm-response.tsx`
---

```tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

interface UseLlmResponseProps {
  prompt: string;
  context?: string | null;
  enabled?: boolean; // To control when the hook runs
}

interface LlmResponse {
  response: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useLlmResponse({ prompt, context, enabled = true }: UseLlmResponseProps): LlmResponse {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !prompt) {
      setResponse(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchLlmResponse = async () => {
      setIsLoading(true);
      setError(null);
      setResponse(null);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: prompt }],
            context: context,
            selectedModel: "kimi-k2", // Using a valid model from providers.ts
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Failed to get LLM response.");
        }

        const data = await res.json();
        setResponse(data.response);
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLlmResponse();
  }, [prompt, context, enabled]);

  return { response, isLoading, error };
}

```

---
### File: `lib/hooks/use-scroll-to-bottom.tsx`
---

```tsx
import { useEffect, useRef, type RefObject } from 'react';

export function useScrollToBottom(): [
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
] {
  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const end = endRef.current;

    if (container && end) {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: 'instant', block: 'end' });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  // @ts-expect-error error
  return [containerRef, endRef];
}
```

---
### File: `lib/hooks/use-welcome-message.tsx`
---

```tsx
"use client";

import { useLlmResponse } from "./use-llm-response";

interface UseWelcomeMessageProps {
  context: string | null; // The refined context
  enabled: boolean;
}

export function useWelcomeMessage({ context, enabled }: UseWelcomeMessageProps) {
  const welcomePrompt = `Based on the following content, create a short, friendly, and welcoming message (2-3 sentences). Greet the user and briefly mention the main topic of the content. End by asking how you can help.

  Content:
  ---
  ${context}
  ---
  `;

  return useLlmResponse({
    prompt: welcomePrompt,
    context: null, // We are providing the context within the prompt itself
    enabled: enabled && context !== null,
  });
}
```

---
### File: `lib/utils.ts`
---

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

- Asset: `public/file.svg`
- Asset: `public/globe.svg`
- Asset: `public/next.svg`
- Asset: `public/vercel.svg`
- Asset: `public/window.svg`

---
*End of Codebase Report.*
