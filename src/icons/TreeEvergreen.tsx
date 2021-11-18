/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="192" x2="128" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" opacity="0.2"/>
  <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="192" x2="128" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M231.18652,195.51465A7.9997,7.9997,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a7.99958,7.99958,0,0,1-6.31445-12.91113L71.64258,128H48a8.00019,8.00019,0,0,1-6.34082-12.87793l80-104a8,8,0,0,1,12.68164,0l80,104A8.00019,8.00019,0,0,1,208,128H184.35742l45.957,59.08887A7.99813,7.99813,0,0,1,231.18652,195.51465Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="192" x2="128" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="192" x2="128" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="192" x2="128" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TreeEvergreen = (props: any, ref: any)  => {
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


export default TreeEvergreen;
