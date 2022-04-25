/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "duotone":
            return (<>
          <polygon points="168 87.993 168 167.993 216 167.993 216 39.993 88 39.993 88 87.993 168 87.993" opacity="0.2"/>
  <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "fill":
            return (<>
          <path d="M215.99414,31.99316h-128a8.0004,8.0004,0,0,0-8,8v40.001h-40.001a8.0004,8.0004,0,0,0-8,8v128a8.0004,8.0004,0,0,0,8,8h128a8.00039,8.00039,0,0,0,8-8v-40.001h40.001a8.00039,8.00039,0,0,0,8-8v-128A8.0004,8.0004,0,0,0,215.99414,31.99316Zm-8,128h-32.001v-71.999a8.00039,8.00039,0,0,0-8-8h-71.999v-32.001h112Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "thin":
            return (<>
          <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "regular":
            return (<>
          <polyline points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99902" y="87.99414" width="128" height="128" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Copy = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Copy;
