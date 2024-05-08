/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M140,180H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="216" x2="68" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="204" y1="76" x2="180" y2="76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="204" y1="112" x2="180" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="144" y="40" width="96" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="180" x2="88" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="192" cy="176" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="144" y="40" width="96" height="176" rx="8" opacity="0.2"/><path d="M144,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="40" width="96" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="192" cy="180" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M120,76V188a4,4,0,0,1-4,4H96v16h15.73a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H64.27A8.18,8.18,0,0,1,56,216.53,8,8,0,0,1,64,208H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h84A4,4,0,0,1,120,76ZM248,48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM203.9,181.57a12,12,0,1,0-10.34,10.33A12,12,0,0,0,203.9,181.57ZM224,103.47A8.18,8.18,0,0,0,215.73,96H168.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h48A8,8,0,0,0,224,103.47Zm0-32A8.18,8.18,0,0,0,215.73,64H168.27A8.18,8.18,0,0,0,160,71.47,8,8,0,0,0,168,80h48A8,8,0,0,0,224,71.47Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M144,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="144" y="40" width="96" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="192" cy="180" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M144,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="144" y="40" width="96" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="192" cy="180" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M144,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="40" width="96" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="192" cy="180" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DesktopTower = (props: any, ref: any)  => {
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


export default DesktopTower;
