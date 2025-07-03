import React from 'react';

export type ComparingOrderingProblem = {
  a: number;
  b: number;
  comparison: '>' | '<' | '=';
};

interface Lesson4Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson4({ limit, min, max }: Lesson4Props) {
  const problems = Array.from({ length: limit }, () => {
    let p;
    do {
      p = generateComparingOrderingProblems(1)[0];
    } while (
      p.a < min || p.a > max ||
      p.b < min || p.b > max
    );
    return p;
  });
  return (
    <ul>
      {problems.map((p, i) => (
        <li key={i}>
          Compare: {p.a} ___ {p.b} | Order: __________
        </li>
      ))}
    </ul>
  );
}

export function generateComparingOrderingProblems(count: number): ComparingOrderingProblem[] {
  const problems: ComparingOrderingProblem[] = [];
  for (let i = 0; i < count; i++) {
    const a = Math.floor(Math.random() * 900) + 100;
    const b = Math.floor(Math.random() * 900) + 100;
    problems.push({
      a,
      b,
      comparison: a > b ? '>' : a < b ? '<' : '=',
    });
  }
  return problems;
}
