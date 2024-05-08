/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="134.87" x2="223.41" y2="32.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M80,134.87,223.41,32.09a1,1,0,0,0-.78,0L20,111.38A6.23,6.23,0,0,0,21,123.3l59,11.57" opacity="0.2"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87Z" opacity="0.2"/><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="134.87" x2="223.41" y2="32.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM175.53,208,92.85,135.5l119-85.29Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="80" y1="134.87" x2="223.41" y2="32.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="80" y1="134.87" x2="223.41" y2="32.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="134.87" x2="223.41" y2="32.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TelegramLogo = (props: any, ref: any)  => {
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


export default TelegramLogo;
