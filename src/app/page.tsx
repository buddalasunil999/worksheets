
import { WorksheetGenerator } from "../components/WorksheetGenerator";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-3xl">        
        <WorksheetGenerator />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-xs text-gray-500 dark:text-gray-400">
        <span>
          Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Next.js</a> &amp; <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">React</a>
        </span>
        <span>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Source on GitHub</a>
        </span>
      </footer>
    </div>
  );
}
