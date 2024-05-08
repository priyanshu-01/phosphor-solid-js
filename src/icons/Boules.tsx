/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="161.86" y1="38.14" x2="38.14" y2="161.86" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="195.88" y1="60.12" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="217.86" y1="94.14" x2="94.14" y2="217.86" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="167.52" y1="40.48" x2="40.48" y2="167.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="195.88" y1="60.12" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="215.52" y1="88.48" x2="88.48" y2="215.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M167.52,40.48a96.47,96.47,0,0,1,48,48l-127,127a96.47,96.47,0,0,1-48-48Z" opacity="0.2"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,128c0,56.63-47.38,104-104,104a103.67,103.67,0,0,1-31.52-4.89,4,4,0,0,1-1.62-6.65L220.46,94.85a4,4,0,0,1,6.65,1.62A103.69,103.69,0,0,1,232,128ZM215.84,72.39a103.16,103.16,0,0,0-6.06-8.56,4,4,0,0,0-6-.33L63.5,203.82a4,4,0,0,0,.33,6,103.16,103.16,0,0,0,8.56,6.06,4,4,0,0,0,5-.54L215.3,77.39A4,4,0,0,0,215.84,72.39ZM192.17,46.22a103.16,103.16,0,0,0-8.56-6.06,4,4,0,0,0-5,.54L40.7,178.62a4,4,0,0,0-.54,5,103.16,103.16,0,0,0,6.06,8.56,4,4,0,0,0,6,.33L192.5,52.18A4,4,0,0,0,192.17,46.22ZM159.53,28.89A103.67,103.67,0,0,0,128,24C71.38,24,24,71.37,24,128a103.69,103.69,0,0,0,4.89,31.53,4,4,0,0,0,6.65,1.62L161.15,35.54A4,4,0,0,0,159.53,28.89Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="167.52" y1="40.48" x2="40.48" y2="167.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="195.88" y1="60.12" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="215.52" y1="88.48" x2="88.48" y2="215.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="167.52" y1="40.48" x2="40.48" y2="167.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="195.88" y1="60.12" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="215.52" y1="88.48" x2="88.48" y2="215.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="167.52" y1="40.48" x2="40.48" y2="167.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="195.88" y1="60.12" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="215.52" y1="88.48" x2="88.48" y2="215.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Boules = (props: any, ref: any)  => {
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


export default Boules;
