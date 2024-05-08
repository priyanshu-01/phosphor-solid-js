/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="128" y1="168" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="89.35" y1="138.36" x2="35.25" y2="152.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M128,224a96,96,0,0,0,0-192V88a40,40,0,0,1,0,80Z" opacity="0.2"/><line x1="128" y1="168" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="89.35" y1="138.36" x2="35.25" y2="152.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M120,161.94v65.34a4,4,0,0,1-4.46,4,104.28,104.28,0,0,1-84-64.5,4,4,0,0,1,2.69-5.34L97.32,144.5a4,4,0,0,1,4.35,1.66,32.25,32.25,0,0,0,15.59,12A4,4,0,0,1,120,161.94ZM128.06,24A8,8,0,0,0,120,32V88a7.94,7.94,0,0,0,7.87,8,32,32,0,0,1,10.86,62.15,4,4,0,0,0-2.73,3.79v65.34a4,4,0,0,0,4.45,4A104,104,0,0,0,128.06,24Zm-32,101.49a32,32,0,0,1,4.15-13.42l0-.07a8,8,0,0,0-.57-8.87A8.36,8.36,0,0,0,97.18,101L48.85,73.06A8,8,0,0,0,37.92,76,104.12,104.12,0,0,0,25,142.68,4,4,0,0,0,30,146L93.22,129A3.94,3.94,0,0,0,96.1,125.49Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="128" y1="168" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="89.35" y1="138.36" x2="35.25" y2="152.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="128" y1="168" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="89.35" y1="138.36" x2="35.25" y2="152.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="128" y1="168" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M44.85,80A96,96,0,1,0,128,32V88a40,40,0,1,1-34.65,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="89.35" y1="138.36" x2="35.25" y2="152.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChartDonut = (props: any, ref: any)  => {
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


export default ChartDonut;
