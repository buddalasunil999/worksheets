import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";

import { useWorksheet, defaultModules } from '../../WorksheetContext';
import React from "react";

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
      {selectedLessonIds.map((lessonId, idx) => {
        const lesson = lessons.find(l => l.id === lessonId);
        if (!lesson) return null;
        let content = null;
        if (lessonId === 1) {
          content = <Addition key={lessonId} numberOfLessons={lesson.limit} max={lesson.max} />;
        } else if (lessonId === 2) {
          content = <Subtraction key={lessonId} numberOfLessons={lesson.limit} max={lesson.max} />;
        }
        if (!content) return null;
        // Add page break after each lesson except the last one
        if (selectedLessonIds.length > 1 && idx < selectedLessonIds.length - 1) {
          return (
            <React.Fragment key={lessonId}>
              {content}
              <div className="print:break-after-page" />
            </React.Fragment>
          );
        }
        return content;
      })}
    </div>
  );
}
