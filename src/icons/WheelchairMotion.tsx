/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="176" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M44,104.11a88,88,0,0,1,104-5.88L124,140h72l-16,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M151.85,176A52,52,0,1,1,92,120.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="176" cy="48" r="24" opacity="0.2"/><circle cx="176" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,168a56,56,0,1,1-56-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M144,48a32,32,0,1,1,32,32A32,32,0,0,1,144,48Zm16,112a8,8,0,0,0-8,8,48,48,0,1,1-48-48,8,8,0,0,0,0-16,64,64,0,1,0,64,64A8,8,0,0,0,160,160Zm40-32H141.82l17.12-29.78a8,8,0,0,0-2.57-10.69A96,96,0,0,0,42.91,94a8,8,0,1,0,10.18,12.33,80.09,80.09,0,0,1,88-9.17L121.06,132A8,8,0,0,0,128,144h62.24l-14.08,70.43a8,8,0,0,0,6.27,9.41A7.77,7.77,0,0,0,184,224a8,8,0,0,0,7.83-6.43l16-80A8,8,0,0,0,200,128Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="176" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,168a56,56,0,1,1-56-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="176" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,168a56,56,0,1,1-56-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="176" cy="48" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,168a56,56,0,1,1-56-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,100.11a88,88,0,0,1,104-5.88L128,136h72l-16,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WheelchairMotion = (props: any, ref: any)  => {
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


export default WheelchairMotion;
