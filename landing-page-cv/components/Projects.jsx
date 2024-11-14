import HalfScreen from './projects/HalfScreen';

const obj = [
  {
    id: 1,
    img: 'tokped1.png',
    name: 'Clone Tokopedia',
    desc: 'A project to clone the interface of Tokopedia with interactive and responsive web implementation using the ShadCN UI component library.',
    tech: ['TypeScript', 'Nextjs', 'TailwindCSS', 'Shadcn UI', 'Redux Toolkit'],
    linkDemo: 'https://clone-tokped.vercel.app/',
    linkCode: 'https://github.com/eengsf/clone-tokped',
  },

  {
    id: 2,
    img: 'carental1.png',
    name: 'Car Rental App',
    desc: 'The car rental application provides a list of car options with a booking system and user authentication.',
    tech: [
      'TypeScript',
      'Nextjs',
      'TailwindCSS',
      'Shadcn UI',
      'Redux Toolkit',
      'Firebase',
    ],
    linkDemo: 'https://rental-mobil-ten.vercel.app/',
    linkCode: 'https://github.com/eengsf/rental-mobil',
  },

  {
    id: 3,
    img: 'dashboard-rental1.png',
    name: 'Admin Dashboard Car Rental',
    desc: 'The car rental admin dashboard features a CRUD management system for rental car products, sorting, and filtering, as well as displaying all customer data and their booking history.',
    tech: [
      'TypeScript',
      'Nextjs',
      'TailwindCSS',
      'Shadcn UI',
      'Redux Toolkit',
      'Firebase',
    ],
    linkDemo: 'https://dashboard-rental-rust.vercel.app/',
    linkCode: 'https://github.com/eengsf/dashboard-rental',
  },

  {
    id: 4,
    img: 'animelist1.png',
    name: 'Anime List App',
    desc: 'This application is a project that utilizes an API to display a list of popular anime. It includes a feature to search for anime titles and a pagination system.',
    tech: ['Nextjs', 'TailwindCSS'],
    linkDemo: 'https://anime-list-app-seven.vercel.app/',
    linkCode: 'https://github.com/eengsf/anime-list-app',
  },

  {
    id: 5,
    img: 'portfolio.png',
    name: 'Portfolio',
    desc: 'Personal Website and portfolio built with Nextjs and Tailwind CSS.',
    tech: ['Nextjs', 'TailwindCSS', 'Redux Toolkit', 'Framer Motion'],
    linkDemo: 'https://portfolio-sf-seven.vercel.app/',
    linkCode: 'https://github.com/eengsf/portfolio-v2',
  },
];

function Projects() {
  return (
    <div
      id="project"
      className="flex flex-col w-full gap-5 px-10 pt-12 scroll-mt-10 h-fit md:pt-12 sm:pt-5 lg:px-28 md:px-20"
    >
      <div className="flex items-center">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          03. Projects
        </h1>
        <span className="md:w-[20vw] w-[40vw] h-[1px] bg-custom-light"></span>
      </div>
      {obj.map((item, index) => (
        <div key={index}>
          <HalfScreen no={index} obj={item} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
