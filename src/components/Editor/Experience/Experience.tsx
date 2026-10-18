import { useState } from "react";

import type { Experience, Resume } from "@/types/resume";

import "./Experience.css";
import icons from "@/assets/icons/icons.svg";

type ExperienceProps = {
  experience: Experience[];
  updateResume: (updates: Partial<Resume>) => void;
};

export default function Experience({ experience, updateResume }: ExperienceProps) {
  const [sectionOpen, setSectionOpen] = useState(false);

  function toggleSection() {
    setSectionOpen(open => !open);
  }

  return (
    <div className="experience">
      <button className="experience__section-button" onClick={toggleSection}>
        <svg className="experience__icon">
          <use href={`${icons}#briefcase`} />
        </svg>

        <span className="experience__title">Experience</span>

        <svg className={getChevronClassName(sectionOpen)}>
          <use href={`${icons}#chevron`} />
        </svg>
      </button>

      {sectionOpen && (
        <>
          <ul className="experience__entries">
            {experience.map(entry => (
              <li key={entry.id} className="experience__entry">
                <button className="experience__edit-button">
                  <span className="experience__company">
                    {entry.company}
                  </span>
                </button>

                <button className="experience__visibility-button">
                  <svg className="experience__visibility-icon">
                    <use href={`${icons}#${entry.visible ? "eye" : "eye-slash"}`} />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button className="experience__create-button">
            + Experience
          </button>
        </>
      )}
    </div>
  );
}

function getChevronClassName(sectionOpen: boolean): string {
  const base = "experience__chevron-icon";
  const open = sectionOpen && "experience__chevron-icon--open";

  return [base, open].filter(Boolean).join(" ");
}
