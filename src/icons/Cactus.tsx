/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40Z" opacity="0.2"/><line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V136H80A64.07,64.07,0,0,1,16,72,24.07,24.07,0,0,1,40.08,48h.4A23.55,23.55,0,0,1,64,71.52V72h0A16,16,0,0,0,80,88h8V56a40,40,0,0,1,80,0v72h8a16,16,0,0,0,16-16h0v-.48A23.55,23.55,0,0,1,215.52,88h.4A24.07,24.07,0,0,1,240,112a64.07,64.07,0,0,1-64,64h-8v32h48A8,8,0,0,1,224,216Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="40" y1="216" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cactus = (props: any, ref: any)  => {
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


export default Cactus;
