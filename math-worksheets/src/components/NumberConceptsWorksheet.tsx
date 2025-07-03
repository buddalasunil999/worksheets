import React from 'react';
import {
  generateFacePlaceValueProblems,
  generateExpandedStandardProblems,
  generateBeforeAfterBetweenProblems,
  generateComparingOrderingProblems,
  generateOrdinalProblems,
  generateEvenOddProblems,
} from '../utils/numberConcepts';

interface WorksheetProps {
  lesson: number;
}

const LESSON_TITLES = [
  '',
  'Face Value and Place Value',
  'Expanded and Standard Forms',
  'Before, After, and Between (up to 200)',
  'Comparing and Ordering Numbers',
  'Ordinal Numbers (11 to 200)',
  'Even and Odd Numbers',
];

export default function NumberConceptsWorksheet({ lesson }: WorksheetProps) {
  let problems;
  switch (lesson) {
    case 1:
      problems = generateFacePlaceValueProblems(20);
      break;
    case 2:
      problems = generateExpandedStandardProblems(20);
      break;
    case 3:
      problems = generateBeforeAfterBetweenProblems(20);
      break;
    case 4:
      problems = generateComparingOrderingProblems(20);
      break;
    case 5:
      problems = generateOrdinalProblems(20);
      break;
    case 6:
      problems = generateEvenOddProblems(20);
      break;
    default:
      problems = [];
  }

  return (
    <div className="worksheet">
      <h2>{`Lesson ${lesson}: ${LESSON_TITLES[lesson]}`}</h2>
      <ul>
        {lesson === 1 && problems.map((p, i) => (
          <li key={i}>
            Number: <b>{p.number}</b> — Hundreds: ___ Tens: ___ Ones: ___
          </li>
        ))}
        {lesson === 2 && problems.map((p, i) => (
          <li key={i}>
            Number: <b>{p.number}</b> — Expanded form: __________
          </li>
        ))}
        {lesson === 3 && problems.map((p, i) => (
          <li key={i}>
            Before: ___ Number: <b>{p.number}</b> After: ___
          </li>
        ))}
        {lesson === 4 && problems.map((p, i) => (
          <li key={i}>
            {p.a} ___ {p.b}
          </li>
        ))}
        {lesson === 5 && problems.map((num, i) => (
          <li key={i}>
            {num}th: __________
          </li>
        ))}
        {lesson === 6 && problems.map((p, i) => (
          <li key={i}>
            Number: <b>{p.number}</b> — Even or Odd? __________
          </li>
        ))}
      </ul>
    </div>
  );
}
