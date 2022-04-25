/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="94.011 170 136 128 94.011 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="24" y1="128" x2="135.97057" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="94.011 170 136 128 94.011 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="24" y1="128" x2="135.97057" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M141.65723,133.65625l-41.98828,42A8.00033,8.00033,0,0,1,86.01074,170V136H24a8,8,0,0,1,0-16H86.01074V86A8.00033,8.00033,0,0,1,99.669,80.34375l41.98828,42A7.99974,7.99974,0,0,1,141.65723,133.65625ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="94.011 170 136 128 94.011 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="24" y1="128" x2="135.97057" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="94.011 170 136 128 94.011 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="24" y1="128" x2="135.97057" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="94.011 170 136 128 94.011 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="24" y1="128" x2="135.97057" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SignIn = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SignIn;
