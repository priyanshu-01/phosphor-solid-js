/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" opacity="0.2"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" opacity="0.2"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M188.79883,169.60193l-55.46631-41.59967,55.46631-41.6a7.99952,7.99952,0,0,0,0-12.7998l-64-48a8,8,0,0,0-12.79981,6.3999v80.00006l-51.20019-38.4a7.9998,7.9998,0,1,0-9.59961,12.7998l55.46631,41.6L51.19922,169.60193a8.0002,8.0002,0,0,0,9.59961,12.80078L111.999,144.00238v79.99994a8.00025,8.00025,0,0,0,12.79981,6.40039l64-48a8.0005,8.0005,0,0,0,0-12.80078ZM127.999,48.00232l42.667,32-42.667,32Zm0,160v-64l42.667,32Z"/>
        </>);
        case "light":
            return (<>
          <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Bluetooth = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Bluetooth;
