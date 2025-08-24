import type { SVGProps } from "react";
const SvgSwitchHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.667}
      d="M6.667 5.667H1.333m0 0 1.334-1.334M1.333 5.667 2.667 7M1.333 2.333h5.334m0 0L5.333 1m1.334 1.333L5.333 3.667"
    />
  </svg>
);
export default SvgSwitchHorizontal;
