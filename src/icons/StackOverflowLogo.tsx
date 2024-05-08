/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="172" x2="168" y2="172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="100.3" y1="102.23" x2="175.48" y2="129.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="135.73" y1="40.87" x2="197.01" y2="92.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="176" x2="168" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="94.95" y1="123.2" x2="172.23" y2="143.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="115.33" y1="74" x2="184.61" y2="114" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="147.75" y1="31.75" x2="204.32" y2="88.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="152" width="160" height="64" opacity="0.2"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM134.86,46.86a8,8,0,0,1,11.32,0l45.25,45.26a8,8,0,0,1-11.31,11.31L134.86,58.18A8,8,0,0,1,134.86,46.86ZM100.18,98.77a8,8,0,0,1,10.45-4.33l59.13,24.49a8,8,0,0,1-3.06,15.4,7.89,7.89,0,0,1-3.06-.62l-59.13-24.49A8,8,0,0,1,100.18,98.77ZM96,152h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm104,40a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v40H184V144a8,8,0,0,1,16,0Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="176" x2="168" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="94.95" y1="123.2" x2="172.23" y2="143.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="115.33" y1="74" x2="184.61" y2="114" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="147.75" y1="31.75" x2="204.32" y2="88.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="176" x2="168" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="94.95" y1="123.2" x2="172.23" y2="143.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="115.33" y1="74" x2="184.61" y2="114" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="147.75" y1="31.75" x2="204.32" y2="88.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="48 152 48 216 208 216 208 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="176" x2="168" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="94.95" y1="123.2" x2="172.23" y2="143.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="115.33" y1="74" x2="184.61" y2="114" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="147.75" y1="31.75" x2="204.32" y2="88.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const StackOverflowLogo = (props: any, ref: any)  => {
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


export default StackOverflowLogo;
