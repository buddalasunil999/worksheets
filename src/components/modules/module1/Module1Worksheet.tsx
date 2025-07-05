import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";

import { useWorksheet, defaultModules } from '../../WorksheetContext';

export default function Module1Worksheet() {
  const { selectedLessonId, setSelectedLessonId } = useWorksheet();
  const lessons = defaultModules.find((m) => m.id === 1)?.lessons || [];
  const selectedLesson = lessons.find((lesson) => lesson.id === selectedLessonId);

  return (
    <div className="mb-8 print:mb-4">
      <div className="print:hidden">
        <div className="flex gap-2 mb-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLessonId(lesson.id)}
              className={`px-4 py-2 rounded ${selectedLessonId === lesson.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {lesson.type}
            </button>
          ))}
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Module 1: Addition & Subtraction Worksheet</h2>
        </div>
      </div>
      {selectedLessonId === 1 && (
        <Addition numberOfLessons={selectedLesson?.limit} max={selectedLesson?.max} />
      )}
      {selectedLessonId === 2 && (
        <Subtraction numberOfLessons={selectedLesson?.limit} max={selectedLesson?.max} />
      )}
      {selectedLessonId === 3 && (
        <>
          <Addition numberOfLessons={selectedLesson?.limit} max={selectedLesson?.max} />
          <div className="print:break-before-page" />
          <Subtraction numberOfLessons={selectedLesson?.limit} max={selectedLesson?.max} />
        </>
      )}
    </div>
  );
}
