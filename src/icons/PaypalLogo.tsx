/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M176,80H120a8,8,0,0,0-7.76,6.06l-12,48A8,8,0,0,1,108,128h36a48,48,0,0,0,46.56-36.36h0a49,49,0,0,0,1.37-8.94A48.25,48.25,0,0,0,176,80Z" opacity="0.2"/><path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48Zm166.77-46.3A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PaypalLogo = (props: any, ref: any)  => {
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


export default PaypalLogo;
