"use client";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import SolutionCard from './_components/SolutionCard';
import CircularProgressBarButton from './_components/CircularProgressBarButton';
import Tab from './_components/Tab';

interface Solution {
  id: string;
  title: string;
  video: string;
  poster: string;
  tabImage: string;
}

const ProductSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefSlide2 = useRef<HTMLVideoElement>(null);
  
  const [activePassengerIndex, setActivePassengerIndex] = useState<number>(0);
  const [activeCommercialIndex, setActiveCommercialIndex] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isLargeDevice, setIsLargeDevice] = useState<boolean>(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const headerY = useTransform(smoothProgress, [0, 0.1], ['50vh', '5vh']);
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [1, 1]);

  const sidebarY = useTransform(smoothProgress, [0.1, 0.25], ['20vh', '0vh']);
  const sidebarOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);

  const card1Opacity = useTransform(smoothProgress, [0.15, 0.3, 0.6, 0.7], [0, 1, 1, 0.2]);
  const card2Opacity = useTransform(smoothProgress, [0.6, 0.7], [0.2, 1]);

  const videoSlide1Y = useTransform(smoothProgress, [0.2, 0.35, 0.5, 0.65], ['20vh', '0vh', '0vh', '-20vh']);
  const videoSlide1Opacity = useTransform(smoothProgress, [0.2, 0.35, 0.5, 0.65], [0, 1, 1, 0]);
  const videoSlide1Scale = useTransform(smoothProgress, [0.5, 0.65], [1, 0.8]);

  const videoSlide2Y = useTransform(smoothProgress, [0.6, 0.75], ['30vh', '0vh']);
  const videoSlide2Opacity = useTransform(smoothProgress, [0.6, 0.75, 0.9, 1], [0, 1, 1, 0]);
  const videoSlide2Scale = useTransform(smoothProgress, [0.6, 0.75], [0.9, 1]);

  const controls1Y = useTransform(smoothProgress, [0.35, 0.5, 0.6, 0.7], [30, 0, 0, 50]);
  const controls1Opacity = useTransform(smoothProgress, [0.35, 0.5, 0.6, 0.7], [0, 1, 1, 0]);

  const controls2Y = useTransform(smoothProgress, [0.75, 0.85], [30, 0]);
  const controls2Opacity = useTransform(smoothProgress, [0.75, 0.85], [0, 1]);

  const sliderHeight = useTransform(smoothProgress, [0.6, 0.7], ['50%', '100%']);

  const solutions: Solution[] = [
    {
      id: '1',
      title: 'Complete body',
      video: '/videos/product/PassengerAlpha.mp4',
      poster: '/images/solutions/Passenger-Alpha-poster.webp',
      tabImage: '/images/solutions/completeBody.png',
    },
    {
      id: '2',
      title: 'Front',
      video: '/videos/product/Front.mp4',
      poster: '/images/solutions/Front-poster.webp',
      tabImage: '/images/solutions/front.png',
    },
    {
      id: '3',
      title: 'Cabin',
      video: '/videos/product/Cabin.mp4',
      poster: '/images/solutions/Cabin-poster.webp',
      tabImage: '/images/solutions/cabin.png',
    },
    {
      id: '4',
      title: 'Trunk',
      video: '/videos/product/Trunk.mp4',
      poster: '/images/solutions/Trunk-poster.webp',
      tabImage: '/images/solutions/trunk.png',
    },
    {
      id: '5',
      title: 'Exterior',
      video: '/videos/product/Exterior.mp4',
      poster: '/images/solutions/Exterior-poster.webp',
      tabImage: '/images/solutions/exterior.png',
    },
  ];

  const commercialSolutions: Solution[] = [
    {
      id: '1',
      title: 'Complete Body',
      video: '/videos/product/CommercialAlpha.mp4',
      poster: '/images/commercial/Commercial-Alpha-poster.webp',
      tabImage: '/images/commercial/com-1.svg',
    },
    {
      id: '2',
      title: 'Engine',
      video: '/videos/product/Commercial-Engine.mp4',
      poster: '/images/commercial/Commercial-Engine-poster.png',
      tabImage: '/images/commercial/com-2.svg',
    },
    {
      id: '3',
      title: 'Cabin',
      video: '/videos/product/Commercial-Cabin.mp4',
      poster: '/images/commercial/Commercial-Cabin-poster.png',
      tabImage: '/images/commercial/com-3.svg',
    },
  ];

  const togglePlayPause = useCallback(async (): Promise<void> => {
    let video: HTMLVideoElement | null;
    if (activeSlide === 0) {
      video = videoRef.current;
      if (videoRefSlide2.current) {
        try {
          videoRefSlide2.current.pause();
        } catch (error) {
          // Ignore pause errors
        }
      }
    } else {
      video = videoRefSlide2.current;
      if (videoRef.current) {
        try {
          videoRef.current.pause();
        } catch (error) {
          // Ignore pause errors
        }
      }
    }
    
    if (!video) return;
    
    try {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        await video.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Video playback interrupted:', error);
      setIsPlaying(false);
    }
  }, [isPlaying, activeSlide]);

  const handleTimeUpdate = useCallback((e: React.SyntheticEvent<HTMLVideoElement>): void => {
    const target = e.target as HTMLVideoElement;
    const { currentTime, duration } = target;
    const vidProgress = (currentTime / duration) * 100;
    setProgress(vidProgress);
  }, []);

  useMotionValueEvent(smoothProgress, "change", (latest: number) => {
    if (latest < 0.6) {
      setActiveSlide(0);
    } else {
      setActiveSlide(1);
    }
  });

  useEffect(() => {
    setProgress(0);
    
    const resetAndPlayVideo = async (): Promise<void> => {
      const currentVideo = activeSlide === 0 ? videoRef.current : videoRefSlide2.current;
      if (currentVideo) {
        try {
          currentVideo.currentTime = 0;
          await currentVideo.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Video reset and play interrupted:', error);
          setIsPlaying(false);
        }
      }
    };

    resetAndPlayVideo();
  }, [activePassengerIndex, activeCommercialIndex, activeSlide]);

  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement | null): Promise<void> => {
      if (!video) return;
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play prevented:', error);
        setIsPlaying(false);
      }
    };

    const pauseVideo = (video: HTMLVideoElement | null): void => {
      if (!video) return;
      try {
        video.pause();
        video.currentTime = 0;
      } catch (error) {
        // Ignore pause errors
      }
    };

    if (activeSlide === 0) {
      pauseVideo(videoRefSlide2.current);
      playVideo(videoRef.current);
    } else {
      pauseVideo(videoRef.current);
      playVideo(videoRefSlide2.current);
    }
  }, [activeSlide]);

  useEffect(() => {
    const handleResize = (): void => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoLoadedData = useCallback((videoElement: HTMLVideoElement, slideIndex: number): void => {
    if (activeSlide === slideIndex && videoElement) {
      videoElement.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeSlide]);

  return (
    <div className="bg-black text-white">
      <div ref={containerRef} className="relative pb-20" style={{ height: '600vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-black flex flex-col justify-between">
          
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="w-fit mx-auto pt-6 z-10"
          >
            <h2 className="text-white font-light leading-snug text-center text-4xl lg:text-5xl">
              Evolving the drive with{' '}
              <span className="font-bold">360-degree</span>{' '}
              <br className="hidden md:block " /> 
              comprehensive solutions
            </h2>
          </motion.div>

          {isLargeDevice && (
            <div className="grid grid-cols-[35%_65%] relative h-full">
              <motion.div
                style={{ y: sidebarY, opacity: sidebarOpacity }}
                className="pl-14 self-center ml-[20%] relative py-10 flex flex-col"
              >
                <motion.button
                  style={{ opacity: card1Opacity }}
                  type="button"
                  className="text-left"
                >
                  <h3 className="font-medium text-left pb-2 text-3xl">
                    Passenger vehicles
                  </h3>
                  <h6 className="font-light text-left text-lg text-gray-300">
                    Revving up innovation from <br /> interior to exterior.
                  </h6>
                </motion.button>

                <motion.button
                  style={{ opacity: card2Opacity }}
                  type="button"
                  className="text-left mt-14"
                >
                  <h3 className="font-medium text-left pb-2 text-3xl">
                    Commercial vehicles
                  </h3>
                  <h6 className="font-light text-left text-lg text-gray-300">
                    Advancing engineering <br /> for heavy-duty vehicles.
                  </h6>
                </motion.button>

                <div className="absolute left-0 h-full w-[2px] rounded-md bg-gray-600 top-0">
                  <motion.div 
                    style={{ height: sliderHeight }}
                    className="w-[2px] bg-white rounded-md"
                  />
                </div>
              </motion.div>

              <div className="relative flex items-center">
                <motion.div
                  style={{ 
                    y: videoSlide1Y, 
                    opacity: videoSlide1Opacity, 
                    scale: videoSlide1Scale 
                  }}
                  className="self-center mx-auto"
                >
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={activePassengerIndex}
                      ref={videoRef}
                      muted
                      playsInline
                      className="w-auto max-h-[360px] min-h-[230px] h-[40vh] rounded-lg"
                      onTimeUpdate={handleTimeUpdate}
                      poster={solutions[activePassengerIndex]?.poster}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onLoadedData={(e) => handleVideoLoadedData(e.currentTarget, 0)}
                    >
                      <source src={solutions[activePassengerIndex]?.video} type="video/mp4" />
                    </motion.video>
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  style={{ 
                    y: videoSlide2Y, 
                    opacity: videoSlide2Opacity, 
                    scale: videoSlide2Scale 
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[580px] xl:w-[750px] 2xl:w-[900px] h-full flex items-center justify-center"
                >
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={activeCommercialIndex}
                      ref={videoRefSlide2}
                      muted
                      playsInline
                      className="w-auto max-h-[360px] scale-105 min-h-[230px] h-[40vh] rounded-lg"
                      onTimeUpdate={handleTimeUpdate}
                      poster={commercialSolutions[activeCommercialIndex]?.poster}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onLoadedData={(e) => handleVideoLoadedData(e.currentTarget, 1)}
                    >
                      <source src={commercialSolutions[activeCommercialIndex]?.video} type="video/mp4" />
                    </motion.video>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          )}

          {isLargeDevice && (
            <div className="flex justify-end items-center relative max-w-7xl mx-auto w-full px-6">
              <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
                
                {activeSlide === 0 && (
                  <motion.div
                    style={{ y: controls1Y, opacity: controls1Opacity }}
                    className="grid grid-cols-5 gap-4"
                  >
                    {solutions.map((item, index) => (
                      <Tab
                        key={index}
                        index={index}
                        title={item.title}
                        activeIndex={activePassengerIndex}
                        tabImage={item.tabImage}
                        onClick={(selectedIndex: number) => setActivePassengerIndex(selectedIndex)}
                      />
                    ))}
                  </motion.div>
                )}

                {activeSlide === 1 && (
                  <motion.div
                    style={{ y: controls2Y, opacity: controls2Opacity }}
                    className="grid grid-cols-3 gap-8 place-content-center w-fit mx-auto"
                  >
                    {commercialSolutions.map((item, index) => (
                      <Tab
                        key={item.id}
                        index={index}
                        title={item.title}
                        activeIndex={activeCommercialIndex}
                        tabImage={item.tabImage}
                        onClick={(selectedIndex: number) => setActiveCommercialIndex(selectedIndex)}
                      />
                    ))}
                  </motion.div>
                )}

                <motion.div
                  style={{ 
                    y: activeSlide === 0 ? controls1Y : controls2Y, 
                    opacity: activeSlide === 0 ? controls1Opacity : controls2Opacity 
                  }}
                  className="absolute right-0 top-0 bottom-0 my-auto z-50 flex items-center"
                >
                  <CircularProgressBarButton
                    progress={progress}
                    isPlaying={isPlaying}
                    togglePlayPause={togglePlayPause}
                  />
                </motion.div>
              </div>
            </div>
          )}

          {!isLargeDevice && (
            <div className="px-6 py-8 text-center space-y-8">
              <div>
                <h4 className="text-xl text-blue-400 mb-2 font-semibold">
                  Passenger vehicles
                </h4>
                <p className="text-gray-300">
                  Revving up innovation <br className="md:hidden" /> from interior to exterior.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {solutions.slice(0, 3).map((item) => (
                    <SolutionCard
                      key={item.id}
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-2 text-blue-400 font-semibold">
                  Commercial vehicles
                </h3>
                <p className="text-gray-300">
                  Advancing engineering <br className="md:hidden" /> for heavy-duty vehicles.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {commercialSolutions.map((item) => (
                    <SolutionCard
                      key={item.id}
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;