import React from 'react';

interface Lesson1Props {
  limit: number;
  min: number;
  max: number;
  generateFacePlaceValueProblems: (n: number) => any[];
}

export function Lesson1({ limit, min, max, generateFacePlaceValueProblems }: Lesson1Props) {
  const problems = Array.from({ length: limit }, () => {
    let p;
    do {
      p = generateFacePlaceValueProblems(1)[0];
    } while (p.number < min || p.number > max);
    return p;
  });
  return (
    <ul>
      {problems.map((p, i) => (
        <li key={i}>
          Number: <b>{p.number}</b> &mdash; Face Value: _____, Place Value: _____ (Hundreds: ___ Tens: ___ Ones: ___)
        </li>
      ))}
    </ul>
  );
}
