/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" opacity="0.2"/>
  <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M232,84v40a7.99977,7.99977,0,0,1-8,8,103.32406,103.32406,0,0,1-48.00049-11.70752L176,156A76,76,0,1,1,86.59766,81.17971,7.99952,7.99952,0,0,1,96,89.05569l-.00049,41.63916a7.99971,7.99971,0,0,1-4.56689,7.22607A20.00272,20.00272,0,1,0,120,156V28a7.99977,7.99977,0,0,1,8-8h40a7.99977,7.99977,0,0,1,8,8,48.05436,48.05436,0,0,0,48,48A7.99977,7.99977,0,0,1,232,84Z"/>
        </>);
        case "light":
            return (<>
          <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const TiktokLogo = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default TiktokLogo;
