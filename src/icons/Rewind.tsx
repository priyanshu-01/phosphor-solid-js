/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M18.468,121.27057,107.67394,63.9239A8,8,0,0,1,120,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L18.468,134.72943A8,8,0,0,1,18.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z" opacity="0.2"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" opacity="0.2"/>
  <path d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M10.1416,114.541,99.34766,57.19434A16.00057,16.00057,0,0,1,124,70.65332v42.69287l87.34766-56.15185A16.00057,16.00057,0,0,1,236,70.65332V185.34668a15.99914,15.99914,0,0,1-24.65234,13.459L124,142.65381v42.69287a15.99914,15.99914,0,0,1-24.65234,13.459L10.1416,141.459a16.0005,16.0005,0,0,1,0-26.918Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Rewind = (props: any, ref: any)  => {
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


export default Rewind;
