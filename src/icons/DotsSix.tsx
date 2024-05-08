/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="60" cy="92" r="16"/><circle cx="128" cy="92" r="16"/><circle cx="196" cy="92" r="16"/><circle cx="60" cy="164" r="16"/><circle cx="128" cy="164" r="16"/><circle cx="196" cy="164" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="16" y="48" width="224" height="160" rx="16" opacity="0.2"/><circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="60" cy="92" r="10"/><circle cx="128" cy="92" r="10"/><circle cx="196" cy="92" r="10"/><circle cx="60" cy="164" r="10"/><circle cx="128" cy="164" r="10"/><circle cx="196" cy="164" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="60" cy="92" r="8"/><circle cx="128" cy="92" r="8"/><circle cx="196" cy="92" r="8"/><circle cx="60" cy="164" r="8"/><circle cx="128" cy="164" r="8"/><circle cx="196" cy="164" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsSix = (props: any, ref: any)  => {
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


export default DotsSix;
