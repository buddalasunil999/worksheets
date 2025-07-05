import React, { useEffect, useState } from 'react';

// Utility functions and types for Subtraction problems
export interface MathProblem {
  num1: number;
  num2: number;
  answer: number;
}

const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateSubtractionProblems = (count: number, max: number): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  for (let i = 0; i < count; i++) {
    const num1 = generateNumber(20, max - 1);
    const num2 = generateNumber(10, num1 - 1); // Ensure num2 is smaller than num1
    const answer = num1 - num2;
    
    problems.push({
      num1,
      num2,
      answer,
    });
  }
  
  return problems;
};

interface SubtractionProps {
  numberOfLessons?: number;
  max?: number;
}


export function Subtraction({ numberOfLessons = 10, max = 100 }: SubtractionProps) {
  const [problems, setProblems] = useState<MathProblem[]>([]);

  useEffect(() => {
      setProblems(generateSubtractionProblems(numberOfLessons, max));
  }, [max]);
  return (
    <div className="mb-8 print:mb-4">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold">Module 1: Subtraction Worksheet</h2>
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
