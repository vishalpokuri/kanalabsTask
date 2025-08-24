import type { SVGProps } from "react";
const SvgGear = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.333}
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <path
      // stroke="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M12.485 9.818a1 1 0 0 0 .2 1.103l.036.037a1.21 1.21 0 0 1-.393 1.978 1.21 1.21 0 0 1-1.322-.263l-.036-.037a1 1 0 0 0-1.103-.2 1 1 0 0 0-.606.915v.103a1.212 1.212 0 1 1-2.425 0V13.4a1 1 0 0 0-.654-.915 1 1 0 0 0-1.103.2l-.037.036a1.212 1.212 0 1 1-1.715-1.715l.037-.036a1 1 0 0 0 .2-1.103 1 1 0 0 0-.915-.606h-.103a1.212 1.212 0 1 1 0-2.425H2.6a1 1 0 0 0 .915-.654 1 1 0 0 0-.2-1.103l-.036-.037a1.212 1.212 0 1 1 1.715-1.715l.036.037a1 1 0 0 0 1.103.2h.049a1 1 0 0 0 .606-.916v-.103a1.212 1.212 0 0 1 2.424 0V2.6a1 1 0 0 0 .606.915 1 1 0 0 0 1.103-.2l.037-.036a1.213 1.213 0 1 1 1.715 1.715l-.037.036a1 1 0 0 0-.2 1.103v.049a1 1 0 0 0 .916.606h.103a1.212 1.212 0 1 1 0 2.424H13.4a1 1 0 0 0-.915.606"
    />
  </svg>
);
export default SvgGear;
