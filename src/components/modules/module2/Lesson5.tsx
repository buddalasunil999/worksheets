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
  // Example (first problem, solved)
  const example = problems[0];
  function ordinalWord(n: number) {
    // Simple English ordinal conversion for demonstration
    const ordinals = ['th','st','nd','rd'];
    const v = n % 100;
    return n + (ordinals[(v-20)%10] || ordinals[v] || ordinals[0]);
  }
  return (
    <ul>
      <li key={0} style={{ marginBottom: '1em' }}>
        <b>Example:</b> Ordinal: {example}th (write in words: <b>{ordinalWord(example)}</b>, numeral: <b>{example}th</b>) | Cardinal: <b>{example}</b>
      </li>
      {problems.slice(1).map((num, i) => (
        <li key={i + 1}>
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
