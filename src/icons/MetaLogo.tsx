/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M105.11,155.55C90.66,180.34,75.67,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-10.65,0-20.47,7.61-29.86,19.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M182,56c-12.62,0-24.1,10.7-35,26.27L128.49,114.6c21.76,39.86,42.91,85.4,68.95,85.4C259.16,200,228.3,56,182,56Z" opacity="0.2"/><path d="M74,56C27.7,56-3.16,200,58.56,200c19,0,35.32-24.14,51.22-52.65l18.71-32.75C111.56,83.58,94.25,56,74,56Z" opacity="0.2"/><path d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM201.23,170.26c-5.63,9-14.33,13.74-25.16,13.74-20.73,0-34.81-25.31-49.72-52.11C115.47,112.33,101.93,88,90.61,88,78.18,88,64,116.88,64,142.21c0,8.26,1.5,15,4.34,19.56C71,166,74.68,168,79.93,168c6.08,0,13.52-7,22.74-21.51a8,8,0,0,1,13.49,8.59C99.84,180.71,88.22,184,79.93,184c-10.83,0-19.53-4.75-25.16-13.74-4.43-7.08-6.77-16.78-6.77-28A103.13,103.13,0,0,1,59,97.06C67.34,80.9,78.57,72,90.61,72c20.73,0,34.81,25.31,49.72,52.11C151.21,143.66,164.75,168,176.07,168c5.25,0,8.93-2,11.59-6.23,2.84-4.53,4.34-11.3,4.34-19.56C192,116.88,177.82,88,165.39,88c-3.4,0-7.35,2.31-11.74,6.88a8,8,0,1,1-11.54-11.09C149.74,75.86,157.35,72,165.39,72c12,0,23.27,8.9,31.62,25.06a103.13,103.13,0,0,1,11,45.15C208,153.48,205.66,163.18,201.23,170.26Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MetaLogo = (props: any, ref: any)  => {
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


export default MetaLogo;
