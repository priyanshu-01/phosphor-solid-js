/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" opacity="0.2"/><path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-72a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm48,72a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Tote = (props: any, ref: any)  => {
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


export default Tote;
