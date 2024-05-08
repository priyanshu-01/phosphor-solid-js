/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" opacity="0.2"/><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM176,160a48,48,0,0,1-86.4,28.8,8,8,0,1,1,12.8-9.6A32,32,0,0,0,160,160V147.74A48,48,0,0,1,80,112v-8a48,48,0,0,1,80-35.74V64a8,8,0,0,1,16,0Zm-16-56v8a32,32,0,0,1-64,0v-8a32,32,0,0,1,64,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const GoodreadsLogo = (props: any, ref: any)  => {
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


export default GoodreadsLogo;
