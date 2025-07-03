import React from 'react';

function generateSkip10Problems(count: number, maxLimit: number) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    // Find the highest possible start so the sequence doesn't exceed maxLimit
    const maxStart = Math.floor((maxLimit - 50) / 10) * 10;
    const minStart = 100;
    const range = Math.max(0, (maxStart - minStart) / 10 + 1);
    const start = range > 0 ? Math.floor(Math.random() * range) * 10 + minStart : minStart;
    const sequence = [];
    for (let j = 0; j < 6; j++) {
      const value = start + 10 * j;
      if (value > maxLimit) {
        sequence.push(null);
      } else if (j === 2 || j === 4) {
        sequence.push(null);
      } else {
        sequence.push(value);
      }
    }
    problems.push({ sequence });
  }
  return problems;
}

interface Lesson3Props {
  count: number;
  maxLimit: number;
}

const Lesson3: React.FC<Lesson3Props> = ({ count, maxLimit }) => {
  const problems = generateSkip10Problems(count, maxLimit);
  const example = problems[0];
  function getExampleValue(idx: number) {
    const start = example.sequence.find((v) => v !== null) ?? 0;
    return start + 10 * idx;
  }
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Lesson 3: Skip-Counting by 10s</h3>
      <p className="mb-2">Fill in the missing numbers (count by 10s):</p>
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
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson3;
