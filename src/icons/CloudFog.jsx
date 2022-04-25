/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="120" y1="200" x2="72" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="200" x2="160" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="240" x2="104" y2="240" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" opacity="0.2"/>
  <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M168,224a8.00008,8.00008,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8.00008,8.00008,0,0,1,168,224Zm-40-32a8.00008,8.00008,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,128,192Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM156,16A76.13113,76.13113,0,0,0,85.03711,64.7832l-.00537-.001A76.1764,76.1764,0,0,0,80,92a8,8,0,0,1-16,0,92.24056,92.24056,0,0,1,4.17639-27.41064A52.00137,52.00137,0,0,0,76,168h80a76,76,0,0,0,0-152Z"/>
        </>);
        case "light":
            return (<>
          <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const CloudFog = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default CloudFog;
