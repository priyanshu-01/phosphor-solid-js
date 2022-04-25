/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="180 52 220 52 220 92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="76 204 36 204 36 164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="220 164 220 204 180 204" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="36 92 36 52 76 52" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="92" x2="88" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="92" x2="168" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="92" x2="128" y2="164" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="184 48 224 48 224 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="72 208 32 208 32 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224 168 224 208 184 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 88 32 48 72 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="88" x2="176" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="88" x2="144" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="88" x2="112" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8.00039,8.00039,0,0,0,224,40Z"/>
    <path d="M72,200H40V168a8,8,0,0,0-16,0v40a8.00039,8.00039,0,0,0,8,8H72a8,8,0,0,0,0-16Z"/>
    <path d="M224,160a8.00039,8.00039,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8.00039,8.00039,0,0,0,8-8V168A8.00039,8.00039,0,0,0,224,160Z"/>
    <path d="M32,96a8.00039,8.00039,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8.00039,8.00039,0,0,0-8,8V88A8.00039,8.00039,0,0,0,32,96Z"/>
    <path d="M80,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,80,80Z"/>
    <path d="M184,168V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0Z"/>
    <path d="M144,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,144,80Z"/>
    <path d="M112,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,112,80Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <polyline points="184 48 224 48 224 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="72 208 32 208 32 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="224 168 224 208 184 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="32 88 32 48 72 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="88" x2="176" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="144" y1="88" x2="144" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112" y1="88" x2="112" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="184 48 224 48 224 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="72 208 32 208 32 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="224 168 224 208 184 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="32 88 32 48 72 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="88" x2="176" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="144" y1="88" x2="144" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112" y1="88" x2="112" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="184 48 224 48 224 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="72 208 32 208 32 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224 168 224 208 184 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 88 32 48 72 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="88" x2="176" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="88" x2="144" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="88" x2="112" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Barcode = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Barcode;
