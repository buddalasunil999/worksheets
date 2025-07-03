import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";

interface Module1WorksheetProps {
  type: "addition" | "subtraction";
}

export default function Module1Worksheet({ type }: Module1WorksheetProps) {
  const numberOfLessons = 36;
  const max = 100;

  return (
    <div className="mb-8 print:mb-4">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold">Module 1: Addition & Subtraction Worksheet</h2>
      </div>
      {type === "addition" && (
        <Addition numberOfLessons={numberOfLessons} max={max} />
      )}
      {type === "subtraction" && (
        <Subtraction numberOfLessons={numberOfLessons} max={max} />
      )}
    </div>
  );
}
