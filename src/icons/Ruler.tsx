/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="132" y1="60" x2="164" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96" y1="96" x2="128" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="60" y1="132" x2="92" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" opacity="0.2"/>
  <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="132" y1="60" x2="164" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="96" x2="128" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="60" y1="132" x2="92" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,76.68652,179.31348,23.999A16.02162,16.02162,0,0,0,156.68555,24L132,48.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L120.686,60,96,84.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L84.686,96,60,120.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L48.686,132,24.001,156.68555A15.99888,15.99888,0,0,0,24,179.31348L76.68652,232.001A16.02252,16.02252,0,0,0,99.31445,232L232,99.31348a15.9989,15.9989,0,0,0,0-22.627Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="132" y1="60" x2="164" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="96" x2="128" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="60" y1="132" x2="92" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="132" y1="60" x2="164" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="96" x2="128" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="60" y1="132" x2="92" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="26.17662" y="82.74517" width="203.64675" height="90.50967" rx="8" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="132" y1="60" x2="164" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="96" x2="128" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="60" y1="132" x2="92" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Ruler = (props: any, ref: any)  => {
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


export default Ruler;
