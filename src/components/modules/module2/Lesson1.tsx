import React from 'react';

import { generateFacePlaceValueProblems } from '../../../utils/numberConcepts';

interface Lesson1Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson1({ limit, min, max }: Lesson1Props) {
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
