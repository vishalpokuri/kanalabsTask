import type { SVGProps } from "react";
const SvgDownArrowGrey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      // stroke="#777879"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m4 6 4 4 4-4"
    />
  </svg>
);
export default SvgDownArrowGrey;
