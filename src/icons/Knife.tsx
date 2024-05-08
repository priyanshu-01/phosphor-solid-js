/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M146,90l52.2-52.2a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118Z" opacity="0.2"/><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M236,49a25,25,0,0,0-42.63-17.66L143.16,81.54,18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.91-10.2,96.94-30.23,31.76-20.5,50.19-43.82,51-44.8a8,8,0,0,0-.64-10.59L181.31,114l47.38-47.39A24.84,24.84,0,0,0,236,49ZM146.23,180.6c-34.43,22.1-69.94,30.92-105.76,26.3L146,101.34l43.09,43.1A220.09,220.09,0,0,1,146.23,180.6Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Knife = (props: any, ref: any)  => {
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


export default Knife;
