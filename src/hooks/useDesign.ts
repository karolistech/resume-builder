import { useEffect, useState } from "react";

import type { Design } from "@/types/design";

const defaultDesign: Design = {
  layout: "top",
  font: "sans",
  headerBackground: "#0e374e",
  headerText: "#eef1f2",
  sectionBackground: "#eef1f2",
  sectionText: "#0e374e",
  dividerLine: "#eef1f2"
};

export function useDesign() {
  const [design, setDesign] = useState<Design>(defaultDesign);

  const { headerBackground, headerText, sectionBackground, sectionText, dividerLine } = design;

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--color-header-background", headerBackground);
    root.style.setProperty("--color-header-text", headerText);
    root.style.setProperty("--color-section-background", sectionBackground);
    root.style.setProperty("--color-section-text", sectionText);
    root.style.setProperty("--color-divider-line", dividerLine);
  }, [headerBackground, headerText, sectionBackground, sectionText, dividerLine]);

  function updateDesign(updates: Partial<Design>) {
    setDesign(design => ({ ...design, ...updates }));
  }

  return { design, updateDesign };
}
