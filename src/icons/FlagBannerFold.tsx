/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="101.09 160 28 160 68 116 28 72 141.09 72 101.09 160" opacity="0.2"/><polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M131.79,69.65l-43.63,96A4,4,0,0,1,84.52,168H28.23a8.2,8.2,0,0,1-6.58-3.13,8,8,0,0,1,.43-10.25L57.19,116,22.08,77.38a8,8,0,0,1-.43-10.26A8.22,8.22,0,0,1,28.23,64h99.92A4,4,0,0,1,131.79,69.65ZM237.56,42.24A8.3,8.3,0,0,0,231.77,40H168a8,8,0,0,0-7.28,4.69l-42.57,93.65a4,4,0,0,0,3.64,5.66h57.79l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,237.56,42.24Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FlagBannerFold = (props: any, ref: any)  => {
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


export default FlagBannerFold;
