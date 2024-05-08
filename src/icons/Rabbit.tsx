/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="104" cy="160" r="16"/><circle cx="152" cy="160" r="16"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" opacity="0.2"/><circle cx="100" cy="164" r="12"/><circle cx="156" cy="164" r="12"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M199.28,149.8A71.58,71.58,0,0,0,193,129c19-37.94,30.45-88.28,17.34-110A22,22,0,0,0,190.94,8c-14.12,0-26,11.89-36.44,36.36-6.22,14.62-10.85,31.32-14,44.74a71.8,71.8,0,0,0-25,0c-3.13-13.42-7.76-30.12-14-44.74C91.1,19.89,79.18,8,65.06,8A22,22,0,0,0,45.64,19.08C32.53,40.76,44,91.1,63,129a71.58,71.58,0,0,0-6.26,20.76A52,52,0,1,0,128,225.52l-21.12-19.37a8,8,0,1,1,10.24-12.3L128,202.9l10.88-9.05a8,8,0,0,1,10.24,12.3L128,225.52a52,52,0,1,0,71.28-75.72Zm-126-36.53A218.45,218.45,0,0,1,58.4,67.08c-3.49-18.13-3.15-33,.93-39.72A6,6,0,0,1,65.06,24c6.61,0,14.52,9.7,21.72,26.62,5.93,13.94,10.35,30.12,13.33,43a71.72,71.72,0,0,0-26.88,19.64ZM100,176a12,12,0,1,1,12-12A12,12,0,0,1,100,176Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,176Zm20.55-69.17a71.89,71.89,0,0,0-20.66-13.2c3-12.89,7.4-29.07,13.33-43C176.42,33.7,184.33,24,190.94,24a6,6,0,0,1,5.73,3.36c4.08,6.74,4.42,21.59.93,39.72a218.45,218.45,0,0,1-14.83,46.19A72.6,72.6,0,0,0,176.55,106.83Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="100" cy="164" r="10"/><circle cx="156" cy="164" r="10"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="100" cy="164" r="8"/><circle cx="156" cy="164" r="8"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="100" cy="164" r="12"/><circle cx="156" cy="164" r="12"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Rabbit = (props: any, ref: any)  => {
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


export default Rabbit;
