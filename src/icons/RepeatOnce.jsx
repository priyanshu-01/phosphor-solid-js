/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="200 88 224 64 200 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M32,128A64,64,0,0,1,96,64H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56 168 32 192 56 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,128a64,64,0,0,1-64,64H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="116 111.993 132 104 132 152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="200 88 224 64 200 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,128A64,64,0,0,1,96,64H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 168 32 192 56 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,128a64,64,0,0,1-64,64H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="116 111.993 132 104 132 152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M24,128A72.08124,72.08124,0,0,1,96,56h96V40a8.0001,8.0001,0,0,1,13.65723-5.65674l24,24a8,8,0,0,1,0,11.31348l-24,24A8.0001,8.0001,0,0,1,192,88V72H96a56.06322,56.06322,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8.00039,8.00039,0,0,0-8,8,56.06322,56.06322,0,0,1-56,56H64V168a8.0001,8.0001,0,0,0-13.65723-5.65674l-24,24a8,8,0,0,0,0,11.31348l24,24A8.0001,8.0001,0,0,0,64,216V200h96a72.08124,72.08124,0,0,0,72-72A8.00039,8.00039,0,0,0,224,120Zm-92,40a8.00039,8.00039,0,0,0,8-8V104a7.99986,7.99986,0,0,0-11.5752-7.15674l-16,7.99268a8.00006,8.00006,0,0,0,7.1504,14.31347l4.4248-2.21V152A8.00039,8.00039,0,0,0,132,160Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="200 88 224 64 200 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,128A64,64,0,0,1,96,64H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56 168 32 192 56 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,128a64,64,0,0,1-64,64H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="116 111.993 132 104 132 152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="200 88 224 64 200 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,128A64,64,0,0,1,96,64H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56 168 32 192 56 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,128a64,64,0,0,1-64,64H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="116 111.993 132 104 132 152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="200 88 224 64 200 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,128A64,64,0,0,1,96,64H224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 168 32 192 56 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,128a64,64,0,0,1-64,64H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="116 111.993 132 104 132 152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const RepeatOnce = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default RepeatOnce;
