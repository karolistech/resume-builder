import type { Design, Font, Layout } from "@/types/design";

import "./Design.css";

type DesignProps = {
  design: Design;
  updateDesign: (updates: Partial<Design>) => void;
};

const layouts: Layout[] = ["top", "left", "right"];

const fonts: Font[] = ["sans", "serif", "mono"];

export default function Design({ design, updateDesign }: DesignProps) {
  const { layout: currentLayout, font: currentFont } = design;

  return (
    <>
      <div className="layout">
        <h2 className="layout__title">Layout</h2>

        <div className="layout__options">
          {layouts.map(layout => (
            <button
              key={layout}
              className={getLayoutButtonClass(layout, currentLayout)}
              onClick={() => updateDesign({ layout: layout })}
            >
              <span className="layout__label">
                {layout}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="font">
        <h2 className="font__title">Font</h2>

        <div className="font__options">
          {fonts.map(font => (
            <button
              key={font}
              className={getFontButtonClass(font, currentFont)}
              onClick={() => updateDesign({ font: font })}
            >
              {font}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function getLayoutButtonClass(layout: Layout, currentLayout: Layout): string {
  const base = "layout__button";
  const position = `layout__button--${layout}`;
  const selected = layout === currentLayout && "layout__button--selected";

  return [base, position, selected].filter(Boolean).join(" ");
}

function getFontButtonClass(font: Font, currentFont: Font): string {
  const base = "font__button";
  const variant = `font__button--${font}`;
  const selected = font === currentFont && "font__button--selected";

  return [base, variant, selected].filter(Boolean).join(" ");
}
