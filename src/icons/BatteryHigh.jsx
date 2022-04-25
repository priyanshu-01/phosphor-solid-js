/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="46" y="38" width="144" height="180" rx="16" transform="translate(246 10) rotate(90)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="164" x2="64" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="100" y1="164" x2="100" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="136" y1="164" x2="136" y2="92" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="244" y1="96" x2="244" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" opacity="0.2"/>
  <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="142.4" y1="168.00043" x2="142.4" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="105.6" y1="168.00043" x2="105.6" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="68.8" y1="168.00043" x2="68.8" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M248,88.00781a7.9954,7.9954,0,0,0-8,8v64a8,8,0,0,0,16,0v-64A7.99541,7.99541,0,0,0,248,88.00781Z"/>
    <path d="M200,48.00781H48a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H200a24.02624,24.02624,0,0,0,24-24v-112A24.02625,24.02625,0,0,0,200,48.00781Zm8,136a8.01042,8.01042,0,0,1-8,8H48a8.01042,8.01042,0,0,1-8-8v-112a8.01042,8.01042,0,0,1,8-8H200a8.01042,8.01042,0,0,1,8,8Z"/>
    <rect x="56" y="80.00781" width="96" height="96" rx="8"/>
  </g>
        </>);
        case "light":
            return (<>
          <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="142.4" y1="168.00043" x2="142.4" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="105.6" y1="168.00043" x2="105.6" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="68.8" y1="168.00043" x2="68.8" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="142.4" y1="168.00043" x2="142.4" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="105.6" y1="168.00043" x2="105.6" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="68.8" y1="168.00043" x2="68.8" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="142.4" y1="168.00043" x2="142.4" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="105.6" y1="168.00043" x2="105.6" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="68.8" y1="168.00043" x2="68.8" y2="88.00043" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const BatteryHigh = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default BatteryHigh;
