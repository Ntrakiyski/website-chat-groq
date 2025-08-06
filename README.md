# Website chatbot - chat with your data using Groq

## Description
This is an open-source AI chatbot application template built with Next.js, the Vercel AI SDK, and Groq. It allows users to provide a data source, like a website or PDF, and then chat with an AI assistant that answers questions based on that content.

## Run Locally
1. Clone repository:
   ```bash
   git clone https://github.com/ntrakiyski/website-chat-groq.git
   cd website-chat-groq
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run application:
   ```bash
   pnpm dev
   ```

## Live Demo
Test the live version: [https://website-chat.worfklow.org](https://website-chat.worfklow.org)

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS, Shadcn/UI, Framer Motion
- **Backend**: Node.js (Next.js App Router)
- **Database**: N/A
- **Tools**: Vercel, Git, pnpm, TypeScript, ESLint
- **Other**: Vercel AI SDK, Groq, REST API, Firecrawl

## Approach & Architecture
The project is built using a client-server architecture with the Next.js App Router.

- **Overall architecture**: The frontend is a React-based single-page application responsible for user interaction. The backend consists of serverless API routes hosted by Next.js, which handle data processing and AI interactions.

- **Key components and their interactions**:
    - **`DataSourceForm`**: The initial UI component where a user can submit a website URL or upload a PDF document.
    - **API Routes (`app/api/*`)**:
        - `/api/process-data`: Takes a URL, uses the Firecrawl service to scrape the website's content, and returns it as clean markdown.
        - `/api/process-pdf`: Receives a PDF file, sends it to an external n8n webhook for text extraction, and returns the processed content.
        - `/api/chat`: The main AI endpoint. It receives the chat history and the processed context, then uses the Vercel AI SDK and a selected Groq model to generate a conversational response.
        - `/api/generate-faqs`: Generates a list of Frequently Asked Questions based on the provided context.
    - **`Chat` Component**: The primary chat interface that displays messages and handles user input. It communicates with the `/api/chat` endpoint to get AI-generated responses.
    - **Custom Hooks (`lib/hooks/*`)**: React hooks like `useLlmResponse`, `useWelcomeMessage`, and `useSuggestions` are used to manage state and logic for fetching data from the AI backend, creating a clean separation of concerns.

- **Data flow through the system**:
    1. A user submits a data source (URL/PDF) on the client.
    2. The client sends this data to the appropriate processing API route (`/api/process-data` or `/api/process-pdf`).
    3. The API route processes the source and returns the extracted text content (`context`) to the client.
    4. The client then makes subsequent calls to the `/api/chat` endpoint to summarize the context, generate a welcome message, and create suggested prompts.
    5. Once initialized, the `Chat` component sends the user's messages along with the processed context to the `/api/chat` endpoint, which returns the AI's response to be displayed in the UI.
