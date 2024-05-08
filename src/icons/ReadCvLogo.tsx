/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="103.71 69.08 128 73.37 170.94 80.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96.78" y1="108.48" x2="164" y2="120.35" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="89.84" y1="147.87" x2="123.46" y2="153.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" opacity="0.2"/><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="97.22" y1="59.81" x2="180.2" y2="74.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="174.66" y1="105.98" x2="91.67" y2="91.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="127.62" y1="130.17" x2="86.13" y2="122.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM135.5,131.56a8,8,0,0,1-7.87,6.61,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,87.52,115L129,122.29A8,8,0,0,1,135.5,131.56Zm47-24.18a8,8,0,0,1-7.86,6.61,7.55,7.55,0,0,1-1.41-.13l-83-14.65a8,8,0,0,1,2.79-15.76l83,14.66A8,8,0,0,1,182.53,107.38Zm5.55-31.52a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12l-83-14.66a8,8,0,1,1,2.78-15.75l83,14.65A8,8,0,0,1,188.08,75.86Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="97.22" y1="59.81" x2="180.2" y2="74.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="174.66" y1="105.98" x2="91.67" y2="91.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="127.62" y1="130.17" x2="86.13" y2="122.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="97.22" y1="59.81" x2="180.2" y2="74.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="174.66" y1="105.98" x2="91.67" y2="91.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="127.62" y1="130.17" x2="86.13" y2="122.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="97.22" y1="59.81" x2="180.2" y2="74.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="174.66" y1="105.98" x2="91.67" y2="91.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="127.62" y1="130.17" x2="86.13" y2="122.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ReadCvLogo = (props: any, ref: any)  => {
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


export default ReadCvLogo;
