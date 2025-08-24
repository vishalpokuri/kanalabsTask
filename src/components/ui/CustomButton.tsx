import React from "react";
import { Circle } from "../../Svg/Icons";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant =
  | "default"
  | "secondary"
  | "tertiary"
  | "alternate"
  | "warning"
  | "error";
type ButtonType = "left" | "right" | "text" | "both" | "onlyIcon";

interface CustomButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  type: ButtonType;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const variantStyles: Record<
  ButtonVariant,
  {
    default: string;
    hover: string;
    selected: string;
    disabled: string;
  }
> = {
  default: {
    default:
      "bg-[#00FFF0] border-[1px] border-[#000]/30 shadow-[0px_10px_8px_0px_#00FFF033,0px_4px_0px_0px_#00B3B3] text-black",
    hover:
      "hover:bg-[#70FFF7] hover:border-[1px] hover:border-[#000]/30 hover:shadow-[0px_4px_8px_0px_#00FFF033,0px_2px_0px_0px_#00B3B3] hover:text-black hover:translate-y-[2px] transition-all duration-150 active:shadow-[0px_2px_4px_0px_#00FFF033,0px_1px_0px_0px_#00B3B3] active:translate-y-[4px]",
    selected:
      "bg-[#70FFF7] border-[1px] border-[#000]/30 shadow-[0px_2px_4px_0px_#00FFF033,0px_1px_0px_0px_#00B3B3] text-black",
    disabled: "bg-[#121414] text-[#FFFFFF66]",
  },
  secondary: {
    default:
      " border-[1px] border-[#009696] shadow-[0px_10px_8px_0px_#00FFF033,0px_4px_0px_0px_#00B3B3] text-[#00FFF0]",
    hover:
      "hover:bg-[#00FFF01A] hover:border-[1px] hover:border-[#009696] hover:shadow-[0px_4px_8px_0px_#00FFF033,0px_2px_0px_0px_#00B3B3] hover:text-[#00FFF0] hover:translate-y-[2px] transition-all duration-150 active:shadow-[0px_2px_4px_0px_#00FFF033,0px_1px_0px_0px_#00B3B3] active:translate-y-[4px]",
    selected:
      " border-[1px] border-[#009696] shadow-[0px_2px_4px_0px_#00FFF033,0px_1px_0px_0px_#00B3B3] text-[#00FFF0]",
    disabled: "",
  },
  tertiary: {
    default: "text-[#00FFF0]",
    hover:
      "hover:text-[#00FFF0] hover:bg-[#1F1F2399] hover:translate-y-[1px] transition-all duration-150 active:translate-y-[2px]",
    selected: "text-[#00FFF0]",
    disabled: "text-[#FFFFFF66]",
  },
  alternate: {
    default:
      "bg-[#080A0A] border-[1px] border-[#64B5F6] shadow-[0px_10px_8px_0px_#1A4B8C33,0px_4px_0px_0px_#175AB3] text-[#64B5F6]",
    hover:
      "hover:bg-[#1C1F20] hover:border-[1px] hover:border-[#64B5F6] hover:shadow-[0px_4px_8px_0px_#1A4B8C33,0px_2px_0px_0px_#175AB3] hover:text-[#64B5F6] hover:translate-y-[2px] transition-all duration-150 active:shadow-[0px_2px_4px_0px_#1A4B8C33,0px_1px_0px_0px_#175AB3] active:translate-y-[4px]",
    selected:
      "bg-[#080A0A] border-[1px] border-[#64B5F6] shadow-[0px_2px_4px_0px_#1A4B8C33,0px_1px_0px_0px_#175AB3] text-[#64B5F6]",
    disabled: "",
  },
  warning: {
    default:
      "bg-[#080A0A] border-[1px] border-[#8D5B00] shadow-[0px_10px_8px_0px_#FFB74D1A,0px_4px_0px_0px_#FFB74D] text-[#FFB74D]",
    hover:
      "hover:bg-[#1C1F20] hover:border-[1px] hover:border-[#8D5B00] hover:shadow-[0px_4px_8px_0px_#FFB74D1A,0px_2px_0px_0px_#FFB74D] hover:text-[#FFB74D] hover:translate-y-[2px] transition-all duration-150 active:shadow-[0px_2px_4px_0px_#FFB74D1A,0px_1px_0px_0px_#FFB74D] active:translate-y-[4px]",
    selected:
      "bg-[#080A0A] border-[1px] border-[#8D5B00] shadow-[0px_2px_4px_0px_#FFB74D1A,0px_1px_0px_0px_#FFB74D] text-[#FFB74D]",
    disabled: "",
  },
  error: {
    default:
      "bg-[#080A0A] border-[1px] border-[#B71C1C] shadow-[0px_10px_8px_0px_#EF53501A,0px_4px_0px_0px_#B71C1C] text-[#EF5350]",
    hover:
      "hover:bg-[#1C1F20] hover:border-[1px] hover:border-[#B71C1C] hover:shadow-[0px_4px_8px_0px_#EF53501A,0px_2px_0px_0px_#B71C1C] hover:text-[#EF5350] hover:translate-y-[2px] transition-all duration-150 active:shadow-[0px_2px_4px_0px_#EF53501A,0px_1px_0px_0px_#B71C1C] active:translate-y-[4px]",
    selected:
      "bg-[#080A0A] border-[1px] border-[#B71C1C] shadow-[0px_2px_4px_0px_#EF53501A,0px_1px_0px_0px_#B71C1C] text-[#EF5350]",
    disabled: "",
  },
};
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return "py-1 px-2 font-meb text-xxs gap-1 rounded-lg";
    case "medium":
      return "py-2 px-3 font-meb text-xs gap-1 rounded-xl";
    case "large":
      return "py-3 px-5 font-meb text-base gap-2 rounded-2xl";
    default:
      return "";
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  variant,
  type,
  selected = false,
  disabled = false,
  children,
  onClick,
  className,
}) => {
  const getButtonStyles = () => {
    const baseStyles = getSizeStyles(size);
    const variantStyle = variantStyles[variant];

    let stateStyles = variantStyle.default;
    if (disabled) {
      stateStyles = variantStyle.disabled;
    } else if (selected) {
      stateStyles = variantStyle.selected;
    }

    const hoverStyles = !disabled ? variantStyle.hover : "";

    return `${baseStyles} ${stateStyles} ${hoverStyles} ${className} flex justify-center items-center`;
  };

  const getIconSize = (size: ButtonSize) => {
    switch (size) {
      case "small":
        return 12;
      case "medium":
        return 16;
      case "large":
        return 20;
      default:
        return 16;
    }
  };

  const iconSize = getIconSize(size);

  return (
    <button className={getButtonStyles()} disabled={disabled} onClick={onClick}>
      {type === "left" && <Circle size={iconSize} />}
      {type === "both" && <Circle size={iconSize} />}
      {type !== "onlyIcon" && children && <span>{children ?? "Button"}</span>}
      {type === "right" && <Circle size={iconSize} />}
      {type === "both" && <Circle size={iconSize} />}
      {type === "onlyIcon" && <Circle size={iconSize} className="my-0.5" />}
    </button>
  );
};

export default CustomButton;
