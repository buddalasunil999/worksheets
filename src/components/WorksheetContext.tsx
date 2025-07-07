import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Addition } from './modules/module1/Addition';
import { Subtraction } from './modules/module1/Subtraction';
import { Lesson1 as Module2Lesson1 } from './modules/module2/Lesson1';
import { Lesson2 as Module2Lesson2 } from './modules/module2/Lesson2';
import { Lesson3 as Module2Lesson3 } from './modules/module2/Lesson3';
import { Lesson4 as Module2Lesson4 } from './modules/module2/Lesson4';
import { Lesson5 as Module2Lesson5 } from './modules/module2/Lesson5';
import { Lesson6 as Module2Lesson6 } from './modules/module2/Lesson6';
import Lesson1_M3 from './modules/module3/Lesson1';
import Lesson2_M3 from './modules/module3/Lesson2';
import Lesson3_M3 from './modules/module3/Lesson3';
import Lesson4_M3 from './modules/module3/Lesson4';

export type Lesson = {
    id: number;
    type: string;
    name: string;
    limit: number;
    min: number;
    max: number;
    component: React.ReactNode;
};

export type Module = {
    id: number;
    name: string;
    description: string;
    lessons: Lesson[];
};

export type WorksheetState = {
    modules: Module[];
    selectedModuleId: number;
    selectedLessonIds: number[];
    setSelectedModuleId: (id: number) => void;
    setSelectedLessonIds: (ids: number[]) => void;
};

export const defaultModules: Module[] = [
    {
        id: 1,
        name: 'Module 1',
        description: 'Module 1: Addition & Subtraction',
        lessons: [
            {
                id: 1,
                type: 'Addition',
                name: 'Double-Digit Addition',
                limit: 42,
                min: 1,
                max: 100,
                component: <Addition limit={42} max={100} />,
            },
            {
                id: 2,
                type: 'Subtraction',
                name: 'Double-Digit Subtraction',
                limit: 42,
                min: 1,
                max: 100,
                component: <Subtraction limit={42} max={100} />,
            }
        ],
    },
    {
        id: 2,
        name: 'Module 2',
        description: 'Module 2: Number Concepts',
        lessons: [
            { id: 1, type: 'face-value', name: 'Face Value and Place Value', limit: 20, min: 100, max: 200, component: <Module2Lesson1 limit={20} min={100} max={200} /> },
            { id: 2, type: 'expanded-form', name: 'Expanded and Standard Forms', limit: 20, min: 100, max: 200, component: <Module2Lesson2 limit={20} min={100} max={200} /> },
            { id: 3, type: 'before-after-between', name: 'Before, After, and Between (up to 200)', limit: 20, min: 100, max: 200, component: <Module2Lesson3 limit={20} min={100} max={200} /> },
            { id: 4, type: 'comparing-ordering', name: 'Comparing and Ordering Numbers', limit: 20, min: 100, max: 200, component: <Module2Lesson4 limit={20} min={100} max={200} /> },
            { id: 5, type: 'ordinal', name: 'Ordinal Numbers (11 to 200)', limit: 20, min: 100, max: 200, component: <Module2Lesson5 limit={20} min={100} max={200} /> },
            { id: 6, type: 'even-odd', name: 'Even and Odd Numbers', limit: 20, min: 100, max: 200, component: <Module2Lesson6 limit={20} min={100} max={200} /> },
        ],
    },
    {
        id: 3,
        name: 'Module 3',
        description: 'Module 3: Recognizing Patterns in Hundreds',
        lessons: [
            { id: 1, type: 'patterns', name: 'Recognizing Patterns in Hundreds', limit: 24, min: 1, max: 1000, component: <Lesson1_M3 limit={24} max={1000} /> },
            { id: 2, type: 'skip-5s', name: 'Skip-Counting by 5s', limit: 34, min: 1, max: 1000, component: <Lesson2_M3 limit={34} max={1000} /> },
            { id: 3, type: 'skip-10s', name: 'Skip-Counting by 10s', limit: 31, min: 1, max: 1000, component: <Lesson3_M3 limit={31} max={1000} /> },
            { id: 4, type: 'skip-100s', name: 'Skip-Counting by 100s', limit: 31, min: 1, max: 1000, component: <Lesson4_M3 limit={31} max={1000} /> },
        ],
    },
];

const WorksheetContext = createContext<WorksheetState | undefined>(undefined);

export const WorksheetProvider = ({ children }: { children: ReactNode }) => {
    const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
    const [selectedLessonIds, setSelectedLessonIds] = useState<number[]>([1]);

    return (
        <WorksheetContext.Provider
            value={{
                modules: defaultModules,
                selectedModuleId,
                selectedLessonIds,
                setSelectedModuleId,
                setSelectedLessonIds,
            }}
        >
            {children}
        </WorksheetContext.Provider>
    );
};

export const useWorksheet = () => {
    const context = useContext(WorksheetContext);
    if (!context) throw new Error('useWorksheet must be used within a WorksheetProvider');
    return context;
};
