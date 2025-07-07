import React from 'react';
import { useWorksheet, defaultModules, Lesson } from '../../WorksheetContext';

export default function Module2Worksheet() {
  const { selectedLessonIds, setSelectedLessonIds } = useWorksheet();
  const lessons = defaultModules.find((m) => m.id === 2)?.lessons || [];

  return (
    <div className="worksheet">
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
            {lesson.component}
          </div>
        );
      })}
    </div>
  );
}
