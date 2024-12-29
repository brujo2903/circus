import { useState, useEffect, useCallback } from "react";
import { debounce } from "@/lib/utils";

export function useScrollPosition(threshold: number = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(
    debounce(() => {
      const scrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        window.requestAnimationFrame(() => {
          setIsScrolled(scrolled);
        });
      }
    }, 10),
    [threshold, isScrolled]
  );

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScrolled;
}