import type { SVGProps } from "react";
const SvgRefer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.667 14v-1.333A2.667 2.667 0 0 0 8 10H4a2.667 2.667 0 0 0-2.667 2.667V14m13.334 0v-1.333a2.67 2.67 0 0 0-2-2.58m-2-8a2.667 2.667 0 0 1 0 5.166m-2-2.586a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0"
    />
  </svg>
);
export default SvgRefer;
