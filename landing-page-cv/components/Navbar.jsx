'use client';

import Image from 'next/image';
import Link from 'next/link';

const NavItem = ({ href, text, hoverClass }) => (
  <li className="overflow-hidden cursor-pointer group">
    <Link
      href={href}
      className={`group-hover:text-custom-main2 ${hoverClass} font-bold text-sm`}
    >
      {text}
    </Link>
    <div className="border-[1px] rounded-full border-custom-light transition transform -translate-x-[110%] duration-500 group-hover:transform group-hover:translate-x-[60%] "></div>
  </li>
);

function Navbar() {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-5 bg-transparent lg:px-16 md:px-10 backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <Image src="/logoipsum.svg" alt="logo" width={25} height={25} />
        <h2 className="text-xl font-bold text-custom-light">Eengsf</h2>
      </div>
      <ul className="items-center hidden gap-10 text-custom-light md:flex">
        <NavItem
          href="#home"
          text="Home"
          hoverClass="group-hover:text-custom-main2"
        />
        <NavItem
          href="#about"
          text="About"
          hoverClass="group-hover:text-custom-main2"
        />
        <NavItem
          href="#experience"
          text="Experience"
          hoverClass="group-hover:text-custom-main2"
        />
        <NavItem
          href="#project"
          text="Project"
          hoverClass="group-hover:text-custom-main2"
        />
        <NavItem
          href="#contact"
          text="Contact"
          hoverClass="group-hover:text-custom-main2"
        />
      </ul>
    </div>
  );
}

export default Navbar;
