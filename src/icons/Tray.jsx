/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M39.99414,156H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,180h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,156h36.68629" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M76.68066,160a7.9996,7.9996,0,0,1,5.65674,2.34326l19.31348,19.31348A7.99962,7.99962,0,0,0,107.30762,184h41.373a7.9996,7.9996,0,0,0,5.65674-2.34326l19.31348-19.31348A7.99962,7.99962,0,0,1,179.30762,160h36.68652l.00586.00439V48a7.99977,7.99977,0,0,0-8-8H48a7.99977,7.99977,0,0,0-8,8V160Z" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M208.00293,32h-160a16.01833,16.01833,0,0,0-16,16V159.88379c-.00049.03906-.00586.07715-.00586.11621s.00537.07715.00586.11621V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208.00293,32Zm0,176h-160V168l28.68066-.001,19.31446,19.31641A15.89834,15.89834,0,0,0,107.31055,192h41.373a15.89606,15.89606,0,0,0,11.31348-4.68652L179.31055,168h28.6997l.00245,40Z"/>
        </>);
        case "light":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Tray = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Tray;
