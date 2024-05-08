/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="232 216 196 144 160 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="200" x2="168" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" opacity="0.2"/><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="232 216 196 144 160 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="220" y1="192" x2="172" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M173.87,118.58,78.67,221.43A8,8,0,0,1,65,214.15l13.67-57.56-50-22.44a8,8,0,0,1-2.59-12.73l95.2-102.85A8,8,0,0,1,135,25.85L121.31,83.41l50,22.43a8,8,0,0,1,2.59,12.74Zm61.71,104.57A7.91,7.91,0,0,1,232,224a8,8,0,0,1-7.16-4.42L215.05,200H176.94l-9.79,19.58a8,8,0,0,1-14.31-7.16l36-72a8,8,0,0,1,14.31,0l36,72A8,8,0,0,1,235.58,223.15ZM207.05,184,196,161.89,184.94,184Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="232 216 196 144 160 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="220" y1="192" x2="172" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="232 216 196 144 160 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="220" y1="192" x2="172" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="232 216 196 144 160 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="220" y1="192" x2="172" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LightningA = (props: any, ref: any)  => {
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


export default LightningA;
