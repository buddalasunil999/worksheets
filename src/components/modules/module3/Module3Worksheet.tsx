import React from 'react';
import { useWorksheet } from '../../WorksheetContext';
import { LessonPropsEditor } from '../../LessonPropsEditor';

const Module3Worksheet: React.FC = () => {
  const { modules, selectedLessonIds, setSelectedLessonIds } = useWorksheet();
  const lessons = modules.find((m) => m.id === 3)?.lessons || [];

  // Use the component from lesson definition
  const renderLessonComponent = (lesson: import('../../WorksheetContext').Lesson) => {
    if (!lesson.component) return null;
    return React.createElement(lesson.component, lesson.props);
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
            <LessonPropsEditor
              key={lesson.id}
              moduleId={3}
              lesson={lesson}
            />
            <h2>{`Lesson ${lesson.id}: ${lesson.name}`}</h2>
            {renderLessonComponent(lesson)}
          </div>
        );
      })}
    </div>
  );
};

export default Module3Worksheet;
