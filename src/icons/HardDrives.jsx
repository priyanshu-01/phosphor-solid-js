/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="40" y="48" width="176" height="160" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="176" cy="88" r="16"/>
  <circle cx="176" cy="168" r="16"/>
        </>);
        case "duotone":
            return (<>
          <rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2"/>
  <rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2"/>
  <rect x="40" y="144" width="176" height="64" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="48" width="176" height="64" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="80" r="12"/>
  <circle cx="180" cy="176" r="12"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40ZM180.00049,92a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,92Z"/>
    <path d="M208,136H48a16.01833,16.01833,0,0,0-16,16v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,208,136Zm-27.99951,52a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,188Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <rect x="40" y="144" width="176" height="64" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="48" width="176" height="64" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="80" r="10"/>
  <circle cx="180" cy="176" r="10"/>
        </>);
        case "thin":
            return (<>
          <rect x="40" y="144" width="176" height="64" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="48" width="176" height="64" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="176" r="8"/>
  <circle cx="180" cy="80" r="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="40" y="144" width="176" height="64" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="40" y="48" width="176" height="64" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="80" r="12"/>
  <circle cx="180" cy="176" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const HardDrives = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default HardDrives;
