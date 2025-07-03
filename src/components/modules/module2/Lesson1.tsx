import React from 'react';

export type FacePlaceValueProblem = {
  number: number;
  hundreds: number;
  tens: number;
  ones: number;
};

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

export function generateFacePlaceValueProblems(count: number): FacePlaceValueProblem[] {
  const problems: FacePlaceValueProblem[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 900) + 100; // 3-digit number
    const digits = num.toString().split('').map(Number);
    problems.push({
      number: num,
      hundreds: digits[0],
      tens: digits[1],
      ones: digits[2],
    });
  }
  return problems;
}
