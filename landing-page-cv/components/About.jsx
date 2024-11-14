import Image from 'next/image';
import { RiArrowDropRightFill } from 'react-icons/ri';

const skill = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Tailwind',
  'ReactJs',
  'NextJs',
  'laravel',
  'Shadcn Ui',
  'Firebase',
  'MySQL',
  'C Lang',
  'Arduino',
];

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full gap-5 px-10 pt-12 scroll-mt-10 h-fit md:pt-12 sm:pt-5 lg:px-28 md:px-20"
    >
      <div className="flex items-center ">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          01. About Me
        </h1>
        <span className="md:w-[20vw] w-[40vw] h-[1px] bg-custom-light"></span>
      </div>
      <div className="flex flex-col w-full gap-0 lg:gap-16 lg:flex-row">
        <div className="lg:w-[60%] w-full flex flex-col gap-5">
          <p className="text-custom-main3">
            Hello! My name is Shofiyul Fuad. I am a graduate of Trunojoyo
            University and was actively involved in the organization UKMFT
            SOKET, which{' '}
            <span className="text-custom-main2">focuses on robotics</span>. At
            UKMFT SOKET, I joined the robot team and gained a lot of experience,
            especially in robotics programming, which led me to participate in
            various{' '}
            <span className="text-custom-main2">
              {' '}
              robot competitions in Indonesia{' '}
            </span>
            .
          </p>
          <p className="text-custom-main3">
            In my final semester, I began to develop an interest in{' '}
            <span className="text-custom-main2">web programming.</span> I
            learned a lot about web development through various social media
            platforms and participated in several online training sessions.
          </p>
          <p className="text-custom-main3">
            Here are some technologies that I have learned:
          </p>
          <ul className="grid grid-cols-3 list-disc">
            {skill.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1.5 text-custom-main3 whitespace-nowrap"
              >
                <RiArrowDropRightFill size={24} className="text-custom-main3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[40%] w-1/2 aspect-square overflow-hidden flex items-center justify-center mx-auto">
          <Image
            src="/eeng-abu.jpg"
            alt="logo"
            width={500}
            height={500}
            className="object-cover w-[80%] h-[80%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
