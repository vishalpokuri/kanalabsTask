import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M5.236 14c.47.415 1.088.667 1.764.667s1.294-.252 1.764-.667M11 5.333a4 4 0 0 0-8 0c0 2.06-.52 3.471-1.1 4.404-.49.787-.735 1.18-.726 1.29.01.122.036.168.134.24.088.066.487.066 1.285.066h8.814c.798 0 1.197 0 1.285-.065.098-.073.124-.12.134-.24.009-.11-.236-.504-.726-1.291-.58-.933-1.1-2.344-1.1-4.404"
    />
  </svg>
);
export default SvgBell;
