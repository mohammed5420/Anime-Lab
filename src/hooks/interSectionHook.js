import { useEffect } from "react";

const InterSectionHook = (ref, state, setState) => {
  const options = { rootMargin: "-40px", threshold: 0.1 };
  const observer = new IntersectionObserver(
    ([entry]) => setState(entry.isIntersecting),
    options
  );
  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return state;
};

export default InterSectionHook;
