import type { SVGProps } from "react";
const SvgCredit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      // stroke="#00FFF0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M12.667 14v-4m-2 2h4m0-5.333H1.333M14.667 8V5.467c0-.747 0-1.12-.146-1.406a1.33 1.33 0 0 0-.582-.582c-.286-.146-.659-.146-1.406-.146H3.467c-.747 0-1.12 0-1.406.146-.25.127-.455.331-.582.582-.146.286-.146.659-.146 1.406v5.066c0 .747 0 1.12.146 1.406.127.25.331.454.582.582.286.146.659.146 1.406.146H8"
    />
  </svg>
);
export default SvgCredit;
