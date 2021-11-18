/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M152,40a7.99977,7.99977,0,0,1-8,8H112a8,8,0,0,1,0-16h32A7.99977,7.99977,0,0,1,152,40Zm-8,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V71.99951a8,8,0,0,0,16,0V48A16.01833,16.01833,0,0,0,208,32Zm8,71.99951a7.99977,7.99977,0,0,0-8,8v32a8,8,0,0,0,16,0v-32A7.99977,7.99977,0,0,0,216,103.99951Zm0,72a7.99977,7.99977,0,0,0-8,8V208H184a8,8,0,0,0,0,16h24a16.01833,16.01833,0,0,0,16-16V183.99951A7.99977,7.99977,0,0,0,216,175.99951Zm-176-24a7.99977,7.99977,0,0,0,8-8v-32a8,8,0,1,0-16,0v32A7.99977,7.99977,0,0,0,40,151.99951ZM72,208H48V183.99951a8,8,0,0,0-16,0V208a16.01833,16.01833,0,0,0,16,16H72a8,8,0,0,0,0-16ZM72,32H48A16.01833,16.01833,0,0,0,32,48V71.99951a8,8,0,0,0,16,0V48H72a8,8,0,0,0,0-16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="144" y1="40" x2="112" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="216" x2="144" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,40h24a8,8,0,0,1,8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="143.99963" x2="216" y2="111.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M184,216h24a8,8,0,0,0,8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="111.99963" x2="40" y2="143.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,216H48a8,8,0,0,1-8-8V183.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,40H48a8,8,0,0,0-8,8V71.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Selection = (props: any, ref: any)  => {
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


export default Selection;
