"use client";

import NumberConceptsWorksheet from './NumberConceptsWorksheet';
import { Addition } from './modules/module1/Addition';
import { Subtraction } from './modules/module1/Subtraction';
import { useEffect, useState } from 'react';

export const WorksheetGenerator = () => {
  const [module, setModule] = useState<'module1' | 'module2'>('module1');
  const [lesson, setLesson] = useState<number>(1);
  const [type, setType] = useState<'addition' | 'subtraction'>('addition');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="print:hidden">
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
        </div>
        {module === 'module1' && (
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
          </div>
        )}
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
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded print:hidden mb-8 mx-auto block"
        >
          Print Worksheet
        </button>
      </div>
      {/* Module 1: Addition & Subtraction */}
      {module === 'module1' && type === 'addition' && (
        <Addition />
      )}
      {module === 'module1' && type === 'subtraction' && (
        <Subtraction />
      )}
      {/* Module 2: Number Concepts */}
      {module === 'module2' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Module 2: Number Concepts Worksheet</h2>
          </div>
          <NumberConceptsWorksheet lesson={lesson} />
        </div>
      )}
    </div>
  );
}
