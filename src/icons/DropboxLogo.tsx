/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="111.14 216.32 128 228 144.86 216.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="76 48 24 84 76 120 128 84 76 48" opacity="0.2"/><polygon points="180 48 128 84 180 120 232 84 180 48" opacity="0.2"/><polygon points="76 120 24 156 76 192 128 156 76 120" opacity="0.2"/><polygon points="180 120 128 156 180 192 232 156 180 120" opacity="0.2"/><polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104.11 211.46 128 228 151.89 211.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M188,120,128,80l55.56-37a8,8,0,0,1,8.88,0L238,73.34a8,8,0,0,1,0,13.32ZM72.44,43a8,8,0,0,0-8.88,0L18,73.34a8,8,0,0,0,0,13.32L68,120l60-40ZM238,153.34,188,120l-60,40,55.56,37a8,8,0,0,0,8.88,0L238,166.66A8,8,0,0,0,238,153.34Zm-220,0a8,8,0,0,0,0,13.32L63.56,197a8,8,0,0,0,8.88,0L128,160,68,120Zm150.61,52.95-38.37-25.58a4,4,0,0,0-4.44,0L87.41,206.29a4,4,0,0,0,0,6.65L123.56,237a8,8,0,0,0,8.88,0l36.15-24.1A4,4,0,0,0,168.59,206.29Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="104.11 211.46 128 228 151.89 211.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="104.11 211.46 128 228 151.89 211.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104.11 211.46 128 228 151.89 211.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DropboxLogo = (props: any, ref: any)  => {
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


export default DropboxLogo;
