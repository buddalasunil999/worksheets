import React from 'react';

interface Lesson6Props {
  limit: number;
  min: number;
  max: number;
  generateEvenOddProblems: (n: number) => any[];
}

export function Lesson6({ limit, min, max, generateEvenOddProblems }: Lesson6Props) {
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
