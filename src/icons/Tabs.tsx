/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M12,168,34.29,93.7A8,8,0,0,1,42,88h60.1a8,8,0,0,1,7.66,5.7L132,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,88h10.05a8,8,0,0,1,7.66,5.7L188,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M204,88h10.05a8,8,0,0,1,7.66,5.7L244,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="12" y1="168" x2="244" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168Z" opacity="0.2"/><path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="8" y1="168" x2="248" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.37,165.6L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h15.3L150.79,85.15A4,4,0,0,1,154.62,80h15.43a16,16,0,0,1,15.32,11.4L206,160h15.3L198.79,85.15A4,4,0,0,1,202.62,80h15.43a16,16,0,0,1,15.32,11.4l22.26,74.18A8.11,8.11,0,0,1,256,168Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="8" y1="168" x2="248" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="8" y1="168" x2="248" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="8" y1="168" x2="248" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Tabs = (props: any, ref: any)  => {
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


export default Tabs;
