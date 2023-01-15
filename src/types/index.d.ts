namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    // NEXT_PUBLIC_API_HOST: string;
    NOTION_KEY: string;
    NOTION_DATABASE_ID: string;
  }
}