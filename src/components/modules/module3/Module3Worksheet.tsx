import React from 'react';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';


interface Module3WorksheetProps {
  lesson: number;
}


export const Module3Worksheet: React.FC<Module3WorksheetProps> = ({ lesson }) => {
  const count = 25; // Default count for problems
  const maxLimit = 1000;

  switch (lesson) {
    case 1:
      return <Lesson1 count={count} maxLimit={maxLimit} />;
    case 2:
      return <Lesson2 count={count} maxLimit={maxLimit} />;
    case 3:
      return <Lesson3 count={count} maxLimit={maxLimit} />;
    case 4:
      return <Lesson4 count={count} maxLimit={maxLimit} />;
    default:
      return <div>Select a lesson to view the worksheet.</div>;
  }
};

export default Module3Worksheet;
