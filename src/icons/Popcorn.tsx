/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="96" x2="104" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="96" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M104,216,88,96,32,80,62.55,209.83A8,8,0,0,0,70.34,216Z" opacity="0.2"/><path d="M152,216h33.66a8,8,0,0,0,7.79-6.17L224,80,168,96Z" opacity="0.2"/><path d="M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="96" x2="104" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="96" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM70.34,208,42.91,91.44l37.85,10.81L94.86,208ZM122.06,73.76,87.57,87.56,49,76.54a28,28,0,0,1,40.1-17.28,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8A16,16,0,0,0,122.06,73.76ZM185.66,208H161.14l14.1-105.75,37.85-10.81Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="96" x2="104" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="168" y1="96" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="96" x2="104" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="168" y1="96" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M32,80,62.55,209.83A8,8,0,0,0,70.34,216H185.66a8,8,0,0,0,7.79-6.17L224,80,168,96,131,81.19a8,8,0,0,0-5.94,0L88,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="96" x2="104" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="96" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,82.3a36,36,0,0,0-52.82-30.11,36,36,0,0,0-70.28,0A36,36,0,0,0,40,82.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Popcorn = (props: any, ref: any)  => {
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


export default Popcorn;
