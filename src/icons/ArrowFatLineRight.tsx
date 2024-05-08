/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" opacity="0.2"/><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M132.94,231.39A8,8,0,0,1,128,224V184H72a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h56V32a8,8,0,0,1,13.66-5.66l96,96a8,8,0,0,1,0,11.32l-96,96A8,8,0,0,1,132.94,231.39ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="176" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowFatLineRight = (props: any, ref: any)  => {
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


export default ArrowFatLineRight;
