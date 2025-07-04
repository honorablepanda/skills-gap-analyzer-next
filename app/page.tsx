'use client';

import { useState } from 'react';

const sampleSkills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'User Research',
  'Accessibility', 'TypeScript', 'UI Design'
];

const jobProfile = {
  title: 'UI/UX Designer',
  requiredSkills: [
    'HTML', 'CSS', 'JavaScript', 'Figma', 'User Research',
    'Accessibility', 'Prototyping', 'Interaction Design'
  ]
};

export default function Home() {
  const [userSkills, setUserSkills] = useState<string[]>([]);

  const handleSkillToggle = (skill: string) => {
    setUserSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const matchedSkills = jobProfile.requiredSkills.filter(skill => userSkills.includes(skill));
  const missingSkills = jobProfile.requiredSkills.filter(skill => !userSkills.includes(skill));

  return (
    <main className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Skills Gap Analyzer</h1>
      <p className="mb-2">Target Role: <strong>{jobProfile.title}</strong></p>
      <p className="mb-4 text-sm text-gray-500">Select your current skills:</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {sampleSkills.map(skill => (
          <button
            key={skill}
            onClick={() => handleSkillToggle(skill)}
            className={`px-3 py-1 rounded-full border text-sm ${
              userSkills.includes(skill)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Gap Analysis</h2>
        <div className="mb-2">
          <p className="font-medium text-green-600">✅ Matched Skills:</p>
          <ul className="list-disc list-inside text-sm">
            {matchedSkills.length > 0 ? (
              matchedSkills.map(skill => <li key={skill}>{skill}</li>)
            ) : (
              <li className="text-gray-500">None yet</li>
            )}
          </ul>
        </div>
        <div>
          <p className="font-medium text-red-500">❌ Missing Skills:</p>
          <ul className="list-disc list-inside text-sm">
            {missingSkills.length > 0 ? (
              missingSkills.map(skill => <li key={skill}>{skill}</li>)
            ) : (
              <li className="text-gray-500">None — you're fully matched!</li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
