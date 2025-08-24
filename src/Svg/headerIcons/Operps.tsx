import type { SVGProps } from "react";
const SvgOperps = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.33}
      d="M4.667 14h6.666M8 2v12M2 4.667h1.333C4.667 4.667 6.667 4 8 3.333c1.333.667 3.333 1.334 4.667 1.334H14m-3.333 6 2-5.334 2 5.334a3.34 3.34 0 0 1-4 0m-9.334 0 2-5.334 2 5.334a3.34 3.34 0 0 1-4 0"
    />
  </svg>
);
export default SvgOperps;
