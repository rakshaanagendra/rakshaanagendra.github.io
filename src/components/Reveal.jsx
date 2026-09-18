import useInView from "../hooks/useInView.js";

// Wraps children with a scroll-triggered fade/slide-up reveal.
// `delay` (ms) staggers multiple Reveal siblings.
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
