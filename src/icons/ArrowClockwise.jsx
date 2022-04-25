/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M232.167,51.71582v48a8.00008,8.00008,0,0,1-8,8h-48a8.00037,8.00037,0,0,1-5.65722-13.65674L188.853,75.71582l-4.28467-4.28467a80.00009,80.00009,0,1,0,0,113.1377,8.00018,8.00018,0,1,1,11.31445,11.31347,96.00044,96.00044,0,1,1,0-135.76464l4.28418,4.28418,18.34278-18.34278A8.00009,8.00009,0,0,1,232.167,51.71582Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowClockwise = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowClockwise;
