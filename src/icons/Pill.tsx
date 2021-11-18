/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="14.86292" y="82.74517" width="226.27417" height="90.50967" rx="45.25479" transform="translate(-53.01934 128) rotate(-45)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160.06933" y1="104.06932" x2="176.48528" y2="88.48528" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M112,208A45.25478,45.25478,0,0,1,48,208L48,208A45.25478,45.25478,0,0,1,48,144L96,96l64,64Z" opacity="0.2"/>
  <rect x="14.86292" y="82.74517" width="226.27417" height="90.50967" rx="45.25479" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160.06933" y1="112.06932" x2="184.48528" y2="88.48528" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M213.65723,42.34326a53.25535,53.25535,0,0,0-75.31446,0l-96,96a53.255,53.255,0,0,0,75.31446,75.31348l96-96A53.31558,53.31558,0,0,0,213.65723,42.34326Zm-11.31446,64L160,148.68628,107.31348,96l42.34375-42.34326a37.25465,37.25465,0,0,1,52.68554,52.68652Zm-12.10351-23.416a7.99946,7.99946,0,0,1-.19629,11.312l-24.416,23.584a7.99966,7.99966,0,1,1-11.11523-11.50781l24.416-23.584A7.99843,7.99843,0,0,1,190.23926,82.92725Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="14.86292" y="82.74517" width="226.27417" height="90.50967" rx="45.25479" transform="translate(-53.01934 128) rotate(-45)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160.06933" y1="112.06932" x2="184.48528" y2="88.48528" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="14.86292" y="82.74517" width="226.27417" height="90.50967" rx="45.25479" transform="translate(-53.01934 128) rotate(-45)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160.06933" y1="112.06932" x2="184.48528" y2="88.48528" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="14.86292" y="82.74517" width="226.27417" height="90.50967" rx="45.25479" transform="translate(-53.01934 128) rotate(-45)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="96" y1="96" x2="160" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160.06933" y1="112.06932" x2="184.48528" y2="88.48528" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Pill = (props: any, ref: any)  => {
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


export default Pill;
