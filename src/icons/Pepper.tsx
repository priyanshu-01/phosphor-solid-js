/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M128,104l32-16,32,16,22.83-11.42a56,56,0,0,0-109.66,0Z" opacity="0.2"/><path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M167.27,40.42A40.06,40.06,0,0,0,128,8a8,8,0,0,0,0,16,24,24,0,0,1,22.85,16.66A64.08,64.08,0,0,0,96,104c0,46.75-25.75,78-76.53,93a16,16,0,0,0,1.77,31.13A264.8,264.8,0,0,0,66.75,232c40.78,0,86.16-9.15,117.53-35.46C210.64,174.44,224,143.3,224,104h0A64.07,64.07,0,0,0,167.27,40.42ZM192,95,163.58,80.83a8,8,0,0,0-7.16,0L128,95l-13.37-6.68a48,48,0,0,1,90.74,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Pepper = (props: any, ref: any)  => {
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


export default Pepper;
