import React from 'react';

export type FacePlaceValueProblem = {
  number: number;
  digit: number;
  position: 'hundreds' | 'tens' | 'ones';
  faceValue: number;
  placeValue: number;
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
      p = generateFacePlaceValueProblems(1, min, max)[0];
    } while (!p);
    return p;
  });
  return (
    <ul>
      {/* Example (first problem, solved) */}
      <li key={0} style={{ marginBottom: '1em' }}>
        <b>Example:</b> In <b>{problems[0].number}</b>, what is the face value of <b>{problems[0].digit}</b>? <b>{problems[0].faceValue}</b> What is the place value of <b>{problems[0].digit}</b>? <b>{problems[0].placeValue}</b>
      </li>
      {/* The rest for students to solve */}
      {problems.slice(1).map((p, i) => (
        <li key={i + 1}>
          In <b>{p.number}</b>, what is the face value of <b>{p.digit}</b>? __________ What is the place value of <b>{p.digit}</b>? __________
        </li>
      ))}
    </ul>
  );
}

export function generateFacePlaceValueProblems(count: number, min = 100, max = 1000): FacePlaceValueProblem[] {
  const problems: FacePlaceValueProblem[] = [];
  for (let i = 0; i < count; i++) {
    let num: number;
    do {
      num = Math.floor(Math.random() * (max - min)) + min;
    } while (num < min || num > max);
    const digits = num.toString().split('').map(Number);
    // Randomly select a position: 0=hundreds, 1=tens, 2=ones
    const posIdx = Math.floor(Math.random() * 3);
    let position: 'hundreds' | 'tens' | 'ones';
    let digit: number;
    let placeValue: number;
    switch (posIdx) {
      case 0:
        position = 'hundreds';
        digit = digits[0];
        placeValue = digit * 100;
        break;
      case 1:
        position = 'tens';
        digit = digits[1];
        placeValue = digit * 10;
        break;
      default:
        position = 'ones';
        digit = digits[2];
        placeValue = digit;
    }
    problems.push({
      number: num,
      digit,
      position,
      faceValue: digit,
      placeValue,
    });
  }
  return problems;
}
