import { useState } from "react";
import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";

type Module1WorksheetProps = Record<string, never>;

export default function Module1Worksheet({ }: Module1WorksheetProps) {
  const numberOfLessons = 36;
  const max = 100;

  const [type, setType] = useState<'addition' | 'subtraction' | 'all'>('addition');

  return (
    <div className="mb-8 print:mb-4">
      <div className="print:hidden">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setType('addition')}
            className={`px-4 py-2 rounded ${type === 'addition' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Addition
          </button>
          <button
            onClick={() => setType('subtraction')}
            className={`px-4 py-2 rounded ${type === 'subtraction' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Subtraction
          </button>
          <button
            onClick={() => setType('all')}
            className={`px-4 py-2 rounded ${type === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Module 1: Addition & Subtraction Worksheet</h2>
        </div>
      </div>
      {type === "addition" && (
        <Addition numberOfLessons={numberOfLessons} max={max} />
      )}
      {type === "subtraction" && (
        <Subtraction numberOfLessons={numberOfLessons} max={max} />
      )}
      {type === "all" && (
        <>
          <Addition numberOfLessons={numberOfLessons} max={max} />
          <div className="print:break-before-page" />
          <Subtraction numberOfLessons={numberOfLessons} max={max} />
        </>
      )}
    </div>
  );
}
