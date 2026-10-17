import { useState } from "react";

import type { Education, Resume } from "@/types/resume";

import "./Education.css";
import icons from "@/assets/icons/icons.svg";

type EducationProps = {
  education: Education[];
  updateResume: (updates: Partial<Resume>) => void;
};

export default function Education({ education, updateResume }: EducationProps) {
  const [sectionOpen, setSectionOpen] = useState(true);

  function toggleSection() {
    setSectionOpen(open => !open);
  }

  return (
    <div className="education">
      <button className="education__section-button" onClick={toggleSection}>
        <svg className="education__icon">
          <use href={`${icons}#graduation-cap`} />
        </svg>

        <span className="education__title">Education</span>

        <svg className={getChevronClassName(sectionOpen)}>
          <use href={`${icons}#chevron`} />
        </svg>
      </button>

      {sectionOpen && (
        <>
          <ul className="education__entries">
            {education.map(entry => (
              <li key={entry.id} className="education__entry">
                <button className="education__edit-button">
                  <span className="education__school">
                    {entry.school}
                  </span>
                </button>

                <button className="education__visibility-button">
                  <svg className="education__visibility-icon">
                    <use href={`${icons}#${entry.visible ? "eye" : "eye-slash"}`} />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button className="education__create-button">
            + Education
          </button>
        </>
      )}
    </div>
  );
}

function getChevronClassName(sectionOpen: boolean): string {
  const base = "education__chevron-icon";
  const open = sectionOpen && "education__chevron-icon--open";

  return [base, open].filter(Boolean).join(" ");
}
