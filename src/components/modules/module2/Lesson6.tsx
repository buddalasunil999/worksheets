import React from 'react';

export type EvenOddProblem = {
  number: number;
  type: 'Even' | 'Odd';
};

interface Lesson6Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson6({ limit, min, max }: Lesson6Props) {
  const problems = Array.from({ length: limit }, () => {
    return generateEvenOddProblems(1, min, max)[0];
  });
  return (
    <ul>
      {/* Example (first problem, solved) */}
      <li key={0} style={{ marginBottom: '1em' }}>
        <b>Example:</b> Number: <b>{problems[0].number}</b> — Even or Odd? <b>{problems[0].type}</b> (Show by grouping/dividing by 2)
      </li>
      {/* The rest for students to solve */}
      {problems.slice(1).map((p, i) => (
        <li key={i + 1}>
          Number: <b>{p.number}</b> — Even or Odd? __________ (Show by grouping/dividing by 2)
        </li>
      ))}
    </ul>
  );
}

export function generateEvenOddProblems(count: number, min: number, max: number): EvenOddProblem[] {
  const problems: EvenOddProblem[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    problems.push({
      number: num,
      type: num % 2 === 0 ? 'Even' : 'Odd',
    });
  }
  return problems;
}
