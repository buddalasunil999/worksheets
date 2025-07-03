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
    let p;
    do {
      p = generateEvenOddProblems(1)[0];
    } while (p.number < min || p.number > max);
    return p;
  });
  return (
    <ul>
      {problems.map((p, i) => (
        <li key={i}>
          Number: <b>{p.number}</b> &mdash; Even or Odd? __________ (Show by grouping/dividing by 2)
        </li>
      ))}
    </ul>
  );
}

export function generateEvenOddProblems(count: number): EvenOddProblem[] {
  const problems: EvenOddProblem[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 190) + 11; // 11 to 200
    problems.push({
      number: num,
      type: num % 2 === 0 ? 'Even' : 'Odd',
    });
  }
  return problems;
}
