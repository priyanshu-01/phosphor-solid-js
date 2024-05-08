/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M101.22,52A27.1,27.1,0,0,1,120,44a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M189.22,88A27.1,27.1,0,0,1,208,80a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M133.22,204A27.1,27.1,0,0,0,152,212a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="120" cy="72" r="24" opacity="0.2"/><circle cx="208" cy="104" r="24" opacity="0.2"/><circle cx="152" cy="184" r="24" opacity="0.2"/><path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Wind = (props: any, ref: any)  => {
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


export default Wind;
