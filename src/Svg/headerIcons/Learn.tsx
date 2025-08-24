import type { SVGProps } from "react";
const SvgLearn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 4.667A2.667 2.667 0 0 0 5.333 2h-4v10H6a2 2 0 0 1 2 2m0-9.333V14m0-9.333A2.667 2.667 0 0 1 10.667 2h4v10H10a2 2 0 0 0-2 2"
    />
  </svg>
);
export default SvgLearn;
