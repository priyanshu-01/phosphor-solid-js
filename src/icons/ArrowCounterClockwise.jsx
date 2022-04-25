/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="79.833 99.716 31.833 99.716 31.833 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="79.833 99.716 31.833 99.716 31.833 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M195.88281,195.88281a96.11136,96.11136,0,0,1-135.76562,0,8.00052,8.00052,0,0,1,11.31445-11.31445,79.99992,79.99992,0,1,0,0-113.13721L67.147,75.71582,85.49023,94.05908A8.00037,8.00037,0,0,1,79.833,107.71582h-48a8.00008,8.00008,0,0,1-8-8v-48a8.00009,8.00009,0,0,1,13.65722-5.65674L55.833,64.40186l4.28418-4.28418A96.00062,96.00062,0,0,1,195.88281,195.88281Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="79.833 99.716 31.833 99.716 31.833 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="79.833 99.716 31.833 99.716 31.833 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="79.833 99.716 31.833 99.716 31.833 51.716" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowCounterClockwise = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowCounterClockwise;
