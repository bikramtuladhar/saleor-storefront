interface StampProps {
  width?: number;
  height?: number;
  className?: string;
}

function Stamp({ width = 32, height = 33, ...rest }: StampProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79116 1C7.72498 1 7.6615 1.02624 7.61464 1.07297L1.42826 7.24163C1.27042 7.39902 1.38188 7.66866 1.60478 7.66866H24.0905C24.1566 7.66866 24.2201 7.64242 24.267 7.59569L30.4534 1.42703C30.6112 1.26964 30.4997 1 30.2768 1H7.79116Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Stamp;
