import type { Design, Layout } from "@/types/design";

import "./Design.css";

type DesignProps = {
  design: Design;
  updateDesign: (updates: Partial<Design>) => void;
};

const layouts: Layout[] = ["top", "left", "right"];

export default function Design({ design, updateDesign }: DesignProps) {
  const { layout: currentLayout } = design;

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
    </>
  );
}

function getLayoutButtonClass(layout: Layout, currentLayout: Layout): string {
  const base = "layout__button";
  const position = `layout__button--${layout}`;
  const selected = layout === currentLayout && "layout__button--selected";

  return [base, position, selected].filter(Boolean).join(" ");
}
