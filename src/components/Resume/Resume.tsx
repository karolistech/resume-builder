import { useEffect, useRef } from "react";

import type { Resume } from "@/types/resume";

import "./Resume.css";
import icons from "@/assets/icons/icons.svg";

type ResumeProps = {
  resume: Resume;
};

export default function Resume({ resume }: ResumeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const { personal, education, experience } = resume;

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
        <div className="resume__header">
          <h1 className="resume__name">{personal.name}</h1>

          <div className="resume__contacts">
            {personal.email && (
              <div className="resume__contact">
                <svg className="resume__icon">
                  <use href={`${icons}#envelope`} />
                </svg>

                <span>{personal.email}</span>
              </div>
            )}

            {personal.phone && (
              <div className="resume__contact">
                <svg className="resume__icon">
                  <use href={`${icons}#phone`} />
                </svg>

                <span>{personal.phone}</span>
              </div>
            )}

            {personal.location && (
              <div className="resume__contact">
                <svg className="resume__icon">
                  <use href={`${icons}#location`} />
                </svg>

                <span>{personal.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="resume__body">
          {education.some(entry => entry.visible) && (
            <div className="resume__section">
              <h2 className="resume__section-title">Education</h2>

              {education.filter(entry => entry.visible).map(entry => (
                <div key={entry.id} className="resume__entry">
                  <div className="resume__entry-aside">
                    <span>{entry.startDate} – {entry.endDate}</span>
                    <span>{entry.location}</span>
                  </div>

                  <div className="resume__entry-body">
                    <span className="resume__school">{entry.school}</span>
                    <span>{entry.degree}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {experience.some(entry => entry.visible) && (
            <div className="resume__section">
              <h2 className="resume__section-title">Professional Experience</h2>

              {experience.filter(entry => entry.visible).map(entry => (
                <div key={entry.id} className="resume__entry">
                  <div className="resume__entry-aside">
                    <span>{entry.startDate} – {entry.endDate}</span>
                    <span>{entry.location}</span>
                  </div>

                  <div className="resume__entry-body">
                    <span className="resume__company">{entry.company}</span>
                    <span className="resume__position">{entry.position}</span>
                    <p className="resume__description">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
