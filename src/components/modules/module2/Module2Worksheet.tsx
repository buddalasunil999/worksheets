import React from 'react';
import { Lesson1 } from './Lesson1';
import { Lesson2 } from './Lesson2';
import { Lesson3 } from './Lesson3';
import { Lesson4 } from './Lesson4';
import { Lesson5 } from './Lesson5';
import { Lesson6 } from './Lesson6';

import { useWorksheet, defaultModules } from '../../WorksheetContext';

export default function Module2Worksheet() {
  const { selectedLessonId, setSelectedLessonId } = useWorksheet();
  // Get lessons from defaultModules
  const lessons = defaultModules.find((m: any) => m.id === 2)?.lessons || [];
  const selectedLesson = lessons.find((l: any) => l.id === selectedLessonId);

  let lessonComponent = null;
  if (selectedLesson) {
    switch (selectedLessonId) {
      case 1:
        lessonComponent = <Lesson1 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      case 2:
        lessonComponent = <Lesson2 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      case 3:
        lessonComponent = <Lesson3 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      case 4:
        lessonComponent = <Lesson4 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      case 5:
        lessonComponent = <Lesson5 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      case 6:
        lessonComponent = <Lesson6 limit={selectedLesson.limit} min={selectedLesson.min} max={selectedLesson.max} />;
        break;
      default:
        lessonComponent = null;
    }
  }
  return (
    <div className="worksheet">
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
      <h2>{`Lesson ${selectedLessonId}: ${selectedLesson?.name || ''}`}</h2>
      {lessonComponent}
    </div>
  );
}
