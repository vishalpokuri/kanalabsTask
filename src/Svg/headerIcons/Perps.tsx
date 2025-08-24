import type { SVGProps } from "react";
const SvgPerps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3.333V6m0 4v1.333M11.333 2v1.333m0 5.334v2M2 2v10.667A1.333 1.333 0 0 0 3.333 14H14M5.333 6h1.334c.368 0 .666.298.666.667v2.666a.667.667 0 0 1-.666.667H5.333a.667.667 0 0 1-.666-.667V6.667c0-.369.298-.667.666-.667m5.334-2.667H12c.368 0 .667.299.667.667v4a.667.667 0 0 1-.667.667h-1.333A.667.667 0 0 1 10 8V4c0-.368.299-.667.667-.667"
    />
  </svg>
);
export default SvgPerps;
