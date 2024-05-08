/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" opacity="0.2"/><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M200,112H149l56.27,50A8,8,0,0,1,200,176H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,168V104a8,8,0,0,1,8-8h51L50.69,46A8,8,0,0,1,56,32H200a8,8,0,0,1,8,8v64A8,8,0,0,1,200,112Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FramerLogo = (props: any, ref: any)  => {
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


export default FramerLogo;
