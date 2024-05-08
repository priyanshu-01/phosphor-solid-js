/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M64,108V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="100" y1="68" x2="116" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,108a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M93,188.74l-4.88,34.13A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13L163,188.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M163.58,192.51h0a88.21,88.21,0,0,1-71.14,0h0l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13Z" opacity="0.2"/><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72Z" opacity="0.2"/><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="64" x2="112" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h16a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm136,64a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8,96.09,96.09,0,0,0,51.68,85.14l-3.52,24.6A16,16,0,0,0,96,240h64a16,16,0,0,0,15.84-18.26l-3.52-24.6A96.09,96.09,0,0,0,224,112ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="64" x2="112" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="64" x2="112" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="64" x2="112" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Toilet = (props: any, ref: any)  => {
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


export default Toilet;
