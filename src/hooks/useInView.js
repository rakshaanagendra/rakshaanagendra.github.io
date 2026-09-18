import { useEffect, useRef, useState } from "react";

// Reveals an element once it has scrolled into (or past) view.
//
// A pure IntersectionObserver only fires when intersection *crosses* a
// threshold within an observed frame. A fast scroll (page-down key, a
// scrollbar-track click, a hard trackpad flick) can jump an element from
// "below the viewport" straight to "above the viewport" without the browser
// ever recording a frame where it intersected — so the observer never fires
// again and the element stays at opacity: 0 forever. Driving this off the
// scroll/resize events instead and checking the element's *current*
// position avoids that: it can't be skipped, because it reads real
// coordinates at the time of the event rather than waiting for a threshold
// crossing.
export default function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const threshold = options.threshold ?? 0.15;
    let ticking = false;

    const check = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const triggerPoint = window.innerHeight * (1 - threshold);
      // Reveal once it has entered far enough into the viewport, or if a
      // big scroll jump has already carried it above the viewport entirely.
      if (rect.top < triggerPoint || rect.bottom < 0) {
        setIsVisible(true);
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return [ref, isVisible];
}
