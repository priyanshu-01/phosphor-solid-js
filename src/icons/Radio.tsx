/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="80" x2="192" y2="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="160" cy="144" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="72" y1="124" x2="96" y2="124" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="72" y1="164" x2="96" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M216,80H32V200a8.00009,8.00009,0,0,0,8,8H216a8.00009,8.00009,0,0,0,8-8V88A8.00009,8.00009,0,0,0,216,80Zm-56,96a32,32,0,1,1,32-32A32,32,0,0,1,160,176Z" opacity="0.2"/>
  <path d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="80" x2="192" y2="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="144" r="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="112" x2="96" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="144" x2="96" y2="144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="176" x2="96" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,72H86.509l107.7898-32.33691a8.00047,8.00047,0,0,0-4.59766-15.32618l-160,48-.022.00782c-.21753.06591-.4292.144-.63818.22729-.04.01587-.082.02808-.12159.04444-.1792.075-.35229.16174-.5249.249-.06665.03369-.13672.06225-.20239.09765-.06421.03467-.12378.07642-.187.1128a7.95455,7.95455,0,0,0-2.10157,1.7511c-.02563.03039-.05444.05786-.07983.08862-.08984.10925-.16992.22546-.25366.33923-.071.096-.14624.18836-.21289.2876-.03638.05432-.06665.11231-.10181.1676a7.94225,7.94225,0,0,0-.989,2.27381c-.03443.1322-.074.26269-.102.39685-.00782.03869-.01123.07885-.0188.11767-.043.22473-.07984.451-.10352.68006-.00146.01342-.00122.0271-.00244.04052-.02515.25391-.03857.50977-.03882.76734L24,80V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V88A16.01833,16.01833,0,0,0,216,72ZM96,184H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm72,52a28,28,0,1,1,28-28A28.03209,28.03209,0,0,1,168,172Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="80" x2="192" y2="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="160" cy="144" r="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="112" x2="96" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="144" x2="96" y2="144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="176" x2="96" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="80" x2="192" y2="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="160" cy="144" r="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="112" x2="96" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="144" x2="96" y2="144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="176" x2="96" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="80" x2="192" y2="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="144" r="32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="112" x2="96" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="144" x2="96" y2="144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="176" x2="96" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Radio = (props: any, ref: any)  => {
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


export default Radio;
