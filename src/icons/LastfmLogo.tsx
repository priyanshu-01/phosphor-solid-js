/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M208,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72H208a24,24,0,0,1,24,24l8,64A32,32,0,0,1,208,192Z" opacity="0.2"/><path d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,184H172.61a40.09,40.09,0,0,1-36.42-23.45l-23-50.48A24,24,0,0,0,91.39,96H80a24,24,0,0,0-24,24v24a24,24,0,0,0,24,24h8a23.92,23.92,0,0,0,18.74-9,8,8,0,1,1,12.48,10A39.83,39.83,0,0,1,88,184H80a40,40,0,0,1-40-40V120A40,40,0,0,1,80,80H91.39a40.09,40.09,0,0,1,36.42,23.45l22.95,50.48A24,24,0,0,0,172.61,168H184a16,16,0,0,0,0-32h-8a28,28,0,0,1,0-56h12a20,20,0,0,1,20,20,8,8,0,0,1-16,0,4,4,0,0,0-4-4H176a12,12,0,0,0,0,24h8a32,32,0,0,1,0,64Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LastfmLogo = (props: any, ref: any)  => {
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


export default LastfmLogo;
