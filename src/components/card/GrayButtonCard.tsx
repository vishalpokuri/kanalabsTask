import React from "react";

interface GrayButtonCardProps {
  children?: React.ReactNode;
  classes?: string;
}

function GrayButtonCard({ children, classes }: GrayButtonCardProps) {
  return (
    <div
      className={`bg-[#1C1F20] border border-[#fff]/10 flex gap-2 p-2 rounded-xl ${classes}`}
    >
      {children}
    </div>
  );
}

export default GrayButtonCard;
