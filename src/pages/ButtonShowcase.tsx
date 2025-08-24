import { useState } from "react";
import CustomButton from "../components/ui/CustomButton";

const states = [
  { name: "Default", selected: false, disabled: false },
  { name: "Selected", selected: true, disabled: false },
  { name: "Disabled", selected: false, disabled: true },
];
const variants = [
  "default",
  "secondary",
  "tertiary",
  "alternate",
  "warning",
  "error",
];
const sizes = ["small", "medium", "large"];
const types = ["left", "right", "text", "both", "onlyIcon"];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h2 className="mb-4 text-2xl font-bold">{title}</h2>
    {children}
  </div>
);

const VariantGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
    {children}
  </div>
);

const ButtonShowcase = () => {
  const [size, setSize] = useState("medium");
  const [type, setType] = useState("text");

  return (
    <div className="p-8 bg-[#0a0a0a] h-screen text-white flex mx-auto flex-col overflow-y-auto">
      <h1 className="mb-8 text-3xl">Button Showcase</h1>

      {/* Dropdowns for controlling size and type */}
      <div className="mb-8 flex gap-6">
        <label className="flex items-center gap-2">
          <span>Size:</span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-[#333]"
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <span>Type:</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-[#333]"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Loop through states first, then variants */}
      {states.map((state) => (
        <Section
          key={state.name}
          title={`${state.name} State`}
        >
          <VariantGrid>
            {variants.map((variant) => (
              <div
                key={variant}
                className="text-center flex flex-col justify-center items-center"
              >
                <div className="mb-2 text-sm opacity-70">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </div>
                <CustomButton
                  size={size as any}
                  variant={variant as any}
                  type={type as any}
                  selected={state.selected}
                  disabled={state.disabled}
                >
                  {type !== "onlyIcon" ? "Button" : null}
                </CustomButton>
              </div>
            ))}
          </VariantGrid>
        </Section>
      ))}
    </div>
  );
};

export default ButtonShowcase;
