/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M88,136c0-72,40-104,40-104A104.21,104.21,0,0,0,24,127.29,8,8,0,0,0,32,136Z" opacity="0.2"/><path d="M128,32s40,32,40,104h56a8,8,0,0,0,8-8.71A104.21,104.21,0,0,0,128,32Z" opacity="0.2"/><path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M240,126.63A112.21,112.21,0,0,0,128,24h0A112.21,112.21,0,0,0,16.05,126.63,16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128H32Zm143.83,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Umbrella = (props: any, ref: any)  => {
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


export default Umbrella;
