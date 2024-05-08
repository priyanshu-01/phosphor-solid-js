/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" opacity="0.2"/><path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g opacity="0.2"><line x1="103.96" y1="126.94" x2="103.96" y2="126.94"/></g><path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Wrench = (props: any, ref: any)  => {
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


export default Wrench;
