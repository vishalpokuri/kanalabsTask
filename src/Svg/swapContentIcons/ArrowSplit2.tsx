import type { SVGProps } from "react";
const SvgArrowSplit2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={2}
      d="M21 17h-5.397a5 5 0 0 1-4.096-2.133l-.514-.734A5 5 0 0 0 6.897 12H3h3.9a5 5 0 0 0 4.097-2.135l.51-.73A5 5 0 0 1 15.605 7H21"
    />
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={2}
      d="m18 10 3-3-3-3m0 16 3-3-3-3"
    />
  </svg>
);
export default SvgArrowSplit2;
