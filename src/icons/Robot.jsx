/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="56" width="192" height="160" rx="24" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="68" y="144" width="120" height="36" rx="15.99998" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="108" y1="144" x2="108" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="148" y1="144" x2="148" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="84" cy="104" r="16"/>
  <circle cx="172" cy="104" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M200,56H56A23.99994,23.99994,0,0,0,32,80V192a23.99994,23.99994,0,0,0,24,24H200a23.99994,23.99994,0,0,0,24-24V80A23.99994,23.99994,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z" opacity="0.2"/>
  <rect x="32" y="56" width="192" height="160" rx="24" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="72" y="144" width="112" height="40" rx="19.99998" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="148" y1="144" x2="148" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="108" y1="144" x2="108" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="84" cy="108" r="12"/>
  <circle cx="172" cy="108" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32.03635,32.03635,0,0,0,24,80V192a32.03635,32.03635,0,0,0,32,32H200a32.03635,32.03635,0,0,0,32-32V80A32.03635,32.03635,0,0,0,200,48ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm28,76H92a16,16,0,0,1,0-32h8Zm40,0H116V152h24Zm24,0h-8V152h8a16,16,0,0,1,0,32Zm8-64a12,12,0,1,1,12-12A12,12,0,0,1,172,120Z"/>
        </>);
        case "light":
            return (<>
          <rect x="32" y="56" width="192" height="160" rx="24" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="72" y="144" width="112" height="40" rx="19.99998" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="148" y1="144" x2="148" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="108" y1="144" x2="108" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="84" cy="108" r="10"/>
  <circle cx="172" cy="108" r="10"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="56" width="192" height="160" rx="24" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="72" y="144" width="112" height="40" rx="19.99998" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="148" y1="144" x2="148" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="108" y1="144" x2="108" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="84" cy="108" r="8"/>
  <circle cx="172" cy="108" r="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="56" width="192" height="160" rx="24" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="72" y="144" width="112" height="40" rx="19.99998" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="148" y1="144" x2="148" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="108" y1="144" x2="108" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="84" cy="108" r="12"/>
  <circle cx="172" cy="108" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Robot = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Robot;
