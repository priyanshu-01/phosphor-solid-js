/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="42.3432" y1="42.3432" x2="213.65681" y2="213.65681" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M42.3432,42.3432,213.65681,213.65681l0,0A7.975,7.975,0,0,0,216,208V48a8,8,0,0,0-8-8H48a7.975,7.975,0,0,0-5.65683,2.34314Z" opacity="0.2"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.3432" y1="42.3432" x2="213.65681" y2="213.65681" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M152,216a8.00008,8.00008,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8.00008,8.00008,0,0,1,152,216ZM40,152a8.00008,8.00008,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8.00008,8.00008,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16.01833,16.01833,0,0,0,16,16H72a8,8,0,0,0,0-16ZM224,48a16.01833,16.01833,0,0,0-16-16H48a15.9167,15.9167,0,0,0-10.66406,4.106,7.68793,7.68793,0,0,0-1.23023,1.23022A15.917,15.917,0,0,0,32,48V72a8,8,0,0,0,16,0V59.31348L196.68555,208H184a8,8,0,0,0,0,16h24a15.9162,15.9162,0,0,0,10.66284-4.105,7.68852,7.68852,0,0,0,1.23145-1.2312A15.917,15.917,0,0,0,224,208Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="42.3432" y1="42.3432" x2="213.65681" y2="213.65681" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="42.3432" y1="42.3432" x2="213.65681" y2="213.65681" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="42.3432" y1="42.3432" x2="213.65681" y2="213.65681" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SelectionInverse = (props: any, ref: any)  => {
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


export default SelectionInverse;
