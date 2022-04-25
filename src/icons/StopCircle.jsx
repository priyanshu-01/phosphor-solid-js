/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="108" y="108" width="40" height="40" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </>);
        case "duotone":
            return (<>
          <path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32Zm24,120H104V104h48Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <rect x="104" y="104" width="48" height="48" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "fill":
            return (<>
          <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm32,128a8.00008,8.00008,0,0,1-8,8H104a8.00008,8.00008,0,0,1-8-8V104a8.00008,8.00008,0,0,1,8-8h48a8.00008,8.00008,0,0,1,8,8Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="104" y="104" width="48" height="48" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="104" y="104" width="48" height="48" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <rect x="104" y="104" width="48" height="48" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const StopCircle = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default StopCircle;
