import React from "react";
import type { Tab } from "../../types/declaration";

interface HeaderButtonProps {
  svg: string;
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
    className="flex items-center justify-center gap-1 px-3 py-2 bg-transparent border-none cursor-pointer text-[#fff]/80"
    onClick={() => onClick(text as Tab)}
  >
    <img src={svg} alt={text} className="flex items-center" />
    <span className={`text-xs font-mb ${selected ? "text-[#00fff0]" : ""}`}>
      {text}
    </span>
  </button>
);

export default HeaderButton;
