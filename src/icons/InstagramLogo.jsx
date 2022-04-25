/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="34" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="32" y="32" width="192" height="192" rx="48" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="12"/>
        </>);
        case "fill":
            return (<>
          <g>
    <circle cx="128" cy="128" r="32"/>
    <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="10"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="40" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const InstagramLogo = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default InstagramLogo;
