/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const WeatherPieceCloud = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="86"
      viewBox="0 0 120 86"
      width="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2654_1533)">
        <path
          d="M27.3963 86C12.2657 86 0 73.7002 0 58.5278C0 43.3553 12.2657 31.0556 27.3963 31.0556C29.6477 31.0556 31.7582 29.799 32.8657 27.8388C37.1917 20.1825 45.3904 15.0159 54.7925 15.0159C55.6553 15.0159 56.5079 15.0594 57.3484 15.1443C59.6379 15.3757 61.9399 14.3919 63.2908 12.529C68.7969 4.93611 77.7257 0 87.8042 0C101.439 0 112.969 9.0341 116.768 21.4586C117.447 23.68 119.328 25.3782 121.607 25.829C135.513 28.5801 146 40.8754 146 55.627C146 72.4015 132.439 86 115.711 86H27.3963Z"
          fill="white"
          fillOpacity="0.7"
        />
        <path
          d="M0.5 58.5278C0.5 73.4254 12.5432 85.5 27.3963 85.5H115.711C132.162 85.5 145.5 72.1267 145.5 55.627C145.5 41.1178 135.185 29.0249 121.51 26.3195C119.05 25.833 117.023 24.0026 116.29 21.6048C112.553 9.38383 101.212 0.5 87.8042 0.5C77.893 0.5 69.1118 5.35347 63.6956 12.8225C62.2358 14.8356 59.7573 15.8904 57.2981 15.6418C56.4743 15.5585 55.6385 15.5159 54.7925 15.5159C45.5784 15.5159 37.5422 20.5786 33.301 28.0848C32.1067 30.1986 29.8317 31.5556 27.3963 31.5556C12.5432 31.5556 0.5 43.6301 0.5 58.5278Z"
          stroke="white"
          strokeOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="126"
          id="filter0_b_2654_1533"
          width="186"
          x="-20"
          y="-20"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2654_1533" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2654_1533" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
