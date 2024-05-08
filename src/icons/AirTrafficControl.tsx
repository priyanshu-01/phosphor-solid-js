/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,24h48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="168 72 152 160 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="88 72 104 160 104 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" opacity="0.2"/><line x1="128" y1="72" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,24h48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="168 72 152 160 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="88 72 104 160 104 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM102.52,151.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,89.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,151.87ZM173,89.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,89.43ZM160,188v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V188a4,4,0,0,1,4-4h56A4,4,0,0,1,160,188Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104,24h48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="168 72 152 160 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="88 72 104 160 104 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104,24h48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="168 72 152 160 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="88 72 104 160 104 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,24h48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="168 72 152 160 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="88 72 104 160 104 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M66.19,160a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216a8,8,0,0,1,7.52,10.73l-26.18,72a8,8,0,0,1-7.52,5.27Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const AirTrafficControl = (props: any, ref: any)  => {
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


export default AirTrafficControl;
