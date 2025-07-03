import React from 'react';

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

export function generateOrdinalProblems(count: number): number[] {
  const problems: number[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 190) + 11; // 11 to 200
    problems.push(num);
  }
  return problems;
}
