/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" opacity="0.2"/><path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M235.76,138.83A16,16,0,0,1,224,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32a16,16,0,0,1-16-17.37,112.44,112.44,0,0,1,188.2-72.88A111.56,111.56,0,0,1,240,126.63,16.1,16.1,0,0,1,235.76,138.83Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M176,200a24,24,0,0,1-48,0V136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const UmbrellaSimple = (props: any, ref: any)  => {
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


export default UmbrellaSimple;
