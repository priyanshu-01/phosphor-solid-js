/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="128" r="16"/>
  <circle cx="164" cy="128" r="16"/>
  <path d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,32c-16,20-16,40-16,40a16.00421,16.00421,0,0,0,24.00155,13.85859" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <path d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M131.92139,24.0813C120.32031,40.37354,120.002,55.87939,120,56.044A8.00006,8.00006,0,0,0,136,56a8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.72876.125-14.4248,8.57715-30.85474a104.06072,104.06072,0,1,0,19.34424-1.064ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm78.9668,46.665a56.03047,56.03047,0,0,1-61.93213.001,7.99982,7.99982,0,1,1,8.85742-13.32422,40.03347,40.03347,0,0,0,44.21777-.001A7.99969,7.99969,0,1,1,158.9668,174.665ZM164,140a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="128" r="10"/>
  <circle cx="164" cy="128" r="10"/>
  <path d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="128" r="8"/>
  <circle cx="164" cy="128" r="8"/>
  <path d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <path d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Baby = (props: any, ref: any)  => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
};


export default Baby;
