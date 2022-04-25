/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" opacity="0.2"/>
  <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.464,87.464,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43561,103.43561,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176Z"/>
        </>);
        case "light":
            return (<>
          <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Cloud = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Cloud;
