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
    component: React.ElementType;
    props: {
        limit: number;
        min?: number;
        max?: number;
    }
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
    updateLessonProps: (moduleId: number, lessonId: number, newProps: Partial<Lesson['props']>) => void;
};

const defaultModules: Module[] = [
    {
        id: 1,
        name: 'Module 1',
        description: 'Module 1: Addition & Subtraction',
        lessons: [
            {
                id: 1,
                type: 'Addition',
                name: 'Addition',
                component: Addition,
                props: {
                    limit: 42,
                    min: 1,
                    max: 100,
                }
            },
            {
                id: 2,
                type: 'Subtraction',
                name: 'Subtraction',
                component: Subtraction,
                props: {
                    limit: 42,
                    min: 1,
                    max: 100,
                }
            }
        ],
    },
    {
        id: 2,
        name: 'Module 2',
        description: 'Module 2: Number Concepts',
        lessons: [
            { id: 1, type: 'face-value', name: 'Face Value and Place Value',
                component: Module2Lesson1,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
            { id: 2, type: 'expanded-form', name: 'Expanded and Standard Forms',
                component: Module2Lesson2,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
            { id: 3, type: 'before-after-between', name: 'Before, After, and Between',
                component: Module2Lesson3,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
            { id: 4, type: 'comparing-ordering', name: 'Comparing and Ordering Numbers',
                component: Module2Lesson4,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
            { id: 5, type: 'ordinal', name: 'Ordinal Numbers (11 to 200)',
                component: Module2Lesson5,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
            { id: 6, type: 'even-odd', name: 'Even and Odd Numbers',
                component: Module2Lesson6,
                props: {
                    limit: 20,
                    min: 100,
                    max: 200,
                }
            },
        ],
    },
    {
        id: 3,
        name: 'Module 3',
        description: 'Module 3: Recognizing Patterns in Hundreds',
        lessons: [
            { id: 1, type: 'patterns', name: 'Recognizing Patterns in Hundreds',
                component: Lesson1_M3,
                props: {
                    limit: 24,
                    min: 1,
                    max: 1000,
                }
            },
            { id: 2, type: 'skip-5s', name: 'Skip-Counting by 5s',
                component: Lesson2_M3,
                props: {
                    limit: 34,
                    min: 1,
                    max: 1000,
                }
            },
            { id: 3, type: 'skip-10s', name: 'Skip-Counting by 10s',
                component: Lesson3_M3,
                props: {
                    limit: 31,
                    min: 1,
                    max: 1000,
                }
            },
            { id: 4, type: 'skip-100s', name: 'Skip-Counting by 100s',
                component: Lesson4_M3,
                props: {
                    limit: 31,
                    min: 1,
                    max: 1000,
                }
            },
        ],
    },
];

const WorksheetContext = createContext<WorksheetState | undefined>(undefined);

export const WorksheetProvider = ({ children }: { children: ReactNode }) => {
    const [modules, setModules] = useState<Module[]>(defaultModules);
    const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
    const [selectedLessonIds, setSelectedLessonIds] = useState<number[]>([1]);

    // Update lesson props in context
    const updateLessonProps = (moduleId: number, lessonId: number, newProps: Partial<Lesson['props']>) => {
        setModules(prevModules => prevModules.map(module => {
            if (module.id !== moduleId) return module;
            return {
                ...module,
                lessons: module.lessons.map(lesson => {
                    if (lesson.id !== lessonId) return lesson;
                    return {
                        ...lesson,
                        props: { ...lesson.props, ...newProps }
                    };
                })
            };
        }));
    };

    return (
        <WorksheetContext.Provider
            value={{
                modules,
                selectedModuleId,
                selectedLessonIds,
                setSelectedModuleId,
                setSelectedLessonIds,
                updateLessonProps,
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
