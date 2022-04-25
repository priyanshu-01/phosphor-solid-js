/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="16" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32,100H88.80976A7.98836,7.98836,0,0,1,96.64,106.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,100H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72Z" opacity="0.2"/>
  <rect x="32" y="56" width="192" height="144" rx="16" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="88" x2="224" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M208,48H48A24.0275,24.0275,0,0,0,24,72V184a24.0275,24.0275,0,0,0,24,24H208a24.0275,24.0275,0,0,0,24-24V72A24.0275,24.0275,0,0,0,208,48Zm-56.47949,76.80762a24.00866,24.00866,0,0,1-47.041.001A16.03939,16.03939,0,0,0,88.80957,112H40V96H216v16H167.19043A16.0395,16.0395,0,0,0,151.52051,124.80762ZM48,64H208a8.00917,8.00917,0,0,1,8,8v8H40V72A8.00917,8.00917,0,0,1,48,64Z"/>
        </>);
        case "light":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="16" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="88" x2="224" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="16" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="88" x2="224" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="16" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="88" x2="224" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Cardholder = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Cardholder;
