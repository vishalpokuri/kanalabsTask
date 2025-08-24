import type { SVGProps } from "react";
const SvgTrade = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.333 8.667H4.667m8-2.667H10M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M10.667 3.333H12c.368 0 .667.299.667.667v6.667a.667.667 0 0 1-.667.666h-1.333a.667.667 0 0 1-.667-.666V4c0-.368.299-.667.667-.667m-5.334 2h1.334c.368 0 .666.299.666.667v4.667a.667.667 0 0 1-.666.666H5.333a.667.667 0 0 1-.666-.666V6c0-.368.298-.667.666-.667"
    />
  </svg>
);
export default SvgTrade;
