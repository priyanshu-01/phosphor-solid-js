/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="232.002 200 136.002 104 96.002 144 24.002 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="232.002 136 232.002 200 168.002 200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="232.002 200 136.002 104 96.002 144 24.002 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="232.002 136 232.002 200 168.002 200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M240.00244,136v64a8.00008,8.00008,0,0,1-8,8h-64a8.00038,8.00038,0,0,1-5.65723-13.65674L188.68848,168l-52.686-52.686-34.34277,34.34278a8.00122,8.00122,0,0,1-11.31446,0l-72-72A8.00018,8.00018,0,1,1,29.65967,66.34326L96.00244,132.686l34.34277-34.34278a8.00122,8.00122,0,0,1,11.31446,0L200.00244,156.686l26.34277-26.34278A8.0001,8.0001,0,0,1,240.00244,136Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="232.002 200 136.002 104 96.002 144 24.002 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="232.002 136 232.002 200 168.002 200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="232.002 200 136.002 104 96.002 144 24.002 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="232.002 136 232.002 200 168.002 200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="232.002 200 136.002 104 96.002 144 24.002 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="232.002 136 232.002 200 168.002 200" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const TrendDown = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default TrendDown;
