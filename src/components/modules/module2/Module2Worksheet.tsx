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

export default function Module2Worksheet({ lesson }: WorksheetProps) {
const limit = 20;
const min = 100;
const max = 200;

  let lessonComponent = null;
  switch (lesson) {
    case 1:
      lessonComponent = <Lesson1 limit={limit} min={min} max={max} />;
      break;
    case 2:
      lessonComponent = <Lesson2 limit={limit} min={min} max={max} />;
      break;
    case 3:
      lessonComponent = <Lesson3 limit={limit} min={min} max={max} />;
      break;
    case 4:
      lessonComponent = <Lesson4 limit={limit} min={min} max={max} />;
      break;
    case 5:
      lessonComponent = <Lesson5 limit={limit} min={min} max={max} />;
      break;
    case 6:
      lessonComponent = <Lesson6 limit={limit} min={min} max={max} />;
      break;
    default:
      lessonComponent = null;
  }
  return (
    <div className="worksheet">
      <h2>{`Lesson ${lesson}: ${LESSON_TITLES[lesson]}`}</h2>
      {lessonComponent}
    </div>
  );
}
