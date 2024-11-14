'use client';

import { useState } from 'react';

const exp = [
  {
    id: 0,
    name: 'UKMFT SOKET',
    role: 'Head of Programming Division',
    priode: 'Jan 2020 – Dec 2020',
    main: [
      'Responsible for creating and developing code to control robots and integrate sensors',
      'Responsible for testing, debugging, and maintaining robot software, as well as updating as needed',
      'Collaborate with other divisions in implementing work programs',
      'Provide training and guidance to team members',
      'Create software and hardware documentation for ease of understanding and use',
    ],
  },
  {
    id: 1,
    name: 'Robotic Team',
    role: 'Programmer for the legged robot division',
    priode: 'Jan 2020 – Des 2021',
    main: [
      'Creating and developing code for firefighting robots and search and rescue (SAR) robots',
      'Testing, debugging, and maintaining robot software, as well as updating as needed',
      'Researching new rules in every Indonesian robot contest',
    ],
  },
  {
    id: 2,
    name: 'Practicum',
    role: 'Database Management Practicum Assistant',
    priode: 'Mar 2022 – May 2022',
    main: [
      'Preparing practicum materials and providing guidance to practicum participants during the practicum',
      'Assisting in assessing the tasks completed by practicum participants and helping in conducting practicum exams',
      'Assisting in maintaining the practicum environment',
    ],
  },
  {
    id: 3,
    name: 'Certificates',
    role: 'Competition Certificate and Dicoding Certificate',
    priode: '',
    main: [
      'Kontes Robot Pemadam Api Indonesia (2020)',
      'Kontes Robot SAR Indonesia (2021)',
      'Learn Basic JavaScript Programming (2023)',
      'Learn Front-End Web Development for Beginners (2023)',
      'Learn to Build Web Applications with React (2023)',
      'Learn Basic Structured Query Language (SQL) (2023)',
      'Learn Basic Web Programming (2023)',
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);
  return (
    <div
      id="experience"
      className="flex flex-col justify-center w-full h-screen gap-5 px-10 lg:max-w-4xl md:max-w-3xl sm:max-w-2xl lg:px-28 md:px-20 "
    >
      <div className="flex items-center">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          02. Experience
        </h1>
        <span className="md:w-[20vw] sm:w-[40vw] w-20 h-[1px] bg-custom-light"></span>
      </div>
      <div className="flex flex-col w-full gap-3 md:flex-row">
        <div className="flex flex-row w-full overflow-auto md:flex-col md:w-1/4">
          {exp.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.id)}
              className={`p-4 min-w-max text-start  ${
                active === item.id
                  ? 'md:border-s-4 border-s-0 md:border-b-0 border-b-4 border-custom-main2 text-custom-main2'
                  : 'md:border-s-2 border-s-0 md:border-b-0 border-b-2 border-custom-light focus:whitespace-nowrap whitespace-nowrap focus:outline-none text-custom-main3'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full gap-3 md:w-3/4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-custom-main2">
              {exp[active].role}
            </h2>
            <p className="text-sm text-custom-main3">{exp[active].priode}</p>
          </div>
          <ul className="pl-5 list-disc">
            {exp[active].main.map((item, index) => (
              <li key={index} className="mb-1 ml-2 text-sm text-custom-main3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
