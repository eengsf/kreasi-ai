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

function SideInfo() {
  return (
    <>
      <div className="fixed bottom-0 flex-col justify-center hidden gap-8 md:flex lg:left-12 left-8">
        {sosmed.map((item, index) => (
          <div key={index}>
            <Link href={item.link} target="_blank">
              {item.logo}
            </Link>
          </div>
        ))}
        <div className="ms-[12px] list-none">
          <span className="block w-[1px] h-24 bg-custom-main3"></span>
        </div>
      </div>
      <div className="fixed bottom-0 flex-col justify-center hidden md:flex gap-7 lg:right-12 right-8">
        <p className="text-custom-main3 writing-vertical">
          shofiyulfuad797@gmail.com
        </p>
        <div className="ms-[12px] list-none">
          <span className="block w-[1px] h-24 bg-custom-main3"></span>
        </div>
      </div>
    </>
  );
}

export default SideInfo;
