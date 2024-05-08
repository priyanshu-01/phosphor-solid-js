/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" opacity="0.2"/><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M71.22,190.47a108.88,108.88,0,0,1-33.84,9.16,4,4,0,0,1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15,4.49-26.92,19.09-53.87,41.12-75.9s49-36.63,75.9-41.12c22.79-3.79,43.37,0,59.29,10.6a4,4,0,0,1-1.25,7.23,121,121,0,0,0-21.82,7.46c-21.77,9.9-49.6,31.06-58.52,75.7C114.1,156.73,97.63,178.27,71.22,190.47ZM222.51,58.38a4,4,0,0,0-3.88-2,108.5,108.5,0,0,0-33.85,9.16c-26.41,12.2-42.88,33.74-48.94,64-8.93,44.64-36.75,65.8-58.52,75.7a121,121,0,0,1-21.82,7.46A4,4,0,0,0,54.27,220c11.87,7.92,26.32,12,42.35,12a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C234,92.68,231.18,73.66,222.51,58.38Z"/>
        </>
      )
    case "light":
      return (
        <>
          <ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CoffeeBean = (props: any, ref: any)  => {
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


export default CoffeeBean;
