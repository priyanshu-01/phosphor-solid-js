/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="32" y1="216" x2="224" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="72" y1="176" x2="136" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="72" y="24" width="64" height="112" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M136,72a80,80,0,0,1,48,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="72" y="24" width="64" height="120" rx="8" opacity="0.2"/><line x1="32" y1="216" x2="224" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="176" x2="136" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="72" y="24" width="64" height="120" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,72a80,80,0,0,1,48,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,216a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H181.25A72,72,0,0,0,144,80.46V136a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V32A16,16,0,0,1,80,16h48a16,16,0,0,1,16,16V64.37A88.05,88.05,0,0,1,203.94,208H224A8,8,0,0,1,232,216Zm-96-32a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="32" y1="216" x2="224" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="72" y1="176" x2="136" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="72" y="24" width="64" height="120" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M136,72a80,80,0,0,1,48,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="32" y1="216" x2="224" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="72" y1="176" x2="136" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="72" y="24" width="64" height="120" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M136,72a80,80,0,0,1,48,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="32" y1="216" x2="224" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="176" x2="136" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="72" y="24" width="64" height="120" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,72a80,80,0,0,1,48,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Microscope = (props: any, ref: any)  => {
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


export default Microscope;