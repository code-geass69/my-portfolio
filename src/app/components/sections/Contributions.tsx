'use client';

import GitHubCalendar from 'react-github-calendar';
import { useState } from 'react';

export default function Contributions() {
  const [year, setYear] = useState(new Date().getFullYear());
  const years = [2025, 2024, 2023];

  return (
    <section id="contributions" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        06. GitHub Contributions
      </h2>

      <div className="mb-4">
        <label className="text-gray-300 text-sm mr-2">Select Year:</label>
        <select
          className="bg-black border border-white/20 text-white px-3 py-1 rounded-md"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-md overflow-x-auto">
        <GitHubCalendar
          username="code-geass69"
          year={year}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
          theme={{
            light: ['#1a1a1a', '#114a11', '#1f7a1f', '#2db32d', '#3de13d'],
            dark: ['#1a1a1a', '#114a11', '#1f7a1f', '#2db32d', '#3de13d'],
          }}
        />
      </div>
    </section>
  );
}