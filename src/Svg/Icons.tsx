export interface IconProps {
  className?: string;
  size?: number;
}

export const ChevronRightIcon = ({ className = "", size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Chevron Right</title>
    <polyline
      points="12 8 20 16 12 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownIcon = ({ className = "", size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Chevron Down</title>
    <polyline
      points="8 12 16 20 24 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Circle = ({ className = "", size = 18 }: IconProps) => (
  <svg
    version="1.1"
    id="Capa_1"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    viewBox="-47.16 -47.16 565.93 565.93"
    stroke="currentColor"
    stroke-width="34.427676000000005"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path d="M68.987,402.624c91.98,91.983,241.652,91.983,333.636,0c91.983-91.977,91.983-241.658,0-333.639s-241.655-91.98-333.636,0 S-22.993,310.642,68.987,402.624z M87.29,87.276c81.899-81.896,215.152-81.896,297.052,0c81.882,81.894,81.882,215.154,0,297.055 c-81.899,81.887-215.164,81.887-297.052,0C5.394,302.431,5.394,169.17,87.29,87.276z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);
