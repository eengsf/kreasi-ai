'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

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

function SlideNav() {
  const [burger, setBurger] = useState(false);

  const handleBurgerChange = (oldValue) => {
    setBurger(oldValue);
  };
  return (
    <div className="w-full h-full">
      <Hamburger onBurgerChange={handleBurgerChange} />
      <ul
        className={`fixed right-0 top-0 bottom-0 md:hidden flex w-3/4 h-full z-30 flex-col items-center justify-center gap-10 text-custom-light bg-custom-dark transition-transform duration-500 ${
          !burger ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
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

export default SlideNav;
