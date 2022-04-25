/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="176 152 224 104 176 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M192,216H40a8,8,0,0,1-8-8V88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="176 152 224 104 176 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M192,216H40a8,8,0,0,1-8-8V88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M229.65723,109.65723l-48,48A8.00066,8.00066,0,0,1,168,152V112a87.94718,87.94718,0,0,0-85.22852,65.99414,7.99961,7.99961,0,0,1-15.49414-3.98828A103.9414,103.9414,0,0,1,168,96V56a8.00066,8.00066,0,0,1,13.65723-5.65723l48,48A8.00122,8.00122,0,0,1,229.65723,109.65723ZM192,208H40V88a8,8,0,0,0-16,0V208a16.01833,16.01833,0,0,0,16,16H192a8,8,0,0,0,0-16Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="176 152 224 104 176 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M192,216H40a8,8,0,0,1-8-8V88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="176 152 224 104 176 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M192,216H40a8,8,0,0,1-8-8V88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="176 152 224 104 176 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M192,216H40a8,8,0,0,1-8-8V88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Share = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Share;
