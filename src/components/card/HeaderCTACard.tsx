import React from "react";

interface GrayCardProps {
  children?: React.ReactNode;
  classes?: string;
}

function HeaderCTACard({ children, classes }: GrayCardProps) {
  return (
    <div
      className={`bg-surface2 border border-border1 font-meb flex gap-2 p-2 rounded-xl  ${classes}  `}
    >
      {children}
    </div>
  );
}

export default HeaderCTACard;
