/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" opacity="0.2"/>
  <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z"/>
        </>);
        case "light":
            return (<>
          <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Play = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Play;
