/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" opacity="0.2"/><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,93.17c0,41-29.69,52.47-53.55,61.67-8.41,3.24-16.35,6.3-22.21,10.28-11.39,7.72-18.59,21.78-25.55,35.38-9.94,19.42-20.23,39.5-43.17,39.5-12.91,0-24.61-11.64-33.85-33.66s-14.31-51-13.61-77.45c1.08-40.65,14.58-62.68,25.7-74,14.95-15.2,35.24-25.3,58.68-29.2,21.79-3.62,44.14-1.38,62.93,6.3C215.73,43.6,232,65.9,232,93.17Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PatreonLogo = (props: any, ref: any)  => {
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


export default PatreonLogo;
