import React from 'react';

export type ExpandedStandardProblem = {
  number: number;
  expanded: string;
};

interface Lesson2Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson2({ limit, min, max }: Lesson2Props) {
  const problems = Array.from({ length: limit }, () => {
    let p;
    do {
      p = generateExpandedStandardProblems(1)[0];
    } while (p.number < min || p.number > max);
    return p;
  });
  return (
    <ul>
      {/* Example (first problem, solved) */}
      <li key={0} style={{ marginBottom: '1em' }}>
        <b>Example:</b> Number: <b>{problems[0].number}</b> — Expanded form: <b>{problems[0].expanded}</b> | Standard form: <b>{problems[0].number}</b>
      </li>
      {/* The rest for students to solve */}
      {problems.slice(1).map((p, i) => (
        <li key={i + 1}>
          Number: <b>{p.number}</b> — Expanded form: __________ | Standard form: __________
        </li>
      ))}
    </ul>
  );
}

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
