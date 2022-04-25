/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="216" x2="192" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h4a16,16,0,0,0,16-16V86.62742a16,16,0,0,0-4.68629-11.31371L220,56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="112" x2="96" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" opacity="0.2"/>
  <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="216" x2="192" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.62741a16,16,0,0,0-4.68629-11.3137L216,56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="112" x2="88" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M240.9707,69.65625l-19.314-19.31348a8.00018,8.00018,0,1,0-11.31348,11.31446l19.313,19.3125A7.94757,7.94757,0,0,1,232,86.62695V168a8,8,0,0,1-16,0V128a24.0275,24.0275,0,0,0-24-24H176V56a24.0275,24.0275,0,0,0-24-24H72A24.0275,24.0275,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8.00917,8.00917,0,0,1,8,8v40a24,24,0,0,0,48,0V86.62695A23.84506,23.84506,0,0,0,240.9707,69.65625ZM144,120H80a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
        </>);
        case "light":
            return (<>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="216" x2="192" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.62741a16,16,0,0,0-4.68629-11.3137L216,56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="136" y1="112" x2="88" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="216" x2="192" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.62741a16,16,0,0,0-4.68629-11.3137L216,56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="136" y1="112" x2="88" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M56,216V56A16,16,0,0,1,72,40h80a16,16,0,0,1,16,16V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="216" x2="192" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M168,112h24a16,16,0,0,1,16,16v40a16,16,0,0,0,16,16h0a16,16,0,0,0,16-16V86.62741a16,16,0,0,0-4.68629-11.3137L216,56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="112" x2="88" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const GasPump = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default GasPump;
