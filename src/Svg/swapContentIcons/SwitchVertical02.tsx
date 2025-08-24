import type { SVGProps } from "react";
const SvgSwitchVertical02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      // stroke="#777879"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 4v16m0 0-4-4m4 4 4-4m6 4V4m0 0-4 4m4-4 4 4"
    />
  </svg>
);
export default SvgSwitchVertical02;
