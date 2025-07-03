"use client";

import { generateAdditionProblems, generateSubtractionProblems } from '../utils/mathProblems';
import type { MathProblem } from '../utils/mathProblems';
import NumberConceptsWorksheet from './NumberConceptsWorksheet';

import { useEffect, useState } from 'react';

export const WorksheetGenerator = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [additionProblems, setAdditionProblems] = useState<MathProblem[]>([]);
  const [subtractionProblems, setSubtractionProblems] = useState<MathProblem[]>([]);
  const [type, setType] = useState<'addition' | 'subtraction' | 'numberConcept'>('addition');
  const [lesson, setLesson] = useState<number>(1);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
    setAdditionProblems(generateAdditionProblems(36));
    setSubtractionProblems(generateSubtractionProblems(36));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="print:hidden">
        <div className="flex gap-2 mt-8 mb-4">
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
            onClick={() => setType('numberConcept')}
            className={`px-4 py-2 rounded ${type === 'numberConcept' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Number Concepts
          </button>
        </div>
        {type === 'numberConcept' && (
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
      {type === 'addition' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Math Worksheet</h2>
            <p className="text-sm">{currentDate}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Double-Digit Addition</h3>
            <div className="grid grid-cols-6 gap-6">
              {additionProblems.map((problem, index) => (
                <div key={index} className="p-4 border rounded">
                  <div className="text-center">
                    <div className="font-mono">
                      <div className="text-right">{problem.num1}</div>
                      <div className="text-right">+ {problem.num2}</div>
                      <div className="border-t border-black mt-1 pt-1">
                        {index === 0 && <div className="text-right">{problem.answer}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {type === 'subtraction' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Math Worksheet - Part 2</h2>
            <p className="text-sm">{currentDate}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Double-Digit Subtraction</h3>
            <div className="grid grid-cols-6 gap-6">
              {subtractionProblems.map((problem, index) => (
                <div key={index} className="p-4 border rounded">
                  <div className="text-center">
                    <div className="font-mono">
                      <div className="text-right">{problem.num1}</div>
                      <div className="text-right">- {problem.num2}</div>
                      <div className="border-t border-black mt-1 pt-1">
                        {index === 0 && <div className="text-right">{problem.answer}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {type === 'numberConcept' && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Number Concepts Worksheet</h2>
            <p className="text-sm">{currentDate}</p>
          </div>
          <NumberConceptsWorksheet lesson={lesson} />
        </div>
      )}
    </div>
  );
}
