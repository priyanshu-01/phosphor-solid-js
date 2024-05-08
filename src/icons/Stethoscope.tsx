/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="208" cy="160" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40v-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="208" cy="160" r="32" opacity="0.2"/><circle cx="208" cy="160" r="12"/><circle cx="208" cy="160" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M240,160a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H144a32,32,0,0,1-32-32V151.48c31.47-4,56-31.47,56-64.31V40a8,8,0,0,0-8-8H136a8,8,0,0,0,0,16h16V87.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,56,88V48H72a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V88a64,64,0,0,0,56,63.49V192a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,240,160Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,208,168Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="208" cy="160" r="10"/><circle cx="208" cy="160" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="208" cy="160" r="8"/><circle cx="208" cy="160" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="208" cy="160" r="12"/><circle cx="208" cy="160" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Stethoscope = (props: any, ref: any)  => {
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


export default Stethoscope;
