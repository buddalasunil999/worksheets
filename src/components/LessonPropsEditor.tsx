import React from "react";
import { Lesson, useWorksheet } from "./WorksheetContext";

interface LessonPropsEditorProps {
    moduleId: number;
    lesson: Lesson;
}

export const LessonPropsEditor: React.FC<LessonPropsEditorProps> = ({ moduleId, lesson }) => {
    const { updateLessonProps } = useWorksheet();

    return (
        <div className="flex gap-4 items-center mb-2 print:hidden">
            <span className="font-semibold">{lesson.name}</span>
            <label>
                Limit:
                <input
                    type="number"
                    value={lesson.props.limit}
                    min={1}
                    className="border px-2 py-1 mx-1 w-16"
                    onChange={e => updateLessonProps(moduleId, lesson.id, { limit: Number(e.target.value) })}
                />
            </label>
            <label>
                Min:
                <input
                    type="number"
                    value={lesson.props.min ?? ''}
                    className="border px-2 py-1 mx-1 w-16"
                    onChange={e => updateLessonProps(moduleId, lesson.id, { min: Number(e.target.value) })}
                />
            </label>
            <label>
                Max:
                <input
                    type="number"
                    value={lesson.props.max ?? ''}
                    className="border px-2 py-1 mx-1 w-16"
                    onChange={e => updateLessonProps(moduleId, lesson.id, { max: Number(e.target.value) })}
                />
            </label>
        </div>
    );
}
