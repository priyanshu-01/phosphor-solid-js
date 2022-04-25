/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="80 96 120 128 80 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="143.99414" y1="160" x2="175.99414" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="32" y="48" width="192" height="160" rx="8.48528" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "duotone":
            return (<>
          <rect x="32" y="48" width="192" height="160" rx="8.48528" opacity="0.2"/>
  <polyline points="80 96 120 128 80 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="135.99414" y1="160" x2="175.99414" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="32" y="48" width="192" height="160" rx="8.48528" stroke-width="16.97056" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "fill":
            return (<>
          <path d="M215.51465,39.51465H40.48535a16.99025,16.99025,0,0,0-16.9707,16.9707v143.0293a16.99025,16.99025,0,0,0,16.9707,16.9707h175.0293a16.99025,16.99025,0,0,0,16.9707-16.9707V56.48535A16.99025,16.99025,0,0,0,215.51465,39.51465Zm-94.51758,94.73242-40,32a7.99979,7.99979,0,1,1-9.99414-12.49414L103.19336,128,71.00293,102.24707a7.99979,7.99979,0,1,1,9.99414-12.49414l40,32a7.99943,7.99943,0,0,1,0,12.49414ZM179.99414,168h-40a8,8,0,0,1,0-16h40a8,8,0,1,1,0,16Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="80 96 120 128 80 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="135.99414" y1="160" x2="175.99414" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="32" y="48" width="192" height="160" rx="8.48528" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "thin":
            return (<>
          <polyline points="80 96 120 128 80 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="135.99414" y1="160" x2="175.99414" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="32" y="48" width="192" height="160" rx="8.48528" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "regular":
            return (<>
          <polyline points="80 96 120 128 80 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="135.99414" y1="160" x2="175.99414" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="32" y="48" width="192" height="160" rx="8.48528" stroke-width="16.97056" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const TerminalWindow = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default TerminalWindow;
