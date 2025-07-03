import React from 'react';

import { generateBeforeAfterBetweenProblems } from '../../../utils/numberConcepts';

interface Lesson3Props {
  limit: number;
  min: number;
  max: number;
}

export function Lesson3({ limit, min, max }: Lesson3Props) {
  const problems = Array.from({ length: limit }, () => {
    let p;
    do {
      p = generateBeforeAfterBetweenProblems(1)[0];
    } while (p.number < min || p.number > max);
    return p;
  });
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <ul style={{ flex: 1 }}>
        {problems.slice(0, limit / 2).map((p, i) => {
          const blankType = Math.floor(Math.random() * 3);
          let display;
          if (blankType === 0) {
            display = <>{'___, '}{p.number}, {p.after}</>;
          } else if (blankType === 1) {
            display = <>{p.before}, ___, {p.after}</>;
          } else {
            display = <>{p.before}, {p.number}, ___</>;
          }
          return <li key={i}>{display}</li>;
        })}
      </ul>
      <ul style={{ flex: 1 }}>
        {problems.slice(limit / 2, limit).map((p, i) => {
          const blankType = Math.floor(Math.random() * 3);
          let display;
          if (blankType === 0) {
            display = <>{'___, '}{p.number}, {p.after}</>;
          } else if (blankType === 1) {
            display = <>{p.before}, ___, {p.after}</>;
          } else {
            display = <>{p.before}, {p.number}, ___</>;
          }
          return <li key={i + limit / 2}>{display}</li>;
        })}
      </ul>
    </div>
  );
}
