/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M24.8,148A44,44,0,1,0,108,168h84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M196,211.82a44,44,0,1,0-27.06-81.3L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M167.2,44a44,44,0,1,0-62.26,57.48L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="64" r="40" opacity="0.2"/><circle cx="192" cy="168" r="40" opacity="0.2"/><circle cx="64" cy="168" r="40" opacity="0.2"/><circle cx="192" cy="168" r="16"/><circle cx="128" cy="64" r="16"/><circle cx="64" cy="168" r="16"/><path d="M32,144a40,40,0,1,0,72,24h88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M50.15,160,89.07,92.57l-2.24-3.88a48,48,0,1,1,85.05-44.17,8.17,8.17,0,0,1-3.19,10.4,8,8,0,0,1-11.35-3.72,32,32,0,1,0-56.77,29.3.57.57,0,0,1,.08.13l13.83,23.94a8,8,0,0,1,0,8L77.86,176a16,16,0,0,1-27.71-16Zm141-40H178.81L141.86,56a16,16,0,0,0-27.71,16l34.64,60a8,8,0,0,0,6.92,4h35.63c17.89,0,32.95,14.64,32.66,32.53A32,32,0,0,1,192.31,200a8.23,8.23,0,0,0-8.28,7.33,8,8,0,0,0,8,8.67,48.05,48.05,0,0,0,48-48.93C239.49,140.79,217.48,120,191.19,120ZM208,167.23c-.4-8.61-7.82-15.23-16.43-15.23H114.81a8,8,0,0,0-6.93,4L91.72,184h0a32,32,0,1,1-53.47-35,8.2,8.2,0,0,0-.92-11,8,8,0,0,0-11.72,1.17A47.63,47.63,0,0,0,16,167.54,48,48,0,0,0,105.55,192v0l4.62-8H192A16,16,0,0,0,208,167.23Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="192" cy="168" r="14"/><circle cx="128" cy="64" r="14"/><circle cx="64" cy="168" r="14"/><path d="M32,144a40,40,0,1,0,72,24h88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="192" cy="168" r="12"/><circle cx="128" cy="64" r="12"/><circle cx="64" cy="168" r="12"/><path d="M32,144a40,40,0,1,0,72,24h88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="192" cy="168" r="16"/><circle cx="128" cy="64" r="16"/><circle cx="64" cy="168" r="16"/><path d="M32,144a40,40,0,1,0,72,24h88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WebhooksLogo = (props: any, ref: any)  => {
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


export default WebhooksLogo;
