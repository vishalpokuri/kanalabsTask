import React from "react";

interface GrayCardProps {
  children?: React.ReactNode;
  classes?: string;
}

function GrayCard({ children, classes }: GrayCardProps) {
  return (
    <div
      className={`bg-[#1C1F20] border border-[#fff]/10 flex gap-2 p-2 rounded-xl ${classes}`}
    >
      {children}
    </div>
  );
}

export default GrayCard;
