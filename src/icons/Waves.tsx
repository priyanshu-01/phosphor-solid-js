/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M33.74609,76.96289a7.98611,7.98611,0,0,1,1.25635-11.21A81.79682,81.79682,0,0,1,64.05957,52.23926c16.16406-4.042,41.14941-5.04785,68.37793,13.10449,42.333,28.22363,77.12891,1.53906,78.58887.38965a8.00032,8.00032,0,0,1,9.97119,12.51367,81.79682,81.79682,0,0,1-29.05713,13.51367,81.324,81.324,0,0,1-19.71484,2.4375c-14.04053,0-30.87207-3.68164-48.66309-15.542-42.333-28.22266-77.12842-1.53906-78.58887-.38965A8.01729,8.01729,0,0,1,33.74609,76.96289ZM211.02637,121.7334c-1.46,1.14941-36.25586,27.833-78.58887-.38965-27.22852-18.15137-52.21387-17.14844-68.37793-13.10449a81.79682,81.79682,0,0,0-29.05713,13.51367,8.00032,8.00032,0,0,0,9.97119,12.51367c1.46045-1.14941,36.25586-27.834,78.58887.38965,17.791,11.86035,34.62256,15.542,48.66309,15.542a83.50512,83.50512,0,0,0,48.772-15.95117,8.00032,8.00032,0,0,0-9.97119-12.51367Zm0,56c-1.46,1.15039-36.25586,27.832-78.58887-.38965-27.22852-18.15332-52.21387-17.14746-68.37793-13.10449a81.79682,81.79682,0,0,0-29.05713,13.51367,8.00032,8.00032,0,0,0,9.97119,12.51367c1.46045-1.15039,36.25586-27.835,78.58887.38965,17.791,11.86035,34.62256,15.542,48.66309,15.542a83.50512,83.50512,0,0,0,48.772-15.95117,8.00032,8.00032,0,0,0-9.97119-12.51367Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Waves = (props: any, ref: any)  => {
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


export default Waves;
