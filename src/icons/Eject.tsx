/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="110" y="94" width="36" height="176" rx="8" transform="translate(-54 310) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M42.32,110l73.76-76.93a16.53,16.53,0,0,1,23.84,0L213.68,110a8.27,8.27,0,0,1-6,14H48.27A8.27,8.27,0,0,1,42.32,110Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" opacity="0.2"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" opacity="0.2"/><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M33.31,126.24a15.59,15.59,0,0,1,3.1-17.12h0l73.73-77.51a24.76,24.76,0,0,1,35.72,0l73.73,77.51a15.59,15.59,0,0,1,3.1,17.12A16.18,16.18,0,0,1,207.76,136H48.24A16.18,16.18,0,0,1,33.31,126.24ZM208,152H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Eject = (props: any, ref: any)  => {
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


export default Eject;
