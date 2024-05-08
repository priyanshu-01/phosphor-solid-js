/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="164" cy="136" r="16"/><circle cx="120" cy="92" r="16"/><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,236a20,20,0,0,1,20-20h40a20,20,0,0,0,0-40h-4c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160Z" opacity="0.2"/><circle cx="164" cy="140" r="12"/><circle cx="116" cy="92" r="12"/><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M235.6,176H220.24a104,104,0,1,0-184.52,0H20.4A12.26,12.26,0,0,0,8,187.78,12,12,0,0,0,20,200H80a8,8,0,0,1,0,16H72.16a8.2,8.2,0,0,0-8,6.33A8,8,0,0,0,72,232H199.73a8.18,8.18,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H144a8,8,0,0,1,0-16h7.79a8.28,8.28,0,0,0,8.15-7.05A8,8,0,0,0,152,184H136c-14.93,0-30.59-5.78-43-15.85-13.55-11-21-25.27-21-40.15a57,57,0,0,1,.71-9,8.21,8.21,0,0,1,8.85-7,8,8,0,0,1,7,9.27A41.33,41.33,0,0,0,88,128c0,22.16,26.26,40,48,40h15.44c13.5,0,24.86,11.05,24.55,24.55a24,24,0,0,1-.23,2.83,4,4,0,0,0,4,4.62H236a12,12,0,0,0,12-12.22A12.26,12.26,0,0,0,235.6,176ZM127.9,93.56A12,12,0,1,1,114.44,80.1,12,12,0,0,1,127.9,93.56Zm48,48a12,12,0,1,1-13.46-13.46A12,12,0,0,1,175.9,141.56Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="164" cy="140" r="10"/><circle cx="116" cy="92" r="10"/><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="164" cy="140" r="8"/><circle cx="116" cy="92" r="8"/><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="164" cy="140" r="12"/><circle cx="116" cy="92" r="12"/><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SmileyMelting = (props: any, ref: any)  => {
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


export default SmileyMelting;
