/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="96" r="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="96" r="64" opacity="0.2"/>
  <circle cx="128" cy="96" r="64" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M231.93652,211.98633a120.48718,120.48718,0,0,0-67.12-54.14258,72.00007,72.00007,0,1,0-73.63294,0,120.48813,120.48813,0,0,0-67.11865,54.14062,7.99981,7.99981,0,0,0,6.92432,12.00635l194.023.002a7.99957,7.99957,0,0,0,6.92431-12.00635Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="96" r="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="96" r="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="96" r="64" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const User = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default User;
