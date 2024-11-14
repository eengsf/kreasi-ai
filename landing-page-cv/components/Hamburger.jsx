// 'use client';

// import { useState } from 'react';

// const Hamburger = () => {
//   const [burger, setBurger] = useState(false);

//   return (
//     <label
//       htmlFor="burger"
//       className={`z-30 md:hidden cursor-pointer flex flex-col justify-center items-center h-7 w-7 p-px`}
//     >
//       <input
//         type="checkbox"
//         checked={burger}
//         onChange={()=>setBurger(!burger)}
//         id="burger"
//         className="hidden"
//       />
//       <span
//         className={`bg-custom-main2 w-6 h-[3px] block mb-[4px] rounded-sm ${
//           burger
//             ? 'transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]'
//             : 'transform origin-top-left transition duration-1000'
//         }`}
//       ></span>
//       <span
//         className={` bg-custom-main2 w-6 h-[3px] block mb-[4px] rounded-sm ${
//           burger
//             ? 'transform scale-0 opacity-0 transition duration-1000'
//             : 'transform scale-100 opacity-100 transition duration-1000'
//         }`}
//       ></span>
//       <span
//         className={` bg-custom-main2 w-6 h-[3px] block  rounded-sm ${
//           burger
//             ? 'transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px'
//             : 'transform origin-top-left transition duration-1000'
//         }`}
//       ></span>
//     </label>
//   );
// };
// export default Hamburger;

'use client';

import { useState } from 'react';

const Hamburger = ({ onBurgerChange }) => {
  const [burger, setBurger] = useState(false);

  const handleBurgerToggle = () => {
    const newValue = !burger;
    setBurger(newValue);
    onBurgerChange(newValue);
  };

  return (
    <label
      htmlFor="burger"
      className="fixed z-40 flex flex-col items-center justify-center p-px cursor-pointer right-5 top-5 md:hidden h-7 w-7"
    >
      <input
        type="checkbox"
        checked={burger}
        onChange={handleBurgerToggle}
        id="burger"
        className="hidden"
      />
      <span
        className={`bg-custom-main2 w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? 'transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]'
            : 'transform origin-top-left transition duration-1000'
        }`}
      ></span>
      <span
        className={`bg-custom-main2 w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? 'transform scale-0 opacity-0 transition duration-1000'
            : 'transform scale-100 opacity-100 transition duration-1000'
        }`}
      ></span>
      <span
        className={`bg-custom-main2 w-6 h-[3px] block rounded-sm ${
          burger
            ? 'transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px'
            : 'transform origin-top-left transition duration-1000'
        }`}
      ></span>
    </label>
  );
};

export default Hamburger;
