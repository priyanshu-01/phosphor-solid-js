/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="80" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M180,64a64,64,0,0,1,2.05,128c-14.9.47-28.71-7.19-39.8-15.31a24.13,24.13,0,0,0-28.5,0C102.66,184.79,88.85,192.45,74,192A64,64,0,0,1,76,64Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z" opacity="0.2"/><path d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M183.05,56H72A72,72,0,0,0,.08,131.4c1.69,36.69,31.76,66.79,68.45,68.52,15.84.72,32-5.9,49.38-20.3a15.87,15.87,0,0,1,20.24,0C148.72,188.39,165,200,184,200a72,72,0,0,0,72-72.95C255.49,87.87,222.76,56,183.05,56ZM176,104H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Visor = (props: any, ref: any)  => {
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


export default Visor;
