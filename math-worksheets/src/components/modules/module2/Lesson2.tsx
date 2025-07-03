import React from 'react';

interface Lesson2Props {
  limit: number;
  min: number;
  max: number;
  generateExpandedStandardProblems: (n: number) => any[];
}

export function Lesson2({ limit, min, max, generateExpandedStandardProblems }: Lesson2Props) {
  const problems = Array.from({ length: limit }, () => {
    let p;
    do {
      p = generateExpandedStandardProblems(1)[0];
    } while (p.number < min || p.number > max);
    return p;
  });
  return (
    <ul>
      {problems.map((p, i) => (
        <li key={i}>
          Number: <b>{p.number}</b> &mdash; Expanded form: __________ | Standard form: __________
        </li>
      ))}
    </ul>
  );
}
