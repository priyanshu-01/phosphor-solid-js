/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" opacity="0.2"/><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M112,136V72h19.47a16.09,16.09,0,0,1,13.72,7.77L165.72,114a16.06,16.06,0,0,1,2.28,8.24V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V122.22A16.06,16.06,0,0,1,42.28,114L62.81,79.77A16.09,16.09,0,0,1,76.53,72H96v64a8,8,0,0,0,16,0Zm112,24a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8h16V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TeaBag = (props: any, ref: any)  => {
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


export default TeaBag;
