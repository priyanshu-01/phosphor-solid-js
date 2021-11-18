/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M168,112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0V36a20,20,0,0,1,40,0V52a20,20,0,0,1,40,0Z" opacity="0.2"/>
  <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M188,84a27.83152,27.83152,0,0,0-12,2.707V52a27.992,27.992,0,0,0-41.35791-24.60278A27.99792,27.99792,0,0,0,80,36v6.707A27.991,27.991,0,0,0,40,68v84a88,88,0,0,0,176,0V112A28.03146,28.03146,0,0,0,188,84Zm12,68a72,72,0,0,1-144,0V68a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V52a12,12,0,0,1,24,0v72.6665A48.07871,48.07871,0,0,0,120,172a8,8,0,0,0,16,0,32.03635,32.03635,0,0,1,32-32,8.00008,8.00008,0,0,0,8-8V112a12,12,0,0,1,24,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HandPalm = (props: any, ref: any)  => {
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


export default HandPalm;
