/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="144" r="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M139.26,223.35l18.79-50.16a8,8,0,0,1,7.5-5.19H215.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M116.69,223.34,97.94,173.2a8,8,0,0,0-7.49-5.2H40.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M222.4,145.55a128,128,0,0,0-188.8,0A96.6,96.6,0,0,0,37.46,160h53a8,8,0,0,1,7.49,5.2l21.86,58.45c2.7.23,5.44.35,8.2.35s5.46-.12,8.15-.34l21.9-58.47a8,8,0,0,1,7.5-5.19h53A96.6,96.6,0,0,0,222.4,145.55Z" opacity="0.2"/><circle cx="128" cy="140" r="12"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="140" r="10"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="140" r="8"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="140" r="12"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SteeringWheel = (props: any, ref: any)  => {
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


export default SteeringWheel;
