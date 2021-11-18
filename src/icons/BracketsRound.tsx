/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M72,40S32,64,32,128s40,88,40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M184,40s40,24,40,88-40,88-40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M72,40S32,64,32,128s40,88,40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,40s40,24,40,88-40,88-40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M40,128c0,58.28906,34.6748,80.25488,36.15088,81.16113a8.00025,8.00025,0,0,1-8.26709,13.69922C66.09229,221.78516,24,195.751,24,128S66.09229,34.21484,67.88379,33.13965a8,8,0,0,1,8.2583,13.7041C74.544,47.8291,40,69.82129,40,128ZM188.11621,33.13965a8.00032,8.00032,0,0,0-8.26709,13.69922C181.3252,47.74512,216,69.71094,216,128s-34.6748,80.25488-36.11621,81.13965a8.00047,8.00047,0,1,0,8.23242,13.7207C189.90771,221.78516,232,195.751,232,128S189.90771,34.21484,188.11621,33.13965Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M72,40S32,64,32,128s40,88,40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M184,40s40,24,40,88-40,88-40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M72,40S32,64,32,128s40,88,40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M184,40s40,24,40,88-40,88-40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M72,40S32,64,32,128s40,88,40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,40s40,24,40,88-40,88-40,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BracketsRound = (props: any, ref: any)  => {
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


export default BracketsRound;
