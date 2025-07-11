import React, { useEffect, useState } from 'react';

// Utility functions and types for Addition problems
export interface MathProblem {
  num1: number;
  num2: number;
  answer: number;
}

const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateAdditionProblems = (count: number, min:number, max: number): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  for (let i = 0; i < count; i++) {
    const num1 = generateNumber(min, max - 1);
    const num2 = generateNumber(min, max - 1);
    const answer = num1 + num2;
    
    problems.push({
      num1,
      num2,
      answer,
    });
  }
  
  return problems;
};

interface AdditionProps {
  limit?: number;
  min?: number;
  max?: number;
}


export function Addition({ limit = 10, min = 1, max = 100 }: AdditionProps) {
  const [problems, setProblems] = useState<MathProblem[]>([]);

  useEffect(() => {
      setProblems(generateAdditionProblems(limit, min, max));
  }, [limit, max]);

  return (
    <div className="mb-8 print:mb-4">
      <div className="mb-6">
        <div className="grid grid-cols-6 gap-6">
          {problems.map((problem, index) => (
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
  );
}
