/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="108" r="16"/>
  <circle cx="164" cy="108" r="16"/>
  <path d="M165.27508,169.75305a48.0042,48.0042,0,0,0-74.5508.00079" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <path d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm81.58545,86.9248a7.99636,7.99636,0,0,1-10.93018-2.91943,40.01579,40.01579,0,0,0-69.30957-.00049,8.00016,8.00016,0,0,1-13.85058-8.01074,56.0156,56.0156,0,0,1,97.00976.00049A7.99915,7.99915,0,0,1,173.58545,182.9248Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="108" r="10"/>
  <circle cx="164" cy="108" r="10"/>
  <path d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="108" r="8"/>
  <circle cx="164" cy="108" r="8"/>
  <path d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <path d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SmileySad = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SmileySad;
