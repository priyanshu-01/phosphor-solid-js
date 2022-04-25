/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M232,184a8,8,0,0,1-16,0A87.99083,87.99083,0,0,0,71.69507,116.38086l26.08032,26.08008a8.00064,8.00064,0,0,1-5.65723,13.65722h-64a8.0004,8.0004,0,0,1-8-8v-64a8.00065,8.00065,0,0,1,13.65723-5.65722L60.333,105.01855A104.00326,104.00326,0,0,1,232,184Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="92.118 148.118 28.118 148.118 28.118 84.118" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowArcLeft = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowArcLeft;
