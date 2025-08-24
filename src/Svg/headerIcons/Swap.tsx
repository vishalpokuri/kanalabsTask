import type { SVGProps } from "react";
const SvgSwap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#swap_svg__a)">
      <path
        // stroke="#00FFF0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
        d="M12.06 6.913A4 4 0 1 1 6.893 12M4.667 4h.666v2.667m5.807 2.586.467.474-1.88 1.88m-.394-6.274a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </g>
    <defs>
      <clipPath id="swap_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwap;
