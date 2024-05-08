/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="156" cy="76" r="16"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M104.15,53.57C76,74.82,55.89,115.64,64.08,191.89c76.26,8.2,117.09-11.87,138.35-40A104,104,0,0,1,104.15,53.57Z" opacity="0.2"/><circle cx="156" cy="76" r="12"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm42,79.08c-15.08,20.84-37.53,34.88-66.7,41.74-20.08,4.72-43.54,6-70.12,3.93q2.4,17.82,6.72,37.54a8,8,0,0,1-6.1,9.52,7.81,7.81,0,0,1-1.72.19,8,8,0,0,1-7.81-6.29q-4.89-22.36-7.41-42.62-20.22-2.51-42.58-7.41a8,8,0,0,1,3.43-15.63q19.7,4.32,37.5,6.73c-2.09-26.56-.78-50,3.93-70.06C66,83.55,80.05,61.1,100.88,46,115,35.76,140.14,23.64,179.27,24c21.19.21,40.83,4.33,43.81,6.08a8,8,0,0,1,2.83,2.83c1.75,3,5.87,22.59,6.08,43.78C232.21,98.31,228.57,129.44,210,155.08Zm2.43-111.52a175.75,175.75,0,0,0-39.22-3.51c-24.34.64-44.71,6.49-60.76,17.39a96,96,0,0,0,86.09,86.1c10.91-16,16.76-36.42,17.4-60.76A175.82,175.82,0,0,0,212.44,43.56Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="156" cy="76" r="10"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="156" cy="76" r="8"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="156" cy="76" r="12"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FishSimple = (props: any, ref: any)  => {
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


export default FishSimple;
