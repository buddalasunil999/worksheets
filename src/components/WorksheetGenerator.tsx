"use client";

import Module2Worksheet from './modules/module2/Module2Worksheet';
import Module1Worksheet from './modules/module1/Module1Worksheet';
import Module3Worksheet from './modules/module3/Module3Worksheet';
import { WorksheetProvider, useWorksheet } from './WorksheetContext';

const WorksheetGeneratorInner = () => {
  const {
    modules,
    selectedModuleId,
    selectedLessonIds,
    setSelectedModuleId,
    setSelectedLessonIds,
  } = useWorksheet();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded print:hidden mb-8 mx-auto block"
        >
          Print Worksheet
        </button>
        <div className="flex gap-2 mt-8 mb-4">
          {modules.map(m => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedModuleId(m.id);
                setSelectedLessonIds([m.lessons[0]?.id || 1]);
              }}
              className={`px-4 py-2 rounded ${selectedModuleId === m.id ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
            >
              {m.description}
            </button>
          ))}
        </div>
        {/* Lesson selection moved into each module worksheet */}
      </div>
      {/* Module 1: Addition & Subtraction */}
      {selectedModuleId === 1 && (
        <Module1Worksheet />
      )}
      {/* Module 2: Number Concepts */}
      {selectedModuleId === 2 && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Module 2: Number Concepts Worksheet</h2>
          </div>
          <Module2Worksheet />
        </div>
      )}
      {/* Module 3: Recognizing Patterns in Hundreds */}
      {selectedModuleId === 3 && (
        <div className="mb-8 print:mb-4">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">Module 3: Recognizing Patterns in Hundreds Worksheet</h2>
          </div>
          <Module3Worksheet />
        </div>
      )}
    </div>
  );
};

export const WorksheetGenerator = () => (
  <WorksheetProvider>
    <WorksheetGeneratorInner />
  </WorksheetProvider>
);
