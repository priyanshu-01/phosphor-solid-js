/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M136,120l-24,24V64.52L66.34,109.66A8,8,0,0,0,64,115.31V192h76.69a8,8,0,0,0,5.65-2.34L215.6,119.6Z" opacity="0.2"/><line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M211.84,134.81l-59.79,60.47,0,0a15.75,15.75,0,0,1-11.2,4.68H75.32L45.66,229.66a8,8,0,0,1-11.32-11.32l22.59-22.58h0L124.7,128H209A4,4,0,0,1,211.84,134.81ZM216.7,30.57a64,64,0,0,0-85.9,4.14l-9.6,9.48A4,4,0,0,0,120,47v63l55-55a8,8,0,0,1,11.31,11.31L140.71,112h88.38a4,4,0,0,0,3.56-2.16A64.08,64.08,0,0,0,216.7,30.57ZM62.83,167.23,104,126.06V70.76a4,4,0,0,0-6.81-2.84L60.69,104A15.9,15.9,0,0,0,56,115.31V164.4A4,4,0,0,0,62.83,167.23Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Feather = (props: any, ref: any)  => {
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


export default Feather;
