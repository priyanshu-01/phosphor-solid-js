/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M132.49413,61.28047l9.648-9.648a44,44,0,1,1,62.22539,62.22539l-30.28427,30.28428a44,44,0,0,1-62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M123.50407,194.72133l-9.64621,9.6462a44,44,0,1,1-62.22539-62.22539l30.28427-30.28428a44,44,0,0,1,62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g>
    <path d="M210.0249,45.97559a52.00107,52.00107,0,0,0-73.54,0L116.686,65.77441a8.00053,8.00053,0,1,0,11.31445,11.31446L147.79932,57.29a35.99926,35.99926,0,1,1,50.91113,50.91016l-28.2832,28.28515a36.04088,36.04088,0,0,1-50.91211,0,8.00053,8.00053,0,0,0-11.31446,11.31445,52.0625,52.0625,0,0,0,73.54,0l28.28418-28.28515a52.00226,52.00226,0,0,0,0-73.53906Z"/>
    <path d="M127.99951,178.91113,108.20068,198.71A35.99926,35.99926,0,1,1,57.28955,147.7998l28.2832-28.28515a36.03821,36.03821,0,0,1,50.91211,0,8.00053,8.00053,0,1,0,11.31446-11.31445,52.0625,52.0625,0,0,0-73.54,0L45.9751,136.48535a52.00031,52.00031,0,0,0,73.54,73.53906L139.314,190.22559a8.00053,8.00053,0,0,0-11.31445-11.31446Z"/>
  </g>
        </>
      )
    case "light":
      return (
        <>
          <path d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Link = (props: any, ref: any)  => {
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


export default Link;
