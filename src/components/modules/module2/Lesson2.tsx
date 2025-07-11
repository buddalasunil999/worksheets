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
  const problems = generateExpandedStandardProblems(limit, min, max);
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

export function generateExpandedStandardProblems(count: number, min: number, max: number): ExpandedStandardProblem[] {
  const problems: ExpandedStandardProblem[] = [];
  for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    // Ensure unique problems and within range
    while (problems.some(p => p.number === num)) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const digits = num.toString().split("").map(Number);
    // Build expanded form for any number of digits
    const expanded = digits
      .map((d, idx) => {
        const place = digits.length - idx - 1;
        return d === 0 ? null : `${d}${"0".repeat(place)}`;
      })
      .filter(Boolean)
      .join(" + ");
    problems.push({
      number: num,
      expanded,
    });
  }
  return problems;
}
