/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M152,12a48,48,0,0,0-47.34,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,52h4a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128.15,92h40a8,8,0,0,1,8,7.63c2.37,51.77,28,100,37.56,116.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M39.69,216C53,189.23,70.12,146.16,71.86,99.64a8,8,0,0,1,8-7.64h48.3a8,8,0,0,1,8,7.64c1.74,46.52,18.9,89.59,32.17,116.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36Z" opacity="0.2"/><path d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,8h-8a48,48,0,0,0-48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM104,64a8,8,0,0,0,8-8,40,40,0,0,1,40-40h8a8,8,0,0,0,0-16h-8A56.06,56.06,0,0,0,96,56,8,8,0,0,0,104,64ZM248,216a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32.74c13.77-27.83,29.48-68.69,31.12-112.66A15.91,15.91,0,0,1,79.85,80h88.33a16,16,0,0,1,16,15.28c2.1,47.84,23.84,92.37,35.29,112.72H240A8,8,0,0,1,248,216ZM168.18,96h-16c1.77,43.72,17.39,84.32,31.09,112h18C188.68,184.08,170.18,141.64,168.18,96Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,8h-8a48,48,0,0,0-48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,8h-8a48,48,0,0,0-48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,8h-8a48,48,0,0,0-48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NuclearPlant = (props: any, ref: any)  => {
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


export default NuclearPlant;
