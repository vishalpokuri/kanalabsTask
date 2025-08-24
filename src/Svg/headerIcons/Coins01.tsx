import type { SVGProps } from "react";
const SvgCoins01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#coins-01_svg__a)">
      <path
        // stroke="#00FFF0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M10.625 10.625a4.668 4.668 0 1 0-5.25-5.25M10.667 10a4.667 4.667 0 1 1-9.334 0 4.667 4.667 0 0 1 9.334 0"
      />
    </g>
    <defs>
      <clipPath id="coins-01_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoins01;
