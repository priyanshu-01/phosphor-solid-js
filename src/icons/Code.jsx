/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="64 88 16 128 64 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="192 88 240 128 192 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="64 88 16 128 64 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 88 240 128 192 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M70.146,82.87891a8.00043,8.00043,0,0,0-11.26758-1.02442l-48,40a7.99963,7.99963,0,0,0,0,12.291l48,40a7.99987,7.99987,0,1,0,10.24316-12.291L28.49658,128l40.625-33.85449A7.99977,7.99977,0,0,0,70.146,82.87891Z"/>
    <path d="M245.12158,121.85449l-48-40a7.99987,7.99987,0,1,0-10.24316,12.291L227.50342,128l-40.625,33.85449a7.99987,7.99987,0,1,0,10.24316,12.291l48-40a7.99963,7.99963,0,0,0,0-12.291Z"/>
    <path d="M162.73389,32.48145a8.005,8.005,0,0,0-10.25244,4.78418l-64,176a8.00034,8.00034,0,1,0,15.0371,5.46875l64-176A8.0008,8.0008,0,0,0,162.73389,32.48145Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <polyline points="64 88 16 128 64 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="192 88 240 128 192 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="64 88 16 128 64 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="192 88 240 128 192 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="64 88 16 128 64 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 88 240 128 192 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Code = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Code;
