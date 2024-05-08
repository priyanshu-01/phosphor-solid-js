/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="24" y="136" width="208" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="184" x2="88" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M212,100s-18-7.6,0-38,0-38,0-38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M164,100s-18-7.6,0-38,0-38,0-38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M88,184V136H32a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8Z" opacity="0.2"/><rect x="24" y="136" width="208" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="184" x2="88" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,128H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128Zm0,48H96V144H224v32ZM201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.92a7.79,7.79,0,0,0,2.64,3.85,8,8,0,1,1-6.5,14.62,22.53,22.53,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-40,0c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.92a7.79,7.79,0,0,0,2.64,3.85,8,8,0,1,1-6.5,14.62,22.53,22.53,0,0,1-11.32-13.44C150.07,87.73,152.62,75,161,60.08Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="24" y="136" width="208" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="184" x2="88" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M208,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="24" y="136" width="208" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="184" x2="88" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M208,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="24" y="136" width="208" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="184" x2="88" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,104s-18-8,0-40,0-40,0-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cigarette = (props: any, ref: any)  => {
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


export default Cigarette;