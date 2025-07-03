import React from 'react';

export type FacePlaceValueProblem = {
  number: number;
  hundreds: number;
  tens: number;
  ones: number;
};
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

export type ExpandedStandardProblem = {
  number: number;
  expanded: string;
};
export function generateExpandedStandardProblems(count: number): ExpandedStandardProblem[] {
  const problems: ExpandedStandardProblem[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 900) + 100;
    const digits = num.toString().split('').map(Number);
    const expanded = `${digits[0]}00 + ${digits[1]}0 + ${digits[2]}`;
    problems.push({
      number: num,
      expanded,
    });
  }
  return problems;
}

export type BeforeAfterBetweenProblem = {
  before: number;
  number: number;
  after: number;
};
export function generateBeforeAfterBetweenProblems(count: number): BeforeAfterBetweenProblem[] {
  const problems: BeforeAfterBetweenProblem[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 198) + 2; // 2 to 199
    problems.push({
      before: num - 1,
      number: num,
      after: num + 1,
    });
  }
  return problems;
}

export type ComparingOrderingProblem = {
  a: number;
  b: number;
  comparison: '>' | '<' | '=';
};
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

export function generateOrdinalProblems(count: number): number[] {
  const problems: number[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 190) + 11; // 11 to 200
    problems.push(num);
  }
  return problems;
}

export type EvenOddProblem = {
  number: number;
  type: 'Even' | 'Odd';
};
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
