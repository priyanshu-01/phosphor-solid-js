/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="92 108 92 61.09 32 72 32 108 92 108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="208 108 208 40 132 53.82 132 108 208 108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="92 148 92 194.91 32 184 32 148 92 148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="208 148 208 216 132 202.18 132 148 208 148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="208 216 128 201.46 128 201.46 128 144 208 144 208 216" opacity="0.2"/><polygon points="96 195.64 32 184 32 144 96 144 96 195.64" opacity="0.2"/><polygon points="208 40 128 54.55 128 54.55 128 112 208 112 208 40" opacity="0.2"/><polygon points="96 60.36 32 72 32 112 96 112 96 60.36" opacity="0.2"/><polygon points="208 216 128 201.46 128 201.46 128 144 208 144 208 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="96 195.64 32 184 32 144 96 144 96 195.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="208 40 128 54.55 128 54.55 128 112 208 112 208 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="96 60.36 32 72 32 112 96 112 96 60.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="208 216 128 201.46 128 201.46 128 144 208 144 208 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="96 195.64 32 184 32 144 96 144 96 195.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="208 40 128 54.55 128 54.55 128 112 208 112 208 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="96 60.36 32 72 32 112 96 112 96 60.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="208 216 128 201.46 128 201.46 128 144 208 144 208 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="96 195.64 32 184 32 144 96 144 96 195.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="208 40 128 54.55 128 54.55 128 112 208 112 208 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="96 60.36 32 72 32 112 96 112 96 60.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="208 216 128 201.46 128 201.46 128 144 208 144 208 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="96 195.64 32 184 32 144 96 144 96 195.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="208 40 128 54.55 128 54.55 128 112 208 112 208 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="96 60.36 32 72 32 112 96 112 96 60.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WindowsLogo = (props: any, ref: any)  => {
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


export default WindowsLogo;
