/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M156,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,204,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M92,176V160a20,20,0,0,1,7.74-15.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M52,176V160a60,60,0,0,1,90.83-51.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M12,176V160A100,100,0,0,1,177.59,84.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M152,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,200,200Z" opacity="0.2"/><path d="M152,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,200,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,176V160A96,96,0,0,1,178.93,91.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,176V160a64,64,0,0,1,101.87-51.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,176V160a32,32,0,0,1,39.42-31.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M248,160a48.05,48.05,0,0,1-48,48H152c-17.65,0-32-14.75-32-32.89s14.35-32.89,32-32.89a31,31,0,0,1,3.34.18A48,48,0,0,1,248,160ZM112,72a87.57,87.57,0,0,1,61.35,24.91A8,8,0,0,0,184.5,85.44,104,104,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.1,88.1,0,0,1,112,72Zm0,32a55.58,55.58,0,0,1,33.13,10.84A8,8,0,1,0,154.6,102,72,72,0,0,0,40,160v16a8,8,0,0,0,16,0V160A56.06,56.06,0,0,1,112,104Zm15.21,26.71a8,8,0,0,0-5.94-9.63A40,40,0,0,0,72,160v16a8,8,0,0,0,16,0V160a24,24,0,0,1,29.57-23.35A8,8,0,0,0,127.21,130.71Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M152,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,200,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M16,176V160A96,96,0,0,1,178.93,91.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,176V160a64,64,0,0,1,101.87-51.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,176V160a32,32,0,0,1,39.42-31.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M152,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,200,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M16,176V160A96,96,0,0,1,178.93,91.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M48,176V160a64,64,0,0,1,101.87-51.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M80,176V160a32,32,0,0,1,39.42-31.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M152,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,200,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,176V160A96,96,0,0,1,178.93,91.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,176V160a64,64,0,0,1,101.87-51.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,176V160a32,32,0,0,1,39.42-31.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const RainbowCloud = (props: any, ref: any)  => {
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


export default RainbowCloud;
