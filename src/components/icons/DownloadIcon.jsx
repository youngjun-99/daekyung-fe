import React from "react";
import wclamp from "/src/utils";

const DownloadIcon = (props) => {
  const { color = "white" } = props;
  const width = wclamp(9, 14);
  const height = wclamp(11, 17);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6H10V0H4V6H0L7 13L14 6ZM6 8V2H8V8H9.17L7 10.17L4.83 8H6ZM0 15H14V17H0V15Z"
        fill={color}
      />
    </svg>
  );
};

export default DownloadIcon;
