/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="208" cy="128" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="48" cy="128" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="128" r="24" opacity="0.1"/>
  <circle cx="48" cy="128" r="24" opacity="0.1"/>
  <circle cx="208" cy="128" r="24" opacity="0.1"/>
  <circle cx="128" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="48" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="208" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M156,128a28,28,0,1,1-28-28A28.02769,28.02769,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,208,100Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="48" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="208" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="48" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="208" cy="128" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="48" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="208" cy="128" r="24" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const DotsThreeOutline = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default DotsThreeOutline;
