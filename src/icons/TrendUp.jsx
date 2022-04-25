/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="232.002 56 136.002 152 96.002 112 24.002 184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="232.002 120 232.002 56 168.002 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="232.002 56 136.002 152 96.002 112 24.002 184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="232.002 120 232.002 56 168.002 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M240.00244,56v64a8.00018,8.00018,0,0,1-13.65723,5.65674L200.00244,99.314l-58.34277,58.34278a8.00122,8.00122,0,0,1-11.31446,0L96.00244,123.314,29.65967,189.65674a8.00018,8.00018,0,0,1-11.31446-11.31348l72-72a8.00122,8.00122,0,0,1,11.31446,0L136.00244,140.686,188.68848,88,162.34521,61.65674A8.00038,8.00038,0,0,1,168.00244,48h64A8.00008,8.00008,0,0,1,240.00244,56Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="232.002 56 136.002 152 96.002 112 24.002 184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="232.002 120 232.002 56 168.002 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="232.002 56 136.002 152 96.002 112 24.002 184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="232.002 120 232.002 56 168.002 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="232.002 56 136.002 152 96.002 112 24.002 184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="232.002 120 232.002 56 168.002 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const TrendUp = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default TrendUp;
