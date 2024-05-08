/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" opacity="0.2"/><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Octagon = (props: any, ref: any)  => {
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


export default Octagon;
