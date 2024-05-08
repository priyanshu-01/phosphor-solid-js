/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <ellipse cx="128" cy="112" rx="104" ry="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M57.8,159.22C69,118.43,128,121.63,128,181.44c0,40.12-48,56.52-80,40.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <ellipse cx="128" cy="112" rx="104" ry="64" opacity="0.2"/><ellipse cx="128" cy="112" rx="104" ry="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M93.43,136.11a17.14,17.14,0,0,0-15.35,6.1c9.31,6.56,22.51,11.33,37.43,13.07C110.41,143.33,101.72,137,93.43,136.11Z"/><path d="M224,48V208a16,16,0,0,1-16,16H127.65a4,4,0,0,1-3.23-6.34c7.5-10.23,11.58-23.24,11.58-37.84,0-2.79-.13-5.46-.35-8.05C176.79,169.33,208,147.47,208,120c0-29.15-35.14-52-80-52S48,90.84,48,120c0,27.31,30.82,49.07,71.58,51.73a77,77,0,0,1,.42,8.09c0,17.62-7.65,31.95-21,39.32A38.77,38.77,0,0,1,79.27,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-32,72c0-19.51-29.31-36-64-36s-64,16.48-64,36a21.29,21.29,0,0,0,3,10.63A33.65,33.65,0,0,1,95.16,120.2c15,1.63,30.84,13.4,37.54,35.68C165.3,154.47,192,138.62,192,120Z"/>
        </>
      )
    case "light":
      return (
        <>
          <ellipse cx="128" cy="112" rx="104" ry="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <ellipse cx="128" cy="112" rx="104" ry="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <ellipse cx="128" cy="112" rx="104" ry="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Lasso = (props: any, ref: any)  => {
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


export default Lasso;
