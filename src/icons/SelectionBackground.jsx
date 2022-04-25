/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="39.99902" y="91.99414" width="124" height="124" rx="7.75" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="40" x2="144" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M200,40h8a8,8,0,0,1,8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="216" y1="111.99963" x2="216" y2="95.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M200,168h8a8,8,0,0,0,8-8v-8.00037" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M104,40H96a8,8,0,0,0-8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <rect x="39.99902" y="87.99414" width="128" height="128" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="40" x2="144" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M200,40h8a8,8,0,0,1,8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="111.99963" x2="216" y2="95.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M200,168h8a8,8,0,0,0,8-8v-8.00037" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,40H96a8,8,0,0,0-8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,40H96a8,8,0,0,0-8,8V88h72a8,8,0,0,1,8,8v72h40a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Z" opacity="0.2"/>
        </>);
        case "fill":
            return (<>
          <path d="M80,56V48A16.01833,16.01833,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Zm64-8h16a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm64-16h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V48A16.01833,16.01833,0,0,0,208,32Zm8,56a8.00008,8.00008,0,0,0-8,8v16a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,216,88Zm-40.001,7.99414v112a16.01833,16.01833,0,0,1-16,16h-112a16.01833,16.01833,0,0,1-16-16v-112a16.01833,16.01833,0,0,1,16-16h112A16.01833,16.01833,0,0,1,175.999,95.99414Zm-16,0h-112v112h112ZM216,144a8.00008,8.00008,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16.01833,16.01833,0,0,0,16-16v-8A8.00008,8.00008,0,0,0,216,144Z"/>
        </>);
        case "light":
            return (<>
          <rect x="39.99902" y="87.99414" width="128" height="128" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="40" x2="144" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M200,40h8a8,8,0,0,1,8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="216" y1="111.99963" x2="216" y2="95.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M200,168h8a8,8,0,0,0,8-8v-8.00037" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M104,40H96a8,8,0,0,0-8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="39.99902" y="87.99414" width="128" height="128" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="40" x2="144" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M200,40h8a8,8,0,0,1,8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="216" y1="111.99963" x2="216" y2="95.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M200,168h8a8,8,0,0,0,8-8v-8.00037" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M104,40H96a8,8,0,0,0-8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="39.99902" y="87.99414" width="128" height="128" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="160" y1="40" x2="144" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M200,40h8a8,8,0,0,1,8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="111.99963" x2="216" y2="95.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M200,168h8a8,8,0,0,0,8-8v-8.00037" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,40H96a8,8,0,0,0-8,8v7.99963" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SelectionBackground = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SelectionBackground;
