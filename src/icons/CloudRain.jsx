/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="128" y1="240" x2="154.25007" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="98.74999" y1="208" x2="130.25007" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" opacity="0.2"/>
  <line x1="128" y1="240" x2="154.25007" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="98.74999" y1="208" x2="130.25007" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M160.93359,204.38916l-26.25,40a8,8,0,1,1-13.377-8.77832l26.25-40a8,8,0,1,1,13.377,8.77832ZM155.99512,16A76.1302,76.1302,0,0,0,85.03931,64.76562l-.007.01758A75.62312,75.62312,0,0,0,79.99512,92a8,8,0,0,1-16,0,91.68713,91.68713,0,0,1,4.16967-27.40967A52.0014,52.0014,0,0,0,75.99512,168h39.43115L92.05664,203.61084a8,8,0,1,0,13.37695,8.77832L134.564,168h21.43116a76,76,0,0,0,0-152Z"/>
        </>);
        case "light":
            return (<>
          <line x1="128" y1="240" x2="154.25007" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="98.74999" y1="208" x2="130.25007" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="128" y1="240" x2="154.25007" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="98.74999" y1="208" x2="130.25007" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="128" y1="240" x2="154.25007" y2="200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="98.74999" y1="208" x2="130.25007" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const CloudRain = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default CloudRain;
