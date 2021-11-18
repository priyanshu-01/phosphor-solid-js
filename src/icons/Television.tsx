/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="32" y="72" width="192" height="136" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="80 24 128 72 176 24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="184" cy="116" r="16"/>
  <circle cx="184" cy="164" r="16"/>
  <line x1="140" y1="208" x2="140" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M152,208V72H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" opacity="0.2"/>
  <rect x="32" y="72" width="192" height="136" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="80 24 128 72 176 24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="116" r="12"/>
  <circle cx="188" cy="164" r="12"/>
  <line x1="152" y1="208" x2="152" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,64H147.31445l34.34278-34.34277a8.00053,8.00053,0,0,0-11.31446-11.31446L128,60.68652,85.65723,18.34277A8.00053,8.00053,0,0,0,74.34277,29.65723L108.68555,64H40A16.01833,16.01833,0,0,0,24,80V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216,64Zm0,136H160V80h56l.00977,120Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="32" y="72" width="192" height="136" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="80 24 128 72 176 24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="188" cy="116" r="10"/>
  <circle cx="188" cy="164" r="10"/>
  <line x1="152" y1="208" x2="152" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="32" y="72" width="192" height="136" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="80 24 128 72 176 24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="188" cy="116" r="8"/>
  <circle cx="188" cy="164" r="8"/>
  <line x1="152" y1="208" x2="152" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="32" y="72" width="192" height="136" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="80 24 128 72 176 24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="116" r="12"/>
  <circle cx="188" cy="164" r="12"/>
  <line x1="152" y1="208" x2="152" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Television = (props: any, ref: any)  => {
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


export default Television;
