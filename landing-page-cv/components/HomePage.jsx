import Link from 'next/link';

function HomePage() {
  return (
    <div
      id="home"
      className="scroll-mt-24 flex flex-col w-full gap-5 h-[calc(100vh-80px)] md:pt-12 sm:pt-5 pt-12 lg:px-28 md:px-20 px-10 "
    >
      <h2 className="mb-3 text-custom-main3">Hi, my name is</h2>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-custom-light sm:text-6xl md:text-7xl">
          Shofiyul Fuad.
        </h1>
        <p className="text-4xl font-bold sm:text-6xl md:text-7xl text-custom-main3">
          I build things for the web.
        </p>
      </div>
      <p className="w-full md:w-1/2 text-custom-main3">
        I am a graduate of Bachelor Degree in Electrical Engineering with a
        background in logic development and robotics programming. I enjoy new
        challenges and exploring the field of{' '}
        <span className="text-custom-main2">web programming.</span>
      </p>
      <Link
        href={
          'https://drive.google.com/file/d/1tFr8jiz7vSSFjDQVwHZrXxzzji0MLU_s/view?usp=sharing'
        }
        target="_blank"
        className="px-16 py-4 border rounded-md mt-7 text-start border-custom-main2 w-fit hover:scale-105"
      >
        My Resume
      </Link>
    </div>
  );
}

export default HomePage;
