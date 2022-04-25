/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M32,72H83.88306a8,8,0,0,1,6.50986,3.35009l75.21416,105.29982A8,8,0,0,0,172.11694,184H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="208 48 232 72 208 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="208 160 232 184 208 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M32,184H83.88306a8,8,0,0,0,6.50986-3.35009l13.02884-18.24038" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152.57823,93.59048l13.02885-18.24039A8,8,0,0,1,172.11694,72H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M32,72H83.88306a8,8,0,0,1,6.50986,3.35009l75.21416,105.29982A8,8,0,0,0,172.11694,184H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 48 232 72 208 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 160 232 184 208 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M147.66242,100.47261l17.94466-25.12252A8,8,0,0,1,172.11694,72H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,184H83.88306a8,8,0,0,0,6.50986-3.35009l17.94466-25.12252" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M237.65723,178.34277a8.00122,8.00122,0,0,1,0,11.31446l-24,24A8.00066,8.00066,0,0,1,200,208V192H172.11719a16.03,16.03,0,0,1-13.01953-6.7002L83.88281,79.999,32,80a8,8,0,0,1,0-16H83.88281a16.03,16.03,0,0,1,13.01953,6.7002L172.11719,176.001,200,176.00049V160a8.00065,8.00065,0,0,1,13.65723-5.65723Zm-94.64551-71.36035a7.99822,7.99822,0,0,0,11.16015-1.85937L172.11719,80H200V96a8.00053,8.00053,0,0,0,13.65723,5.65723l24-24a8.00122,8.00122,0,0,0,0-11.31446l-24-24A8.00065,8.00065,0,0,0,200,48V64H172.11719a16.03166,16.03166,0,0,0-13.01953,6.69922L141.15234,95.82227A8.00057,8.00057,0,0,0,143.01172,106.98242Zm-30.02344,42.03516a7.99913,7.99913,0,0,0-11.16016,1.85937L83.88281,176H32a8,8,0,0,0,0,16H83.88281a16.03166,16.03166,0,0,0,13.01953-6.69922l17.94532-25.12305A8.00057,8.00057,0,0,0,112.98828,149.01758Z"/>
        </>);
        case "light":
            return (<>
          <path d="M32,72H83.88306a8,8,0,0,1,6.50986,3.35009l75.21416,105.29982A8,8,0,0,0,172.11694,184H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="208 48 232 72 208 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="208 160 232 184 208 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M147.66242,100.47261l17.94466-25.12252A8,8,0,0,1,172.11694,72H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,184H83.88306a8,8,0,0,0,6.50986-3.35009l17.94466-25.12252" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M32,72H83.88306a8,8,0,0,1,6.50986,3.35009l75.21416,105.29982A8,8,0,0,0,172.11694,184H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="208 48 232 72 208 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="208 160 232 184 208 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M147.66242,100.47261l17.94466-25.12252A8,8,0,0,1,172.11694,72H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,184H83.88306a8,8,0,0,0,6.50986-3.35009l17.94466-25.12252" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M32,72H83.88306a8,8,0,0,1,6.50986,3.35009l75.21416,105.29982A8,8,0,0,0,172.11694,184H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 48 232 72 208 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 160 232 184 208 208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M147.66242,100.47261l17.94466-25.12252A8,8,0,0,1,172.11694,72H232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,184H83.88306a8,8,0,0,0,6.50986-3.35009l17.94466-25.12252" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ShuffleAngular = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ShuffleAngular;
