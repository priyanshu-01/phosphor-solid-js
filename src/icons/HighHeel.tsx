/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H236a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,225.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" opacity="0.2"/><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M32,144a95.28,95.28,0,0,1,37.53,7.67,4,4,0,0,1,2.47,3.7V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V148a4,4,0,0,1,4-4Zm199,12.19L180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120a8,8,0,0,0,8,8,111.2,111.2,0,0,1,63.34,19.7,112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect width="256" height="256" fill="#a0a0a0" opacity="0"/><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HighHeel = (props: any, ref: any)  => {
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


export default HighHeel;
