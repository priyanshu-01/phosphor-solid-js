/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M79.26,45.27a96.4,96.4,0,0,1,68.68-11.2,191.91,191.91,0,0,1,13.29,59.29A191.07,191.07,0,0,0,79.26,45.27Z" opacity="0.2"/><path d="M210.73,176.73a191,191,0,0,0-48.09-82,192.2,192.2,0,0,1,59.29,13.29,96.37,96.37,0,0,1-11.2,68.67Z" opacity="0.2"/><path d="M161.31,94.69a191.56,191.56,0,0,1-40.5,129,96,96,0,0,1-88.54-88.54A191.56,191.56,0,0,1,161.31,94.69Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm83.44,76A195.88,195.88,0,0,0,165,91,195.88,195.88,0,0,0,156,44.56,88.43,88.43,0,0,1,211.44,100ZM85,51.24a188.27,188.27,0,0,1,67.3,39.21A196.29,196.29,0,0,0,40.08,124.51,88.07,88.07,0,0,1,85,51.24Zm46.48,164.68a196.29,196.29,0,0,0,34.06-112.23A188.27,188.27,0,0,1,204.76,171,88.07,88.07,0,0,1,131.49,215.92Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BeachBall = (props: any, ref: any)  => {
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


export default BeachBall;
