import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { TbDeviceDesktopShare } from 'react-icons/tb';

function HalfScreen({ no, obj }) {
  return (
    <div
      className={`relative w-full flex justify-center sm:aspect-[5/3] xs:aspect-[5/4] aspect-square md:aspect-auto rounded-md sm:mb-10 mb-5 ${
        obj.id % 2 === 0 ? 'md:justify-end ' : 'md:justify-start'
      }`}
    >
      <Link
        href={`${obj.linkDemo}`}
        target="_blank"
        className="w-full md:max-w-[60%] h-full relative group cursor-pointer"
      >
        <Image
          src={`/${obj.img}`}
          alt={`${obj.name}`}
          width={1000}
          height={1000}
          className="object-cover rounded-md "
        />
        <div className="absolute top-0 w-full h-full transition-all duration-500 ease-in-out rounded-md bg-custom-main2 bg-opacity-70 group-hover:bg-opacity-0"></div>
      </Link>
      <div
        className={`absolute flex flex-col justify-center w-full h-full gap-2.5 p-5 -translate-y-1/2 rounded-md lg:w-[50%] md:w-[67%] top-1/2 md:bg-transparent bg-custom-main1/90 md:h-fit md:p-0 items-start ${
          obj.id % 2 === 0 ? 'md:items-start left-0' : 'md:items-end right-0'
        }`}
      >
        <div
          className={`flex flex-col ${
            obj.id % 2 === 0 ? 'md:text-start' : 'md:text-end'
          }`}
        >
          <h2 className="text-sm text-custom-main2">Project {no + 1}</h2>
          <Link href={`${obj.linkDemo}`} target="_blank">
            <h2 className="text-2xl font-bold text-custom-light hover:text-custom-main2">
              {obj.name}
            </h2>
          </Link>
        </div>
        <p
          className={`w-full p-0 bg-transparent rounded-md md:p-4 text-sm text-custom-main3 md:bg-custom-dark ${
            obj.id % 2 === 0 ? 'md:text-start' : 'md:text-end'
          }`}
        >
          {obj.desc}
        </p>
        <ul className="flex flex-wrap gap-2">
          {obj.tech.map((item, index) => (
            <li
              key={index}
              className="text-sm whitespace-nowrap text-custom-main3"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <Link href={`${obj.linkCode}`} target="_blank">
            <FiGithub size={20} className="text-custom-main3" />
          </Link>
          <Link href={`${obj.linkDemo}`} target="_blank">
            <TbDeviceDesktopShare size={20} className="text-custom-main3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HalfScreen;
