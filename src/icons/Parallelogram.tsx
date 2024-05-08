/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" opacity="0.2"/><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Parallelogram = (props: any, ref: any)  => {
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


export default Parallelogram;
