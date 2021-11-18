/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M88,116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z" opacity="0.2"/>
  <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M188,80a27.82885,27.82885,0,0,0-13.35791,3.39716A27.97426,27.97426,0,0,0,128,72.43066,27.9817,27.9817,0,0,0,80,92v16H68a28.03146,28.03146,0,0,0-28,28v16a88,88,0,0,0,176,0V108A28.03146,28.03146,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V136a12.01343,12.01343,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M128,124V92a20,20,0,0,0-40,0v56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,124V92a20,20,0,0,0-40,0v32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HandGrabbing = (props: any, ref: any)  => {
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


export default HandGrabbing;
