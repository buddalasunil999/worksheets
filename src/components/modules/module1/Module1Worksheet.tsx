import React from "react";
import { useWorksheet, defaultModules, Lesson } from '../../WorksheetContext';

export default function Module1Worksheet() {
  const { selectedLessonIds, setSelectedLessonIds } = useWorksheet();
  const lessons = defaultModules.find((m) => m.id === 1)?.lessons || [];

  return (
    <div className="mb-8 print:mb-4">
      <div className="print:hidden">
        <div className="flex gap-2 mb-4">
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
              {lesson.type}
            </label>
          ))}
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Module 1: Addition & Subtraction Worksheet</h2>
        </div>
      </div>
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
