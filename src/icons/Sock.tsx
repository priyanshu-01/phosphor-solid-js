/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="64" x2="96" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,112a48,48,0,0,0-37.71,77.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M200,145.37V112a48,48,0,0,0-37.71,77.71l33-33A16,16,0,0,0,200,145.37Z" opacity="0.2"/><path d="M96,32a8,8,0,0,1,8-8h88a8,8,0,0,1,8,8V56H96Z" opacity="0.2"/><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="56" x2="96" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,112a48,48,0,0,0-37.71,77.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="200" y1="56" x2="96" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M200,112a48,48,0,0,0-37.71,77.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="200" y1="56" x2="96" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M200,112a48,48,0,0,0-37.71,77.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="56" x2="96" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,112a48,48,0,0,0-37.71,77.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Sock = (props: any, ref: any)  => {
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


export default Sock;
