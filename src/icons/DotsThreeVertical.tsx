/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="60" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="128" cy="196" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="80" y="16" width="96" height="224" rx="16" opacity="0.2"/><circle cx="128" cy="128" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="128" cy="196" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M160,16H96A16,16,0,0,0,80,32V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V32A16,16,0,0,0,160,16ZM128,208a12,12,0,1,1,12-12A12,12,0,0,1,128,208Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="60" r="10"/><circle cx="128" cy="128" r="10"/><circle cx="128" cy="196" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="60" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="128" cy="196" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="128" cy="196" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsThreeVertical = (props: any, ref: any)  => {
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


export default DotsThreeVertical;
