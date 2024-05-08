/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0C208,144,193.56,176,160,216Z" opacity="0.2"/><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm20,128a4.21,4.21,0,0,0,1.33-.22,8,8,0,0,1,5.34,15.08A20,20,0,0,1,128,148c0-8.85,4.77-15.23,9-20.87,3.77-5,7-9.38,7-15.13a16,16,0,0,0-32,0,8,8,0,0,1-16,0,32,32,0,0,1,64,0c0,11.07-5.66,18.63-10.2,24.71-3.6,4.81-5.8,7.93-5.8,11.29A4,4,0,0,0,148,152Zm36-32a8,8,0,0,1-8-8,48,48,0,0,0-96,0c0,11.9,6.71,20.5,13.82,29.6,7,8.92,14.18,18.15,14.18,30.4a20,20,0,0,0,34,14.29,8,8,0,1,1,11.19,11.42A36,36,0,0,1,92,172c0-6.74-5-13.14-10.79-20.55C73.54,141.63,64,129.41,64,112a64,64,0,0,1,128,0A8,8,0,0,1,184,120Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Ear = (props: any, ref: any)  => {
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


export default Ear;
