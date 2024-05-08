/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M40,73.61c72-59.69,104,56.47,176-3.22v112c-72,59.69-104-56.47-176,3.22Z" opacity="0.2"/><path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM197.2,176.87c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31a8,8,0,1,1-10.4-12.16c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,0,1,10.4,12.16Zm0-44c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31a8,8,0,0,1-10.4-12.16c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,1,1,10.4,12.16Zm0-44c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31A8,8,0,0,1,58.8,79.13c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,1,1,10.4,12.16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M40,185.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Waves = (props: any, ref: any)  => {
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


export default Waves;
