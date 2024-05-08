/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" opacity="0.2"/><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M231.26,105.19l-32,107.54-.06.17A15.94,15.94,0,0,1,184,224H72A15.94,15.94,0,0,1,56.8,212.9l-.06-.17-32-107.54a16,16,0,0,1,5.7-17.63l87.92-68.31.18-.14a15.93,15.93,0,0,1,18.92,0l.18.14,87.92,68.31A16,16,0,0,1,231.26,105.19Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Pentagon = (props: any, ref: any)  => {
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


export default Pentagon;
