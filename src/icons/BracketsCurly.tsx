/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M176,216c64,0,0-88,64-88-64,0,0-88-64-88H80c-64,0,0,88-64,88,64,0,0,88,64,88Z" opacity="0.2"/><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,155.84c.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16c-31.27,0-31.72-22.43-32-35.84C71.71,141.9,71.59,136,56,136a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16C72.28,86.43,72.73,64,104,64a8,8,0,0,1,0,16c-15.59,0-15.71,5.9-16,20.16-.17,8.31-.41,20.09-8,27.84C87.59,135.75,87.83,147.53,88,155.84ZM200,136c-15.59,0-15.71,5.9-16,20.16-.28,13.41-.73,35.84-32,35.84a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16.17-8.31.41-20.09,8-27.84-7.6-7.75-7.84-19.53-8-27.84C167.71,85.9,167.59,80,152,80a8,8,0,0,1,0-16c31.27,0,31.72,22.43,32,35.84.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BracketsCurly = (props: any, ref: any)  => {
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


export default BracketsCurly;
