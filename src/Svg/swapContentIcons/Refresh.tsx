import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      // stroke="#2ED3B7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.698 13.178a5.667 5.667 0 0 0 7.21-8.012l-.167-.288m-9.649 5.956a5.667 5.667 0 0 1 7.21-8.012m-8.64 8.067 1.822.488.488-1.821m8.056-3.112.488-1.821 1.822.488"
    />
  </svg>
);
export default SvgRefresh;
