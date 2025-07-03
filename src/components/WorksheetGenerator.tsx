"use client";
import { generateAdditionProblems, generateSubtractionProblems } from '../utils/mathProblems';
import type { MathProblem } from '../utils/mathProblems';

import { useEffect, useState } from 'react';

export const WorksheetGenerator = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [additionProblems, setAdditionProblems] = useState<MathProblem[]>([]);
  const [subtractionProblems, setSubtractionProblems] = useState<MathProblem[]>([]);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
    setAdditionProblems(generateAdditionProblems(36));
    setSubtractionProblems(generateSubtractionProblems(36));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => window.print()}
        className="bg-blue-500 text-white px-4 py-2 rounded print:hidden mt-8 mb-8 mx-auto block"
      >
        Print All Worksheets
      </button>
      <div className="print:block">
        <div className="mb-8 print:mb-4 print:break-after-page">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Math Worksheet</h2>
            <p className="text-sm">{currentDate}</p>
          </div>
          {/* Addition Problems */}
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

        {/* Second Page */}
        <div className="mb-8 print:mb-4 print:break-after-page">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Math Worksheet - Part 2</h2>
            <p className="text-sm">{currentDate}</p>
          </div>
          {/* Subtraction Problems */}
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
      </div>
    </div>
  );
}
