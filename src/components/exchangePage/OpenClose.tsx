import { useState } from "react";

function OpenClose() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full items-center justify-center text-text1 text-xs">
      <button
        className={`h-8 w-full flex items-center justify-center px-4 ${
          isOpen
            ? "bg-surface2 border-b border-cyanpri"
            : "border-b border-stroke"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <span className={isOpen ? "font-meb" : "font-mr"}>Open</span>
      </button>
      <button
        className={`h-8 w-full flex items-center justify-center px-4 ${
          !isOpen
            ? "bg-surface2 border-b border-cyanpri"
            : "border-b border-stroke text-text3"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <span className={!isOpen ? "font-meb" : "font-mr"}>Close</span>
      </button>
    </div>
  );
}

export default OpenClose;
