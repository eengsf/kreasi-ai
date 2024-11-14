'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const ListFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [prevNext, setPrevNext] = useState(false);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch('/api/feedbacks');
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error(error);
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
    setPrevNext(true);
  };

  const handleMouseLeave = () => {
    plugin.current.play();
    setPrevNext(false);
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-3 background-custom">
      <h1 className="flex items-center gap-3 text-2xl font-bold text-center xs:mb-3 md:mb-5">
        Feedbacks Client
        <Link href={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </h1>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        opts={{ loop: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-xl aspect-[5/2] overflow-hidden bg-transparent backdrop-blur-sm shadow-lg rounded-xl"
      >
        <CarouselContent>
          {feedbacks.map((item, index) => (
            <CarouselItem key={index} className="flex w-full h-full ">
              <Image
                src={`https://picsum.photos/id/${item.id + 50}/300`}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover w-2/5 h-full"
              />
              <div className="flex flex-col p-3">
                <p className="text-xl font-bold">
                  {capitalizeFirstLetter(item.name)}
                </p>
                <p>{item.message}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          onMouseEnter={() => setPrevNext(true)}
          className={`absolute z-10 top-1/2 -translate-y-1/2 -left-4 translate-x-10 transition-all duration-500 ease-in-out ${
            prevNext ? 'translate-x-5 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        />
        <CarouselNext
          onMouseEnter={() => setPrevNext(true)}
          className={` absolute z-10 top-1/2 -translate-y-1/2 -right-4 -translate-x-10 transition-all duration-500 ease-in-out ${
            prevNext
              ? '-translate-x-5 opacity-100'
              : '-translate-x-10 opacity-0'
          }`}
        />
      </Carousel>
      <div className="py-2 text-center">
        Slide {current} of {feedbacks.length}
      </div>
    </div>
  );
};

export default ListFeedback;
