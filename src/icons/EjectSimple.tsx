/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" opacity="0.2"/><line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM40.09,160H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,32.94a24.11,24.11,0,0,0-37.48,0L27.61,133.77A16.1,16.1,0,0,0,40.09,160Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const EjectSimple = (props: any, ref: any)  => {
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


export default EjectSimple;
