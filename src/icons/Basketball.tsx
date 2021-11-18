/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M60,60.23573A95.69771,95.69771,0,0,1,88,128a95.69767,95.69767,0,0,1-27.99925,67.76354" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M196,60.23573a96,96,0,0,0-.00072,135.52781" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M60.05889,195.90664a96,96,0,0,1-.11775-135.64655l0,0a95.69768,95.69768,0,0,1,28,67.76427,95.69771,95.69771,0,0,1-27.99925,67.76355Z" opacity="0.2"/>
  <path d="M196.05884,195.90664a96,96,0,0,1-.11776-135.64655l0,0a96,96,0,0,1,.00073,135.52782Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M60,60.23573A95.69771,95.69771,0,0,1,88,128a95.69767,95.69767,0,0,1-27.99925,67.76354" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M196,60.23573a96,96,0,0,0-.00072,135.52781" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M59.99512,49.37646A103.57046,103.57046,0,0,1,120,24.30469V120H95.69531A103.84891,103.84891,0,0,0,59.99512,49.37646ZM48.71558,60.77637A103.54348,103.54348,0,0,0,24.30469,120H79.63257A87.91116,87.91116,0,0,0,48.71558,60.77637Zm147.2893-11.39991A103.57046,103.57046,0,0,0,136,24.30469V120h24.30469A103.84891,103.84891,0,0,1,196.00488,49.37646ZM231.69531,120a103.54348,103.54348,0,0,0-24.41089-59.22363A87.91116,87.91116,0,0,0,176.36743,120ZM24.30469,136a103.54348,103.54348,0,0,0,24.41089,59.22363A87.91116,87.91116,0,0,0,79.63257,136Zm182.97973,59.22363A103.54348,103.54348,0,0,0,231.69531,136H176.36743A87.91116,87.91116,0,0,0,207.28442,195.22363ZM59.99512,206.62354A103.57046,103.57046,0,0,0,120,231.69531V136H95.69531A103.84891,103.84891,0,0,1,59.99512,206.62354ZM160.30469,136H136v95.69531a103.57046,103.57046,0,0,0,60.00488-25.07177A103.84891,103.84891,0,0,1,160.30469,136Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M60,60.23573A95.69771,95.69771,0,0,1,88,128a95.69767,95.69767,0,0,1-27.99925,67.76354" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M196,60.23573a96,96,0,0,0-.00072,135.52781" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M60,60.23573A95.69771,95.69771,0,0,1,88,128a95.69767,95.69767,0,0,1-27.99925,67.76354" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M196,60.23573a96,96,0,0,0-.00072,135.52781" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M60,60.23573A95.69771,95.69771,0,0,1,88,128a95.69767,95.69767,0,0,1-27.99925,67.76354" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M196,60.23573a96,96,0,0,0-.00072,135.52781" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="128" x2="224" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Basketball = (props: any, ref: any)  => {
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


export default Basketball;
