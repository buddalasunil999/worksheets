import React from 'react';

import { generateOrdinalProblems } from '../../../utils/numberConcepts';

interface Lesson5Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson5({ limit, min, max }: Lesson5Props) {
  const problems = Array.from({ length: limit }, () => {
    let num;
    do {
      num = generateOrdinalProblems(1)[0];
    } while (num < min || num > max);
    return num;
  });
  return (
    <ul>
      {problems.map((num, i) => (
        <li key={i}>
          Ordinal: {num}th (write in words: __________, numeral: __________) | Cardinal: __________
        </li>
      ))}
    </ul>
  );
}
