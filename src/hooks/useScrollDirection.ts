"use client";

import { useState, useEffect, useRef } from "react";

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setIsVisible(true);
      } else if (scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (scrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return { isVisible };
};
