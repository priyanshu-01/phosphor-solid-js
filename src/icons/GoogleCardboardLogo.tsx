/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="82" cy="126" r="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="174" cy="126" r="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96l26.34-26.34a8,8,0,0,1,11.32,0L160,200h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" opacity="0.2"/><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="80" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="176" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-24,80a24,24,0,1,1-24-24A24,24,0,0,1,200,128ZM56,128a24,24,0,1,1,24,24A24,24,0,0,1,56,128Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="80" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="176" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="80" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="176" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="80" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="176" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const GoogleCardboardLogo = (props: any, ref: any)  => {
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


export default GoogleCardboardLogo;
