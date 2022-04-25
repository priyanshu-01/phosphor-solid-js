/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M92.0127,88V52A36.00169,36.00169,0,0,1,163.793,48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <rect x="39.99414" y="88" width="176" height="128" rx="8" opacity="0.2"/>
  <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M207.99463,80h-108V52a28,28,0,0,1,56,0,8,8,0,0,0,16,0,44,44,0,0,0-88,0V80h-36a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,207.99463,80Z"/>
        </>);
        case "light":
            return (<>
          <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const LockSimpleOpen = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default LockSimpleOpen;
