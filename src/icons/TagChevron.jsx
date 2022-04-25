/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" opacity="0.2"/>
  <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M235.7041,136.86719l-42.667,64h0a15.96753,15.96753,0,0,1-13.3125,7.124H24.00586a7.99977,7.99977,0,0,1-6.65625-12.4375L62.39062,128,17.34912,60.42871a8.00013,8.00013,0,0,1,6.65674-12.4375H179.72461a15.96734,15.96734,0,0,1,13.3125,7.125l42.667,64A15.96086,15.96086,0,0,1,235.7041,136.86719Z"/>
        </>);
        case "light":
            return (<>
          <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const TagChevron = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default TagChevron;
