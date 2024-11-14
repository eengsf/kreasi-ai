import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const sosmed = [
  {
    logo: (
      <FiGithub
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://github.com/eengsf',
  },
  {
    logo: (
      <FaLinkedinIn
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.linkedin.com/in/shofiyul-fuad-b8836628b/',
  },
  {
    logo: (
      <SiTiktok
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.tiktok.com/@eengsf_?_t=8ia5kTpOlQf&_r=1',
  },
  {
    logo: (
      <FaYoutube
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.youtube.com/channel/UC0vqQM71BwT-blOJ2deI4bw',
  },
];

function LastPage() {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-5 px-10 lg:max-w-4xl md:max-w-3xl sm:max-w-2xl lg:px-28 md:px-20"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center">
          <h1 className="text-custom-main2 me-[1vw] font-bold">
            04. What{`'`}s Next?
          </h1>
        </div>
        <h2 className="text-5xl font-bold text-custom-light">Get In Touch</h2>
        <div className="flex flex-col text-center">
          <p className="text-custom-main3">Trunojoyo University</p>
          <p className="text-custom-main3">
            Bachelor Degree in Electrical Engineering
          </p>
          <p className="text-custom-main3">Cumulative GPA 3.58/4.00</p>
          <p className="text-custom-main3">
            Relevant Course : Algorithms Programming, Database Management,
            Control Systems, Artificial Intelligence
          </p>
        </div>
        <button className="px-10 py-4 border rounded-md border-custom-main2 hover:scale-105">
          Say Hello
        </button>
      </div>

      <div className="absolute flex flex-col gap-1 bottom-3">
        <div className="flex items-center justify-center gap-5">
          {sosmed.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-custom-main3 hover:text-custom-main2"
            >
              {item.logo}
            </Link>
          ))}
        </div>
        <p className="text-sm text-custom-main3">shofiyulfuad797@gmail.com</p>
      </div>
    </div>
  );
}

export default LastPage;
