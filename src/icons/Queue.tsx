/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="128" x2="136" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="192" x2="136" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="240 160 176 200 176 120 240 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="240 160 176 200 176 120 240 160" opacity="0.2"/>
  <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="128" x2="136" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="192" x2="136" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="240 160 176 200 176 120 240 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M32,64a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8.00008,8.00008,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm108.24023-30.78418-64-40A8.00044,8.00044,0,0,0,168,120v80a8.00043,8.00043,0,0,0,12.24023,6.78418l64-40a8.00062,8.00062,0,0,0,0-13.56836Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="128" x2="136" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="192" x2="136" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="240 160 176 200 176 120 240 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="128" x2="136" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="192" x2="136" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="240 160 176 200 176 120 240 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="40" y1="64" x2="216" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="128" x2="136" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="192" x2="136" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="240 160 176 200 176 120 240 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Queue = (props: any, ref: any)  => {
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


export default Queue;
