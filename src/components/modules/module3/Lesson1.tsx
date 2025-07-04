import React from 'react';

function generatePatternProblems(limit: number, max: number) {
  // Each problem is a sequence with a missing number, e.g., 301, 302, __, 304, __, 306
  const problems = [];
  for (let i = 0; i < limit; i++) {
    // Ensure the sequence stays within 0 and max
    const maxStart = Math.max(0, max - 5 * 3); // 5 steps of max step 3
    const start = Math.floor(Math.random() * (maxStart + 1));
    const step = Math.floor(Math.random() * 3) + 1; // step 1, 2, or 3
    const sequence = [];
    for (let j = 0; j < 6; j++) {
      const value = start + step * j;
      if (value > max) {
        sequence.push(null);
      } else if (j === 2 || j === 4) {
        sequence.push(null);
      } else {
        sequence.push(value);
      }
    }
    problems.push({ sequence, step });
  }
  return problems;
}

interface Lesson1Props {
  limit: number;
  max: number;
}

const Lesson1: React.FC<Lesson1Props> = ({ limit, max }) => {
  const problems = generatePatternProblems(limit, max);
  // Example (first problem, solved)
  const example = problems[0];
  // Helper to fill in missing numbers for the example
  function getExampleValue(idx: number) {
    // Find the first non-null value as the start
    const start = example.sequence.find((v) => v !== null) ?? 0;
    return start + example.step * idx;
  }
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Lesson 1: Recognizing Patterns in Hundreds</h3>
      <p className="mb-2">Fill in the missing numbers and describe the pattern:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print-grid-2">
        {/* Example */}
        <div className="mb-2">
          <ul className="ml-6">
            <li>
              <b>Example:</b> {example.sequence.map((n, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && ', '}
                  <b>{n === null ? getExampleValue(idx) : n}</b>
                </React.Fragment>
              ))}
              <div className="text-sm text-gray-600">Step: <b>{example.step}</b> (What is the pattern?)</div>
            </li>
          </ul>
        </div>
        {/* The rest for students to solve */}
        {problems.slice(1).map((p, i) => (
          <div key={i + 1} className="mb-2">
            <ul className="ml-6">
              <li>
                {p.sequence.map((n, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && ', '}
                    {n === null ? <b>___</b> : <span>{n}</span>}
                  </React.Fragment>
                ))}
                <div className="text-sm text-gray-600">Step: _____ (What is the pattern?)</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson1;
