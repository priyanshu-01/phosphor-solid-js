/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="244" y1="144" x2="244" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="192" y1="44.69" x2="60.69" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H244" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M15,158.93A10,10,0,0,0,22,176H60.69l29.65,29.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M52.69,168l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32L184,36.69Z" opacity="0.2"/><line x1="248" y1="144" x2="248" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="184" y1="36.69" x2="52.69" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M248,136a8,8,0,0,0-8,8v16H195.31L177,141.66l50.34-50.35a16,16,0,0,0,0-22.62L189.66,31h0L171.31,12.69a16,16,0,0,0-22.63,0L2.92,158.94A10,10,0,0,0,10,176H49.37l35.32,35.31a16,16,0,0,0,22.62,0L165.66,153,184,171.31A15.86,15.86,0,0,0,195.31,176H240v16a8,8,0,0,0,16,0V144A8,8,0,0,0,248,136ZM160,24l12.69,12.69L49.37,160H24.46Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="248" y1="144" x2="248" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="184" y1="36.69" x2="52.69" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="248" y1="144" x2="248" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="184" y1="36.69" x2="52.69" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="248" y1="144" x2="248" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="184" y1="36.69" x2="52.69" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SecurityCamera = (props: any, ref: any)  => {
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


export default SecurityCamera;
