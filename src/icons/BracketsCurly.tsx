/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M43.17529,128a29.7852,29.7852,0,0,1,8.023,10.25977C56,148.16309,56,160.28125,56,172c0,24.31348,1.01953,36,24,36a8,8,0,0,1,0,16c-17.48145,0-29.32422-6.14355-35.19824-18.25977C40,195.83691,40,183.71875,40,172c0-24.31348-1.01953-36-24-36a8,8,0,0,1,0-16c22.98047,0,24-11.68652,24-36,0-11.71875,0-23.83691,4.80176-33.74023C50.67578,38.14355,62.51855,32,80,32a8,8,0,0,1,0,16C57.01953,48,56,59.68652,56,84c0,11.71875,0,23.83691-4.80176,33.74023A29.7852,29.7852,0,0,1,43.17529,128ZM240,120c-22.98047,0-24-11.68652-24-36,0-11.71875,0-23.83691-4.80176-33.74023C205.32422,38.14355,193.48145,32,176,32a8,8,0,0,0,0,16c22.98047,0,24,11.68652,24,36,0,11.71875,0,23.83691,4.80176,33.74023A29.7852,29.7852,0,0,0,212.82471,128a29.7852,29.7852,0,0,0-8.023,10.25977C200,148.16309,200,160.28125,200,172c0,24.31348-1.01953,36-24,36a8,8,0,0,0,0,16c17.48145,0,29.32422-6.14355,35.19824-18.25977C216,195.83691,216,183.71875,216,172c0-24.31348,1.01953-36,24-36a8,8,0,0,0,0-16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
