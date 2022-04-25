/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" opacity="0.2"/>
  <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M219.4873,88.43359,50.18457,29.82812A15.99955,15.99955,0,0,0,29.83105,50.18164l58.6045,169.30371A15.75666,15.75666,0,0,0,103.53516,230.251c.09863,0,.19922-.001.29785-.00293a15.76424,15.76424,0,0,0,15.01465-11.292l23.55566-76.55468L218.96,118.8457a16.00021,16.00021,0,0,0,.52734-30.41211Z"/>
        </>);
        case "light":
            return (<>
          <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const NavigationArrow = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default NavigationArrow;
