/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56Z" opacity="0.2"/><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43Zm-12.68,48.88A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Onigiri = (props: any, ref: any)  => {
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


export default Onigiri;
