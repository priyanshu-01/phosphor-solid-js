/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="192" r="40" opacity="0.2"/><path d="M168,48v85.82l42.72-19.42a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9Z" opacity="0.2"/><path d="M88,133.82V48H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" opacity="0.2"/><circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M207,40H49A17,17,0,0,0,32,57v49.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,121.68a17,17,0,0,0,10-15.47V57A17,17,0,0,0,207,40ZM96,56h64v72.67l-32,14.54L96,128.67Zm32,168a32,32,0,1,1,32-32A32,32,0,0,1,128,224Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MedalMilitary = (props: any, ref: any)  => {
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


export default MedalMilitary;
