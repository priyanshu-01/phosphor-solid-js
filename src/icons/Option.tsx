/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M32,80H224a0,0,0,0,1,0,0V192a0,0,0,0,1,0,0H48a16,16,0,0,1-16-16V80A0,0,0,0,1,32,80Z" opacity="0.2"/><path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176H152.94a15.92,15.92,0,0,1-14.31-8.84L103.06,96H56a8,8,0,0,1,0-16h47.06a15.92,15.92,0,0,1,14.31,8.84L152.94,160H200a8,8,0,0,1,0,16Zm0-80H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="152" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="152" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="80" x2="224" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Option = (props: any, ref: any)  => {
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


export default Option;
