import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#userCircle_svg__a)">
      <path
        // stroke="#00FFF0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
        d="M3.544 12.959A2.67 2.67 0 0 1 6 11.333h4c1.103 0 2.05.67 2.456 1.626m-1.79-6.626a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.334 0m4 1.667A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.334 0"
      />
    </g>
    <defs>
      <clipPath id="userCircle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircle;
