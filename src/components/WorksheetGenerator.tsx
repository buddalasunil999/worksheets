"use client";

import Module2Worksheet from './modules/module2/Module2Worksheet';
import Module1Worksheet from './modules/module1/Module1Worksheet';
import { useState } from 'react';
import Module3Worksheet from './modules/module3/Module3Worksheet';

export const WorksheetGenerator = () => {
  const [module, setModule] = useState<'module1' | 'module2' | 'module3'>('module1');
  const [lesson, setLesson] = useState<number>(1);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded print:hidden mb-8 mx-auto block"
        >
          Print Worksheet
        </button>
        <div className="flex gap-2 mt-8 mb-4">
          <button
            onClick={() => setModule('module1')}
            className={`px-4 py-2 rounded ${module === 'module1' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          >
            Module 1: Addition & Subtraction
          </button>
          <button
            onClick={() => setModule('module2')}
            className={`px-4 py-2 rounded ${module === 'module2' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          >
            Module 2: Number Concepts
          </button>
          <button
            onClick={() => setModule('module3')}
            className={`px-4 py-2 rounded ${module === 'module3' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          >
            Module 3: Recognizing Patterns in Hundreds
          </button>
        </div>
        {module === 'module2' && (
          <div className="mb-4">
            <label className="font-semibold mr-2">Select Lesson:</label>
            <select
              value={lesson}
              onChange={e => setLesson(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              <option value={1}>Lesson 1: Face Value and Place Value</option>
              <option value={2}>Lesson 2: Expanded and Standard Forms</option>
              <option value={3}>Lesson 3: Before, After, and Between (up to 200)</option>
              <option value={4}>Lesson 4: Comparing and Ordering Numbers</option>
              <option value={5}>Lesson 5: Ordinal Numbers (11 to 200)</option>
              <option value={6}>Lesson 6: Even and Odd Numbers</option>
            </select>
          </div>
        )}
      </div>
      {/* Module 1: Addition & Subtraction */}
      {module === 'module1' && (
        <Module1Worksheet />
      )}
      {/* Module 2: Number Concepts */}
      {module === 'module2' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Module 2: Number Concepts Worksheet</h2>
          </div>
          <Module2Worksheet lesson={lesson} />
        </div>
      )}
      {/* Module 3: Recognizing Patterns in Hundreds */}
      {module === 'module3' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Module 3: Recognizing Patterns in Hundreds Worksheet</h2>
          </div>
          <div className="mb-4">
            <label className="font-semibold mr-2">Select Lesson:</label>
            <select
              value={lesson}
              onChange={e => setLesson(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              <option value={1}>Lesson 1: Recognizing Patterns in Hundreds</option>
              <option value={2}>Lesson 2: Skip-Counting by 5s</option>
              <option value={3}>Lesson 3: Skip-Counting by 10s</option>
              <option value={4}>Lesson 4: Skip-Counting by 100&apos;s</option>
            </select>
          </div>
          <Module3Worksheet lesson={lesson} />
        </div>
      )}
    </div>
  );
}
