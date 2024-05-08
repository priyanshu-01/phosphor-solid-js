/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M28,92.8S60,48,108,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M185.33,119.83C187,162.36,159.88,208,108.6,208c-64,0-64-96,32-96a134.44,134.44,0,0,1,44.73,7.83" opacity="0.2"/><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M128,128a81.4,81.4,0,0,1,25.69,4.28C151.56,154.87,137.33,176,112,176c-15.8,0-24.06-10.85-24.06-21.58,0-6.59,3-12.75,8.56-17.35C103.62,131.14,114.52,128,128,128Zm96-80V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-18.11,98.59a120.21,120.21,0,0,0-36.08-25.21c-.9-14.35-5.75-27.54-13.89-37.55C145.38,70.86,130.19,64,112,64,76.44,64,50.68,97.76,49.6,99.2a8,8,0,0,0,12.79,9.62C62.61,108.53,84.51,80,112,80c13.4,0,24,4.68,31.5,13.92a47.54,47.54,0,0,1,9.48,21.4A96.75,96.75,0,0,0,128,112c-17.27,0-31.71,4.42-41.74,12.78C77,132.47,71.94,143,71.94,154.42,71.94,172.64,86,192,112,192a54,54,0,0,0,43.53-21.23A70,70,0,0,0,169,138.89a106.24,106.24,0,0,1,25.13,18.52,8,8,0,1,0,11.78-10.82Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ScribbleLoop = (props: any, ref: any)  => {
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


export default ScribbleLoop;
