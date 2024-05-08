/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,88,184,40a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,88v16a28,28,0,0,0,56,0V88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M84,192V180a28,28,0,0,1,56,0v12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M184,40,24,88v24h8a24,24,0,0,1,24,23.54C56.25,149,44.91,160,31.46,160H24v32H80v-8a32,32,0,0,1,64,0v8h80a8,8,0,0,0,8-8V88A48,48,0,0,0,184,40Zm-16,96a32,32,0,0,1-27.72-48h55.44A32,32,0,0,1,168,136Z" opacity="0.2"/><path d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,88,184,40a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,192v-8a32,32,0,0,1,64,0v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M195.72,88a32,32,0,1,1-55.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v16a8,8,0,0,0,8,8h7.46c13.45,0,24.79,11,24.54,24.46A24,24,0,0,1,32,160H24a8,8,0,0,0-8,8v24a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32ZM80,184a32,32,0,0,1,64,0Zm88-48a32,32,0,0,1-31-40h62a32,32,0,0,1-31,40ZM78.51,80,185.12,48a40.06,40.06,0,0,1,38.07,32Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M24,88,184,40a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,192v-8a32,32,0,0,1,64,0v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M195.72,88a32,32,0,1,1-55.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M24,88,184,40a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M80,192v-8a32,32,0,0,1,64,0v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M195.72,88a32,32,0,1,1-55.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,88,184,40a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,192v-8a32,32,0,0,1,64,0v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M195.72,88a32,32,0,1,1-55.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cheese = (props: any, ref: any)  => {
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


export default Cheese;
