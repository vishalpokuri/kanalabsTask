import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  variant = "primary",
  size = "large",
  iconRight,
  iconLeft,
}) => {
  const baseStyles =
    "flex flex-row justify-center items-center gap-2 " +
    "border border-[#009696] rounded-2xl transition-all duration-150 " +
    "font-meb " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none";

  const sizeStyles = {
    small: "px-4 py-2 text-xs h-8 ",
    medium: "px-5 py-2.5 text-base h-12 ",
    large: "px-5 py-3 text-base h-12 min-w-[126px] ",
  };

  const variantStyles = {
    primary:
      "bg-[#009696] text-white " +
      "shadow-[0px_4px_0px_#00B3B3,0px_10px_8px_rgba(0,255,240,0.2)] " +
      // "hover:shadow-[0px_5px_0px_#00B3B3,0px_12px_10px_rgba(0,255,240,0.25)] " +
      "active:shadow-[0px_1px_0px_#00B3B3,0px_3px_4px_rgba(0,255,240,0.15)] " +
      "active:translate-y-[3px]",
    secondary:
      "text-btn-pri text-sm font-meb " +
      "shadow-[0px_4px_0px_#00B3B3,0px_10px_8px_rgba(0,255,240,0.2)] " +
      // "hover:shadow-[0px_5px_0px_#00B3B3,0px_12px_10px_rgba(0,255,240,0.25)] " +
      "active:shadow-[0px_1px_0px_#00B3B3,0px_3px_4px_rgba(0,255,240,0.15)] " +
      "active:translate-y-[3px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {iconLeft && <span className="w-6 h-6">{iconLeft}</span>}
      {children}
      {iconRight && <span className="w-6 h-6">{iconRight}</span>}
    </button>
  );
};
