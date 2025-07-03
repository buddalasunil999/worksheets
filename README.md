This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## What This Project Does

This project is a web app for generating printable math worksheets. It features:

### Module 1: Addition & Subtraction
- Randomly generated double-digit addition and subtraction problems
- Two worksheet pages: one for addition, one for subtraction (36 problems each)

### Module 2: Number Concepts (Lessons 1–6)
- Lesson 1: Place and Face Value — Explains a digit's place and face value in numbers between 100 and 200.
- Lesson 2: Expanded and Standard Forms — Covers representing and converting numbers between 100 and 200 in expanded and standard forms.
- Lesson 3: Before, After, and Between — Identifies numbers that come before, after, or between given numbers within 100–200 to build number sense and sequencing.
- Lesson 4: Comparing and Ordering Numbers — Compares numbers in the 100–200 range and practices ordering (seriation) in ascending and descending order.
- Lesson 5: Ordinal Numbers (11th–200th) — Identifies ordinal and cardinal numbers in real-life contexts and practices writing ordinal positions in words and numerals.
- Lesson 6: Even and Odd Numbers — Classifies numbers between 100 and 200 as even or odd by grouping or dividing by 2.

### Module 3: Recognizing Patterns in Hundreds (Lessons 1–4)
- Lesson 1: Recognizing Patterns in Hundreds — Identify and predict number patterns in the hundreds using incremental changes and place values.
- Lesson 2: Skip-Counting by 5s — Develop fluency in skip-counting by 5s up to 999. Recognize patterns and apply skip-counting in real-life scenarios like counting money.
- Lesson 3: Skip-Counting by 10s — Practice skip-counting by 10s up to 999. Explanation of shifts in the tens place and connect skip-counting to addition and multiplication concepts.
- Lesson 4: Skip-Counting by 100's — Skip-counting by 100's up to 999. Recognize the relationship between hundreds and larger numbers. Develop place value skills.

- A "Print Worksheet" button for easy printing
- Built with Next.js and React

Great for teachers, parents, or students needing quick math practice sheets for a variety of number concepts and pattern recognition!

## Project Structure

The project is organized by modules, each in its own folder under `src/components/modules/`. Each module contains:

- **One component for each lesson** (e.g., `Lesson1.tsx`, `Lesson2.tsx`, etc.)
  - Each lesson component should provide an example problem with a solution, to demonstrate the concept or skill being taught.
- **A worksheet component for the module** (e.g., `Module1Worksheet.tsx`)

For example, `src/components/modules/module2/` contains:
  - `Lesson1.tsx`, `Lesson2.tsx`, ..., `Lesson6.tsx` (one for each lesson)
  - `Module2Worksheet.tsx` (worksheet for the module)

When adding a new module, create a new folder under `src/components/modules/` (e.g., `module4/`), add a component for each lesson (with an example solved problem in each), and a worksheet component for the module.
