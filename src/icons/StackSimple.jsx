/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polygon points="16 100 128 164 240 100 128 36 16 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="16 148 128 212 240 148" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polygon points="16 104 128 168 240 104 128 40 16 104" opacity="0.2"/>
  <polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M12.03125,110.94629l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00024,8.00024,0,0,0,0-13.89258l-112-64a8.00411,8.00411,0,0,0-7.9375,0l-112,64a8.00024,8.00024,0,0,0,0,13.89258Z"/>
    <path d="M236.03125,137.05371,128,198.78613,19.96875,137.05371a8.00012,8.00012,0,0,0-7.9375,13.89258l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00012,8.00012,0,0,0-7.9375-13.89258Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polygon points="16 104 128 168 240 104 128 40 16 104" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="16 144 128 208 240 144" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const StackSimple = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default StackSimple;
