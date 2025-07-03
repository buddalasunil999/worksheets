export interface MathProblem {
  num1: number;
  num2: number;
  answer: number;
}

const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateAdditionProblems = (count: number): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  for (let i = 0; i < count; i++) {
    const num1 = generateNumber(10, 99); // Double digit numbers
    const num2 = generateNumber(10, 99);
    const answer = num1 + num2;
    
    problems.push({
      num1,
      num2,
      answer,
    });
  }
  
  return problems;
};

export const generateSubtractionProblems = (count: number): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  for (let i = 0; i < count; i++) {
    const num1 = generateNumber(20, 99);
    const num2 = generateNumber(10, num1 - 1); // Ensure num2 is smaller than num1
    const answer = num1 - num2;
    
    problems.push({
      num1,
      num2,
      answer,
    });
  }
  
  return problems;
};
