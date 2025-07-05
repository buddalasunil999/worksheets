import React from 'react';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';

import { useWorksheet, defaultModules } from '../../WorksheetContext';


export const Module3Worksheet: React.FC = () => {
  const { selectedLessonIds, setSelectedLessonIds } = useWorksheet();
  const lessons = defaultModules.find((m) => m.id === 3)?.lessons || [];

  const renderLessonComponent = (lesson: any) => {
    switch (lesson.id) {
      case 1:
        return <Lesson1 key={lesson.id} limit={lesson.limit} max={lesson.max} />;
      case 2:
        return <Lesson2 key={lesson.id} limit={lesson.limit} max={lesson.max} />;
      case 3:
        return <Lesson3 key={lesson.id} limit={lesson.limit} max={lesson.max} />;
      case 4:
        return <Lesson4 key={lesson.id} limit={lesson.limit} max={lesson.max} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {lessons.length > 1 && (
        <div className="print:hidden mb-4">
          <label className="font-semibold mr-2">Select Lessons:</label>
          <div className="flex flex-wrap gap-2">
            {lessons.map((lesson) => (
              <label key={lesson.id} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedLessonIds.includes(lesson.id)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedLessonIds([...selectedLessonIds, lesson.id]);
                    } else {
                      setSelectedLessonIds(selectedLessonIds.filter(id => id !== lesson.id));
                    }
                  }}
                />
                {lesson.name}
              </label>
            ))}
          </div>
        </div>
      )}
      {selectedLessonIds.length > 0 && selectedLessonIds.map((lessonId, idx) => {
        const lesson = lessons.find(l => l.id === lessonId);
        if (!lesson) return null;
        return (
          <div key={lesson.id} className={idx > 0 ? 'mb-6 print:break-before-page' : 'mb-6'}>
            <h2>{`Lesson ${lesson.id}: ${lesson.name}`}</h2>
            {renderLessonComponent(lesson)}
          </div>
        );
      })}
    </div>
  );
};

export default Module3Worksheet;
