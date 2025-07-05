import React from 'react';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';

import { useWorksheet, defaultModules } from '../../WorksheetContext';


export const Module3Worksheet: React.FC = () => {
  const { selectedLessonId, setSelectedLessonId } = useWorksheet();
  const lessons = defaultModules.find((m: any) => m.id === 3)?.lessons || [];
  const selectedLesson = lessons.find((lesson: any) => lesson.id === selectedLessonId);
  const limit = selectedLesson?.limit ?? 25;
  const max = selectedLesson?.max ?? 1000;

  let lessonComponent = null;
  switch (selectedLessonId) {
    case 1:
      lessonComponent = <Lesson1 limit={limit} max={max} />;
      break;
    case 2:
      lessonComponent = <Lesson2 limit={limit} max={max} />;
      break;
    case 3:
      lessonComponent = <Lesson3 limit={limit} max={max} />;
      break;
    case 4:
      lessonComponent = <Lesson4 limit={limit} max={max} />;
      break;
    default:
      lessonComponent = <div>Select a lesson to view the worksheet.</div>;
  }

  return (
    <div>
      {lessons.length > 1 && (
        <div className="print:hidden mb-4">
          <label className="font-semibold mr-2">Select Lesson:</label>
          <select
            value={selectedLessonId}
            onChange={e => setSelectedLessonId(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {lessons.map((lesson: any) => (
              <option key={lesson.id} value={lesson.id}>{lesson.name}</option>
            ))}
          </select>
        </div>
      )}
      {lessonComponent}
    </div>
  );
};

export default Module3Worksheet;
