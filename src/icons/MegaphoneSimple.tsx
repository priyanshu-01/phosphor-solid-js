/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M144,69.09,50.24,40.33A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.67L144,170.91Z" opacity="0.2"/><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM184,192H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.91L223.89,102l.11,0v36Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MegaphoneSimple = (props: any, ref: any)  => {
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


export default MegaphoneSimple;
