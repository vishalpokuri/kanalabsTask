import type { SVGProps } from "react";
const SvgArrowsShuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      // stroke="#A5A5A6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 4 3 3-3 3m0 10 3-3-3-3"
    />
    <path
      // stroke="#A5A5A6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5m0-10h-5a4.98 4.98 0 0 0-3 1m-4 8a5 5 0 0 1-3 1H3"
    />
  </svg>
);
export default SvgArrowsShuffle;
