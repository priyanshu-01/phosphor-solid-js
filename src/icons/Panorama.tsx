/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="200" cy="108" r="16"/><path d="M16,164.69l54.34-54.35a8,8,0,0,1,11.32,0l75,75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M131.31,160,157,134.34a8,8,0,0,1,11.31,0l65.47,65.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M236.53,198.59A8,8,0,0,0,240,192V64A8,8,0,0,0,230,56.27C212.65,60.89,174.56,72,128,72S43.35,60.89,26.05,56.27A8,8,0,0,0,16,64v96.68l54.34-54.35a8,8,0,0,1,11.32,0L131.31,156,157,130.34a8,8,0,0,1,11.31,0Z" opacity="0.2"/><path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="204" cy="108" r="12"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M241.75,51.32a15.87,15.87,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM204,96a12,12,0,1,1-12,12A12,12,0,0,1,204,96Zm-76,80c-45,0-82.72,10.23-100.87,15.14L24,192v-39.3l46.34-46.35a8,8,0,0,1,11.32,0L152.28,177C144.49,176.35,136.37,176,128,176Zm100.87,15.14a448.7,448.7,0,0,0-51-11.2l-35.26-35.26L157,130.34a8,8,0,0,1,11.31,0l60.89,60.88Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="204" cy="108" r="10"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="204" cy="108" r="8"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="204" cy="108" r="12"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Panorama = (props: any, ref: any)  => {
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


export default Panorama;
