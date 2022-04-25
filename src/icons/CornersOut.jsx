/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="168 48 208 48 208 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="168 48 208 48 208 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M216,48V88a8.00018,8.00018,0,0,1-13.65723,5.65674l-40-40A8.00037,8.00037,0,0,1,168,40h40A8.00008,8.00008,0,0,1,216,48ZM53.65723,162.34326A8.0001,8.0001,0,0,0,40,168v40a8.00039,8.00039,0,0,0,8,8H88a8.00038,8.00038,0,0,0,5.65723-13.65674Zm157.40429-1.73437a8.00026,8.00026,0,0,0-8.71875,1.73437l-40,40A8.00037,8.00037,0,0,0,168,216h40a8.00039,8.00039,0,0,0,8-8V168A8.00065,8.00065,0,0,0,211.06152,160.60889ZM88,40H48a8.00008,8.00008,0,0,0-8,8V88a8.00018,8.00018,0,0,0,13.65723,5.65674l40-40A8.00038,8.00038,0,0,0,88,40Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="168 48 208 48 208 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="168 48 208 48 208 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="168 48 208 48 208 88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const CornersOut = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default CornersOut;
