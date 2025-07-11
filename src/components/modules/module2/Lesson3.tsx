import React from 'react';

export type BeforeAfterBetweenProblem = {
  before: number;
  number: number;
  after: number;
};

interface Lesson3Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson3({ limit, min, max }: Lesson3Props) {
  // Generate problems using new min/max logic
  const problems = generateBeforeAfterBetweenProblems(limit, min, max);
  // Example (first problem, solved)
  const example = problems[0];
  // For the example, show all values filled in
  const exampleDisplay = (
    <li key={0} style={{ marginBottom: '1em' }}>
      <b>Example:</b> {example.before}, <b>{example.number}</b>, {example.after}
    </li>
  );
  // The rest for students to solve, split into two columns
  const rest = problems.slice(1);
  const half = Math.ceil(rest.length / 2);
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <ul style={{ flex: 1 }}>
        {exampleDisplay}
        {rest.slice(0, half).map((p, i) => {
          const blankType = Math.floor(Math.random() * 3);
          let display;
          if (blankType === 0) {
            display = <>{'___, '}{p.number}, {p.after}</>;
          } else if (blankType === 1) {
            display = <>{p.before}, ___, {p.after}</>;
          } else {
            display = <>{p.before}, {p.number}, ___</>;
          }
          return <li key={i + 1}>{display}</li>;
        })}
      </ul>
      <ul style={{ flex: 1 }}>
        {rest.slice(half).map((p, i) => {
          const blankType = Math.floor(Math.random() * 3);
          let display;
          if (blankType === 0) {
            display = <>{'___, '}{p.number}, {p.after}</>;
          } else if (blankType === 1) {
            display = <>{p.before}, ___, {p.after}</>;
          } else {
            display = <>{p.before}, {p.number}, ___</>;
          }
          return <li key={i + 1 + half}>{display}</li>;
        })}
      </ul>
    </div>
  );
}

export function generateBeforeAfterBetweenProblems(count: number, min: number, max: number): BeforeAfterBetweenProblem[] {
  const problems: BeforeAfterBetweenProblem[] = [];
  for (let i = 0; i < count; i++) {
    const minNum = Math.max(min, 2);
    const maxNum = Math.min(max, max - 1);
    const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    problems.push({
      before: num - 1,
      number: num,
      after: num + 1,
    });
  }
  return problems;
}
