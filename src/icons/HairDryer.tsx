/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="168" cy="88" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M152,208v4a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M168,32,30.68,54.89A8,8,0,0,0,24,62.78v50.44a8,8,0,0,0,6.68,7.89L168,144a56,56,0,0,0,0-112Zm0,80a24,24,0,1,1,24-24A24,24,0,0,1,168,112Z" opacity="0.2"/><circle cx="168" cy="88" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,208v8a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M177.42,206.62,209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM192,88a24,24,0,1,1-24-24A24,24,0,0,1,192,88Zm-25.32,63.89A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="168" cy="88" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M152,208v8a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="168" cy="88" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M152,208v8a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="168" cy="88" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,113.22V62.78a8,8,0,0,1,6.68-7.89L168,32a56,56,0,0,1,0,112L30.68,121.11A8,8,0,0,1,24,113.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,208v8a32,32,0,0,0,32,32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.49,132.12l-32.36,71.19a8,8,0,0,1-7.28,4.69H144a8,8,0,0,1-8-8V138.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HairDryer = (props: any, ref: any)  => {
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


export default HairDryer;
