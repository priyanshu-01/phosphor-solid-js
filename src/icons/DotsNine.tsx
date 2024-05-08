/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="60" cy="60" r="16"/><circle cx="128" cy="60" r="16"/><circle cx="196" cy="60" r="16"/><circle cx="60" cy="128" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="196" cy="128" r="16"/><circle cx="60" cy="196" r="16"/><circle cx="128" cy="196" r="16"/><circle cx="196" cy="196" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2"/><circle cx="60" cy="60" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="196" cy="60" r="12"/><circle cx="60" cy="128" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="196" cy="128" r="12"/><circle cx="60" cy="196" r="12"/><circle cx="128" cy="196" r="12"/><circle cx="196" cy="196" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="60" cy="60" r="10"/><circle cx="128" cy="60" r="10"/><circle cx="196" cy="60" r="10"/><circle cx="60" cy="128" r="10"/><circle cx="128" cy="128" r="10"/><circle cx="196" cy="128" r="10"/><circle cx="60" cy="196" r="10"/><circle cx="128" cy="196" r="10"/><circle cx="196" cy="196" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="60" cy="60" r="8"/><circle cx="128" cy="60" r="8"/><circle cx="196" cy="60" r="8"/><circle cx="60" cy="128" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="196" cy="128" r="8"/><circle cx="60" cy="196" r="8"/><circle cx="128" cy="196" r="8"/><circle cx="196" cy="196" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="60" cy="60" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="196" cy="60" r="12"/><circle cx="60" cy="128" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="196" cy="128" r="12"/><circle cx="60" cy="196" r="12"/><circle cx="128" cy="196" r="12"/><circle cx="196" cy="196" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsNine = (props: any, ref: any)  => {
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


export default DotsNine;
