/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="112 168 128 128 96 128 112 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="32" y1="216" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,112h24a16,16,0,0,1,16,16v38a18,18,0,0,0,18,18h0a18,18,0,0,0,18-18V86.63a16,16,0,0,0-4.69-11.32L220,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216Z" opacity="0.2"/><polyline points="112 168 128 128 96 128 112 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="216" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.63a16,16,0,0,0-4.69-11.32L216,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM135.43,131l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128a8,8,0,0,1,7.43,11Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="112 168 128 128 96 128 112 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="32" y1="216" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.63a16,16,0,0,0-4.69-11.32L216,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="112 168 128 128 96 128 112 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="32" y1="216" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.63a16,16,0,0,0-4.69-11.32L216,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="112 168 128 128 96 128 112 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="216" x2="192" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.63a16,16,0,0,0-4.69-11.32L216,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChargingStation = (props: any, ref: any)  => {
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


export default ChargingStation;
