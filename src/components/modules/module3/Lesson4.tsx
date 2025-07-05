import React from 'react';

function generateSkip100Problems(limit: number, max: number) {
  const problems = [];
  for (let i = 0; i < limit; i++) {
    // Find the highest possible start so the sequence doesn't exceed max
    const maxStart = Math.floor((max - 500) / 100) * 100;
    const minStart = 100;
    const range = Math.max(0, (maxStart - minStart) / 100 + 1);
    const start = range > 0 ? Math.floor(Math.random() * range) * 100 + minStart : minStart;
    const sequence = [];
    for (let j = 0; j < 6; j++) {
      const value = start + 100 * j;
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

interface Lesson4Props {
  limit: number;
  max: number;
}

const Lesson4: React.FC<Lesson4Props> = ({ limit, max }) => {
  const problems = generateSkip100Problems(limit, max);
  const example = problems[0];
  function getExampleValue(idx: number) {
    const start = example.sequence.find((v) => v !== null) ?? 0;
    return start + 100 * idx;
  }
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Lesson 4: Skip-Counting by 100&apos;s</h3>
      <p className="mb-2">Fill in the missing numbers (count by 100s):</p>
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

export default Lesson4;
