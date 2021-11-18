/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <g opacity="0.1">
    <rect x="0.00146" width="256" height="256" fill="none"/>
  </g>
  <circle cx="128.00146" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="120.001 124 128.001 124 128.001 176 136.001 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="126" cy="84" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <g opacity="0.1">
    <rect x="0.00244" width="256" height="256" fill="none"/>
  </g>
  <circle cx="128.00244" cy="128" r="96" opacity="0.2"/>
  <circle cx="128.00244" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120.002 120 128.002 120 128.002 176 136.002 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="126.00244" cy="84" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <g opacity="0.1">
    <rect x="0.00195" width="256" height="256" fill="none"/>
  </g>
  <path d="M128.00146,23.99963a104,104,0,1,0,104,104A104.11791,104.11791,0,0,0,128.00146,23.99963ZM126.002,72a12,12,0,1,1-12,12A12,12,0,0,1,126.002,72Zm9.99951,111.99963h-8a8.0004,8.0004,0,0,1-8-8v-48a8,8,0,1,1,0-16h8a8.00039,8.00039,0,0,1,8,8v48a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <g opacity="0.1">
    <rect x="0.00098" width="256" height="256" fill="none"/>
  </g>
  <circle cx="128.00098" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="120 120 128.001 120 128 176 136 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="126" cy="84" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <g opacity="0.1">
    <rect x="0.00049" width="256" height="256" fill="none"/>
  </g>
  <circle cx="128.00049" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="126.00049" cy="84" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <g opacity="0.1">
    
  </g>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="120 120 128 120 128 176 136 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="126" cy="84" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Info = (props: any, ref: any)  => {
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


export default Info;
