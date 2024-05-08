/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="92" cy="108" r="16"/><circle cx="164" cy="108" r="16"/><path d="M86.72,165.81C92.65,161.43,94.79,152,104,152c12,0,12,16,24,16s12-16,24-16c9.21,0,11.35,9.43,17.28,13.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="92" cy="108" r="12"/><circle cx="164" cy="108" r="12"/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84,80c-10,0-15.05-6.74-18.4-11.2-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C143.05,169.26,138,176,128,176s-15-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C95.05,169.26,90,176,80,176a8,8,0,0,1,0-16c1.68,0,2.57-.76,5.6-4.8C89,150.74,94,144,104,144s15,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8s2.57-.76,5.6-4.8C137,150.74,142,144,152,144s15.05,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="92" cy="108" r="10"/><circle cx="164" cy="108" r="10"/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="92" cy="108" r="8"/><circle cx="164" cy="108" r="8"/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="92" cy="108" r="12"/><circle cx="164" cy="108" r="12"/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SmileyNervous = (props: any, ref: any)  => {
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


export default SmileyNervous;
