import React from "react";

interface BorderCardProps {
  children: React.ReactNode;
  classes?: string;
}

function BorderCard({ children, classes = "" }: BorderCardProps) {
  return (
    <div className={`border border-stroke rounded-lg flex ${classes}`}>
      {children}
    </div>
  );
}

export default BorderCard;
