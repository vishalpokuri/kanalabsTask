import type { SVGProps } from "react";
const SvgDownFullArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
    {...props}
  >
    <path
      // stroke="#EF5350"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.5 1v10m0 0L1 8.5M3.5 11 6 8.5"
    />
  </svg>
);
export default SvgDownFullArrow;
