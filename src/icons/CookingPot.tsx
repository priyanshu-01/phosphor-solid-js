/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="88" y1="16" x2="88" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="16" x2="128" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="16" x2="168" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M52,80H204a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H68a24,24,0,0,1-24-24V88A8,8,0,0,1,52,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="244" y1="96" x2="212" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="12" y1="96" x2="44" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z" opacity="0.2"/>
  <line x1="96" y1="16" x2="96" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="16" x2="128" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="16" x2="160" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="248" y1="96" x2="216" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="8" y1="96" x2="40" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8.00039,8.00039,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8.00039,8.00039,0,0,0,128,56Zm32,0a8.00039,8.00039,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8.00039,8.00039,0,0,0,160,56Zm94.3999,35.2002a7.99886,7.99886,0,0,0-11.1997-1.6001L224,104V88a16.01833,16.01833,0,0,0-16-16H48A16.01833,16.01833,0,0,0,32,88v16L12.7998,89.6001a7.9998,7.9998,0,0,0-9.5996,12.7998L32,124v60a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V124l28.7998-21.6001A7.9993,7.9993,0,0,0,254.3999,91.2002Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="96" y1="16" x2="96" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="16" x2="128" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="16" x2="160" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="248" y1="96" x2="216" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="8" y1="96" x2="40" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="96" y1="16" x2="96" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="16" x2="128" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="16" x2="160" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="248" y1="96" x2="216" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="8" y1="96" x2="40" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="96" y1="16" x2="96" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="16" x2="128" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="16" x2="160" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,80H208a8,8,0,0,1,8,8v96a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V88A8,8,0,0,1,48,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="248" y1="96" x2="216" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="8" y1="96" x2="40" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CookingPot = (props: any, ref: any)  => {
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


export default CookingPot;
