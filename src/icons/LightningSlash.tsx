/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="119.59 59.29 160 16 148 96 208 120 191.17 138.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="163.79 167.37 96 240 108 160 48 136 92.21 88.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" opacity="0.2"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M105.72,67.81a4,4,0,0,1,0-5.42l48.39-51.85a8,8,0,0,1,13.7,7L153.18,90.9l57.43,21.53a8.24,8.24,0,0,1,4.22,3.4,8,8,0,0,1-1,9.63l-25.27,27.07a4,4,0,0,1-5.88,0Zm27.76,54.32L53.92,34.62A8,8,0,1,0,42.08,45.38L81.34,88.56l-39,41.83A8.15,8.15,0,0,0,40,135.31a8,8,0,0,0,5.16,8.18l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LightningSlash = (props: any, ref: any)  => {
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


export default LightningSlash;
