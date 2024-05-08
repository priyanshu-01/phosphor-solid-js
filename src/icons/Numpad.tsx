/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="64" cy="48" r="20"/><circle cx="128" cy="48" r="20"/><circle cx="192" cy="48" r="20"/><circle cx="64" cy="104" r="20"/><circle cx="128" cy="104" r="20"/><circle cx="192" cy="104" r="20"/><circle cx="64" cy="160" r="20"/><circle cx="128" cy="160" r="20"/><circle cx="128" cy="216" r="20"/><circle cx="192" cy="160" r="20"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M64,48H192a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48A0,0,0,0,1,64,48Z" opacity="0.2"/><circle cx="64" cy="48" r="16"/><circle cx="128" cy="48" r="16"/><circle cx="192" cy="48" r="16"/><circle cx="64" cy="104" r="16"/><circle cx="128" cy="104" r="16"/><circle cx="192" cy="104" r="16"/><circle cx="64" cy="160" r="16"/><circle cx="128" cy="160" r="16"/><circle cx="128" cy="216" r="16"/><circle cx="192" cy="160" r="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM80,164a12,12,0,1,1,12-12A12,12,0,0,1,80,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,80,124Zm0-40A12,12,0,1,1,92,72,12,12,0,0,1,80,84Zm48,120a12,12,0,1,1,12-12A12,12,0,0,1,128,204Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,84Zm48,80a12,12,0,1,1,12-12A12,12,0,0,1,176,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,84Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="64" cy="48" r="14"/><circle cx="128" cy="48" r="14"/><circle cx="192" cy="48" r="14"/><circle cx="64" cy="104" r="14"/><circle cx="128" cy="104" r="14"/><circle cx="192" cy="104" r="14"/><circle cx="64" cy="160" r="14"/><circle cx="128" cy="160" r="14"/><circle cx="128" cy="216" r="14"/><circle cx="192" cy="160" r="14"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="64" cy="48" r="12"/><circle cx="128" cy="48" r="12"/><circle cx="192" cy="48" r="12"/><circle cx="64" cy="104" r="12"/><circle cx="128" cy="104" r="12"/><circle cx="192" cy="104" r="12"/><circle cx="64" cy="160" r="12"/><circle cx="128" cy="160" r="12"/><circle cx="128" cy="216" r="12"/><circle cx="192" cy="160" r="12"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="64" cy="48" r="16"/><circle cx="128" cy="48" r="16"/><circle cx="192" cy="48" r="16"/><circle cx="64" cy="104" r="16"/><circle cx="128" cy="104" r="16"/><circle cx="192" cy="104" r="16"/><circle cx="64" cy="160" r="16"/><circle cx="128" cy="160" r="16"/><circle cx="128" cy="216" r="16"/><circle cx="192" cy="160" r="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Numpad = (props: any, ref: any)  => {
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


export default Numpad;
