import React from 'react';

function generateSkip5Problems(limit: number, min: number, max: number) {
  const problems = [];
  for (let i = 0; i < limit; i++) {
    // Find the lowest and highest possible start so the sequence doesn't exceed max, and both are multiples of 5
    const minStart = Math.ceil(min / 5) * 5;
    const maxStart = Math.floor((max - 25) / 5) * 5;
    const range = Math.max(0, (maxStart - minStart) / 5 + 1);
    const start = range > 0 ? Math.floor(Math.random() * range) * 5 + minStart : minStart;
    const sequence = [];
    for (let j = 0; j < 6; j++) {
      const value = start + 5 * j;
      if (value > max) {
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

interface Lesson2Props {
  limit: number;
  min: number;
  max: number;
}

const Lesson2: React.FC<Lesson2Props> = ({ limit, min, max }) => {
  const problems = generateSkip5Problems(limit, min, max);
  const example = problems[0];
  function getExampleValue(idx: number) {
    // Find the first non-null value as the start
    const start = example.sequence.find((v) => v !== null) ?? 0;
    return start + 5 * idx;
  }
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Lesson 2: Skip-Counting by 5s</h3>
      <p className="mb-2">Fill in the missing numbers (count by 5s):</p>
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

export default Lesson2;
