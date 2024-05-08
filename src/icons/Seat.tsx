/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M100.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v28a8,8,0,0,1-8,8H112.11a8,8,0,0,1-7.15-4.42l-56.12-112a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l29.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" opacity="0.2"/><line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,232a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,232Zm-16-88-64.22,0L112,80l14.19-26.32a1.51,1.51,0,0,0,.11-.22A16,16,0,0,0,119.15,32l-.47-.22L85,17.57A16,16,0,0,0,63.8,24.84l-22.12,44a16.1,16.1,0,0,0,0,14.32l58.11,116A15.93,15.93,0,0,0,114.11,208H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="112" y1="232" x2="216" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Seat = (props: any, ref: any)  => {
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


export default Seat;
