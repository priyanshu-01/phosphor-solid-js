/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="128 100 128 128 156 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M87,73.76l7.83-43.19A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L169,73.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M87,182.24l7.83,43.19a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L169,182.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="72" opacity="0.2"/><circle cx="128" cy="128" r="72" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><path d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="128 88 128 128 168 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M175.3,63.53l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38a79.9,79.9,0,0,0,0-128.94ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0Zm50.64,192H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM168,136H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="128 88 128 128 168 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="128 88 128 128 168 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="72" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><path d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="128 88 128 128 168 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Watch = (props: any, ref: any)  => {
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


export default Watch;
