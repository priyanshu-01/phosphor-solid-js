/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="128" x2="12" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="44 96 12 128 44 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="128" x2="244" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="212 160 244 128 212 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 160 16 128 48 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 96 240 128 208 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H56V96a8.00066,8.00066,0,0,0-13.65723-5.65723l-32,32a8.00122,8.00122,0,0,0,0,11.31446l32,32A8.00066,8.00066,0,0,0,56,160V136H96a8,8,0,0,0,0-16Zm149.65723,2.34277-32-32A8.00066,8.00066,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8.00053,8.00053,0,0,0,13.65723,5.65723l32-32A8.00122,8.00122,0,0,0,245.65723,122.34277Z"/>
        </>);
        case "light":
            return (<>
          <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="48 160 16 128 48 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="208 96 240 128 208 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="48 160 16 128 48 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="208 96 240 128 208 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 160 16 128 48 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="208 96 240 128 208 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowsOutLineHorizontal = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowsOutLineHorizontal;
