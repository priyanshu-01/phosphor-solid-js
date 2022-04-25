/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M128,24S48,72,48,144a79.98371,79.98371,0,0,0,77.94141,79.948A40.00143,40.00143,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64a40.00143,40.00143,0,0,1-37.94141,39.948A79.98337,79.98337,0,0,0,208,144C208,72,128,24,128,24Z" opacity="0.2"/>
  <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M173.793,51.48242a220.94852,220.94852,0,0,0-41.67676-34.34277,8.00334,8.00334,0,0,0-8.23242,0A220.94852,220.94852,0,0,0,82.207,51.48242C54.59473,80.47559,40,112.4668,40,144a88,88,0,0,0,176,0C216,112.4668,201.40527,80.47559,173.793,51.48242ZM96,184c0-27.67285,22.52637-47.27734,31.999-54.29688C137.48193,136.72949,160,156.332,160,184a32,32,0,0,1-64,0Z"/>
        </>);
        case "light":
            return (<>
          <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Flame = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Flame;
