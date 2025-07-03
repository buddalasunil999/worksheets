import React from 'react';

interface Lesson4Props {
  limit: number;
  min: number;
  max: number;
  generateComparingOrderingProblems: (n: number) => any[];
}

export function Lesson4({ limit, min, max, generateComparingOrderingProblems }: Lesson4Props) {
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
