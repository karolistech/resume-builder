export type Layout = "top" | "left" | "right";

export type Font = "sans" | "serif" | "mono";

export type Color = "headerBackground" | "headerText" | "sectionBackground" | "sectionText" | "dividerLine";

export type Design = {
  layout: Layout;
  font: Font;
  headerBackground: string;
  headerText: string;
  sectionBackground: string;
  sectionText: string;
  dividerLine: string;
};
