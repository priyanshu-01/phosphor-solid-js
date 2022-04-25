/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="96" cy="84" r="16"/>
  <circle cx="160" cy="84" r="16"/>
  <circle cx="96" cy="128" r="16"/>
  <circle cx="160" cy="128" r="16"/>
  <circle cx="96" cy="172" r="16"/>
  <circle cx="160" cy="172" r="16"/>
        </>);
        case "duotone":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="12"/>
  <circle cx="164" cy="84" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="172" r="12"/>
  <circle cx="164" cy="172" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"/>
        </>);
        case "light":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="10"/>
  <circle cx="164" cy="84" r="10"/>
  <circle cx="92" cy="128" r="10"/>
  <circle cx="164" cy="128" r="10"/>
  <circle cx="92" cy="172" r="10"/>
  <circle cx="164" cy="172" r="10"/>
        </>);
        case "thin":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="8"/>
  <circle cx="164" cy="84" r="8"/>
  <circle cx="92" cy="128" r="8"/>
  <circle cx="164" cy="128" r="8"/>
  <circle cx="92" cy="172" r="8"/>
  <circle cx="164" cy="172" r="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="92" cy="84" r="12"/>
  <circle cx="164" cy="84" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="172" r="12"/>
  <circle cx="164" cy="172" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const DiceSix = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default DiceSix;
