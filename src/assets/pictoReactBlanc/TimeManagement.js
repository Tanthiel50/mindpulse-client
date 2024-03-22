import * as React from "react";
const SvgTimeManagement = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 110 110"
    {...props}
  >
    <path
      fill="url(#timeManagement_svg__a)"
      d="M109.433 54.834C109.716 25.565 86.543.67 55.308.575 24.451.481 1.491 24.88.782 54.054.12 81.715 22.37 109.282 55.025 109.376c32.89.071 55.33-27.566 54.408-54.518zm-55.165 49.578c-27.216-.45-49.537-23.595-48.331-50.358-.331-25.675 21.54-48.797 49.608-48.561 28.35.26 49.371 23.808 48.993 50.334-.355 25.226-21.66 49.034-50.294 48.561z"
    />
    <path
      fill="url(#timeManagement_svg__b)"
      d="M84.816 23.297c-1.608 1.3-3.381 2.506-4.87 3.995-6.669 6.62-13.266 13.31-19.674 19.765-2.932 0-5.273-.567-7.164.118-3.122 1.135-5.439.308-8.016-1.276-4.28-2.625-8.749-4.965-13.123-7.447-1.514-.852-2.767-.142-3.382 1.063-.33.615.166 1.915.686 2.625.568.756 1.537 1.253 2.388 1.75 2.601 1.536 5.155 3.167 7.85 4.491 4.067 1.962 7.094 4.374 7.993 9.315.709 3.948 3.736 5.509 7.92 5.414 3.926-.094 6.361-1.726 7.45-5.485.52-1.82.401-3.806.59-6.123C67.58 47.388 72 43.038 76.327 38.593a349 349 0 0 0 9.908-10.615c1.513-1.702 1.324-2.033-1.419-4.681"
    />
    <defs>
      <linearGradient
        id="timeManagement_svg__a"
        x1={0.758}
        x2={109.456}
        y1={54.952}
        y2={54.952}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AE8ABE" />
        <stop offset={1} stopColor="#8390C8" />
      </linearGradient>
      <linearGradient
        id="timeManagement_svg__b"
        x1={28.493}
        x2={87.204}
        y1={43.203}
        y2={43.203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AE8ABE" />
        <stop offset={1} stopColor="#8390C8" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTimeManagement;
