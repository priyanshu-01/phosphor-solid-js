/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M207.99414,32h-160a16.01583,16.01583,0,0,0-16,16V208a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V48A16.01582,16.01582,0,0,0,207.99414,32ZM167.60352,139.71875l-33.94336,33.92773a8.02367,8.02367,0,0,1-11.332,0L88.40039,139.71875a7.99915,7.99915,0,0,1,11.3125-11.3125l20.28125,20.28125V88a8,8,0,1,1,16,0v60.69238L156.291,128.40625a7.99915,7.99915,0,0,1,11.3125,11.3125Z"/>
        </>);
        case "light":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowSquareDown = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowSquareDown;
