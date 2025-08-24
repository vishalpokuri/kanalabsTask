import React from "react";
import type { Tab } from "../../types/declaration";

interface HeaderButtonProps {
  svg: React.ReactNode;
  text: string;
  selected: boolean;
  onClick: (tab: Tab) => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  svg,
  text,
  selected,
  onClick,
}) => (
  <button
    className="flex items-center justify-center gap-1 px-3 py-2 bg-transparent border-none cursor-pointer text-text2"
    onClick={() => onClick(text as Tab)}
  >
    <span className={`flex items-center ${selected ? "text-cyan" : ""}`}>
      {svg}
    </span>
    <span className={`text-xs font-meb ${selected ? "text-cyan" : ""}`}>
      {text}
    </span>
  </button>
);

export default HeaderButton;
