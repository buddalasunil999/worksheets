import React from 'react';
import { Lesson1 } from './Lesson1';
import { Lesson2 } from './Lesson2';
import { Lesson3 } from './Lesson3';
import { Lesson4 } from './Lesson4';
import { Lesson5 } from './Lesson5';
import { Lesson6 } from './Lesson6';

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
  return (
    <div className="worksheet">
      <h2>{`Lesson ${lesson}: ${LESSON_TITLES[lesson]}`}</h2>
      {lesson === 1 && (
        <Lesson1 limit={20} min={100} max={200} />
      )}
      {lesson === 2 && (
        <Lesson2 limit={20} min={100} max={200} />
      )}
      {lesson === 3 && (
        <Lesson3 limit={40} min={100} max={200} />
      )}
      {lesson === 4 && (
        <Lesson4 limit={20} min={100} max={200} />
      )}
      {lesson === 5 && (
        <Lesson5 limit={20} min={11} max={200} />
      )}
      {lesson === 6 && (
        <Lesson6 limit={20} min={100} max={200} />
      )}
    </div>
  );
}
