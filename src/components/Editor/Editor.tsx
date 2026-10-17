import type { Resume } from "@/types/resume";

import Personal from "@/components/Editor/Personal/Personal";
import Education from "@/components/Editor/Education/Education";

type EditorProps = {
  resume: Resume;
  updateResume: (updates: Partial<Resume>) => void;
  clearResume: () => void;
  loadResume: () => void;
};

export default function Editor({ resume, updateResume, clearResume, loadResume }: EditorProps) {
  return (
    <>
      <Personal personal={resume.personal} updateResume={updateResume} />
      <Education education={resume.education} updateResume={updateResume} />
    </>
  );
}
