/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" opacity="0.2"/><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TagSimple = (props: any, ref: any)  => {
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


export default TagSimple;
