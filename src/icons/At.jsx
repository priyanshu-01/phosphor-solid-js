/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="127.99121" cy="127.99512" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M181.07274,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="127.99512" r="96" opacity="0.2"/>
  <circle cx="127.99512" cy="127.99512" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M181.07664,207.99724a96.00808,96.00808,0,1,1,42.91848-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M128,23.99121a104,104,0,1,0,93.78125,148.9364A49.2519,49.2519,0,0,1,204,175.99121c-18.28711,0-28.52441-8.00488-33.8916-14.7207a39.57375,39.57375,0,0,1-3.37793-4.96948A48.00646,48.00646,0,1,1,160,92.2522v-4.261a8,8,0,0,1,16,0v40c0,14.59863,4.85742,32,28,32,22.3457,0,27.64258-16.22314,27.98047-30.4823.00732-.50574.01953-1.01037.01953-1.5177A104.11791,104.11791,0,0,0,128,23.99121Z"/>
    <circle cx="128" cy="127.99121" r="32"/>
  </g>
        </>);
        case "light":
            return (<>
          <circle cx="127.99512" cy="127.99512" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M181.07664,207.99724a96.00808,96.00808,0,1,1,42.91848-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="127.99902" cy="127.99512" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M181.08055,207.99724A96.00809,96.00809,0,1,1,223.999,127.99512c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128.00293" cy="127.99512" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M181.08446,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const At = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default At;
