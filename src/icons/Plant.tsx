/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M142.54,153.46C110.62,100.25,153.18,47.05,243.63,52.37,249,142.82,195.75,185.38,142.54,153.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88.47,164.47c22.8-38-7.6-76-72.21-72.21C12.46,156.87,50.47,187.27,88.47,164.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="140" x2="124" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,104l-49.25,49.25A64,64,0,0,0,124,198.51V228" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" opacity="0.2"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" opacity="0.2"/><path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M205.41,159.07a60.9,60.9,0,0,1-31.83,8.86,71.71,71.71,0,0,1-27.36-5.66A55.55,55.55,0,0,0,136,194.51V224a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.25V211.31L81.38,172.69A52.5,52.5,0,0,1,63.44,176a45.82,45.82,0,0,1-23.92-6.67C17.73,156.09,6,125.62,8.27,87.79a8,8,0,0,1,7.52-7.52c37.83-2.23,68.3,9.46,81.5,31.25A46,46,0,0,1,103.74,140a4,4,0,0,1-6.89,2.43l-19.2-20.1a8,8,0,0,0-11.31,11.31l53.88,55.25c.06-.78.13-1.56.21-2.33a68.56,68.56,0,0,1,18.64-39.46l50.59-53.46a8,8,0,0,0-11.31-11.32l-49,51.82a4,4,0,0,1-6.78-1.74c-4.74-17.48-2.65-34.88,6.4-49.82,17.86-29.48,59.42-45.26,111.18-42.22a8,8,0,0,1,7.52,7.52C250.67,99.65,234.89,141.21,205.41,159.07Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Plant = (props: any, ref: any)  => {
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


export default Plant;
