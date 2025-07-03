import React from 'react';
import type { MathProblem } from '../../../utils/mathProblems';

interface SubtractionProps {
  problems: MathProblem[];
  currentDate: string;
}

export function Subtraction({ problems, currentDate }: SubtractionProps) {
  return (
    <div className="mb-8 print:mb-4">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold">Module 1: Subtraction Worksheet</h2>
        <p className="text-sm">{currentDate}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Double-Digit Subtraction</h3>
        <div className="grid grid-cols-6 gap-6">
          {problems.map((problem, index) => (
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
  );
}
