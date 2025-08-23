import React from "react";

interface BorderCardProps {
  children: React.ReactNode;
  className?: string;
}

function BorderCard({ children, className = "" }: BorderCardProps) {
  return (
    <div className={`border border-stroke rounded-lg flex ${className}`}>
      {children}
    </div>
  );
}

export default BorderCard;
