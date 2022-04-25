/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polygon points="156 120 116 92 116 148 156 120" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="228" x2="96" y2="228" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48ZM112,152V88l48,32Z" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="160 120 112 88 112 152 160 120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M168,224a8.00008,8.00008,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8.00008,8.00008,0,0,1,168,224ZM232,64V176a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24V64A24.02734,24.02734,0,0,1,48,40H208A24.02734,24.02734,0,0,1,232,64Zm-68,56a8.00014,8.00014,0,0,0-3.70508-6.74927l-44-28A7.99989,7.99989,0,0,0,104,92v56a7.99991,7.99991,0,0,0,12.29492,6.74927l44-28A8.00014,8.00014,0,0,0,164,120Z"/>
        </>);
        case "light":
            return (<>
          <polygon points="160 120 112 88 112 152 160 120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polygon points="160 120 112 88 112 152 160 120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="160 120 112 88 112 152 160 120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const MonitorPlay = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default MonitorPlay;
