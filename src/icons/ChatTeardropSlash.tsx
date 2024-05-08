/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M100,37.72A91.8,91.8,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.59,91.59,0,0,1-9.16,40.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" opacity="0.2"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-13.57-14.92A99.4,99.4,0,0,1,132,224H48a16,16,0,0,1-16-16V124A99.54,99.54,0,0,1,55.29,59.92L42.08,45.38a8,8,0,0,1,.72-11.46,8.22,8.22,0,0,1,11.34.95Zm-5.57-29.91a4,4,0,0,0,6.24-.4A100,100,0,0,0,83.78,36.42a4,4,0,0,0-1,6.18Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChatTeardropSlash = (props: any, ref: any)  => {
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


export default ChatTeardropSlash;
