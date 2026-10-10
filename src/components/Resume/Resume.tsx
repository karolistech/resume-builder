import { useEffect, useRef } from "react";

import "./Resume.css";

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const resume = resumeRef.current;

    if (container === null || resume === null) return;

    const updateScale = () => {
      const availableWidth = container.clientWidth;
      const resumeWidth = resume.offsetWidth;
      const resumeHeight = resume.offsetHeight;

      const scale = availableWidth / resumeWidth;

      container.style.height = `${resumeHeight * scale}px`;
      resume.style.transform = `scale(${scale})`;
    };

    const observer = new ResizeObserver(updateScale);

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="resume__container">
      <div ref={resumeRef} className="resume">
      </div>
    </div>
  );
}
