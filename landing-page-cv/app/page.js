import About from '@/components/About';
import Experience from '@/components/Experience';
import LastPage from '@/components/LastPage';
import HomePage from '@/components/HomePage';
import Projects from '@/components/Projects';
import SideInfo from '@/components/SideInfo';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-full">
        <SideInfo />
        <HomePage />
        <About />
        <Experience />
        <Projects />
        <LastPage />
      </div>
    </>
  );
}
