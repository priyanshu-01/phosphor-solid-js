/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="48" y1="72" x2="208" y2="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="184" x2="208" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <rect x="48" y="64" width="160" height="128" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="48" y1="64" x2="208" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="192" x2="208" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM64,40H192a8.00917,8.00917,0,0,1,8,8v8H56V48A8.00917,8.00917,0,0,1,64,40ZM192,216H64a8.00917,8.00917,0,0,1-8-8v-8H200v8A8.00917,8.00917,0,0,1,192,216Z"/>
        </>);
        case "light":
            return (<>
          <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="48" y1="64" x2="208" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="192" x2="208" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="48" y1="64" x2="208" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="192" x2="208" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="48" y1="64" x2="208" y2="64" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="192" x2="208" y2="192" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const DeviceTablet = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default DeviceTablet;
