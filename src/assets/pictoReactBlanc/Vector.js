import * as React from "react";
const SvgVector = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="url(#Vector_svg__a)"
      d="M16.896 7.726c-.033 3.905-4.052 7.681-8.185 7.31C3.233 14.534.753 12.116.46 7.754.218 4.208 3.459.518 8.63.575c4.684.043 8.282 3.132 8.25 7.151z"
    />
    <defs>
      <linearGradient
        id="Vector_svg__a"
        x1={0.461}
        x2={16.896}
        y1={7.812}
        y2={7.812}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AE8ABE" />
        <stop offset={1} stopColor="#8390C8" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgVector;
