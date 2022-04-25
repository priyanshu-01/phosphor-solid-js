/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "duotone":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "fill":
            return (<>
          <path d="M208.00146,32h-160a16.01582,16.01582,0,0,0-16,16V208a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V48A16.01581,16.01581,0,0,0,208.00146,32ZM165.65771,154.34375a7.99915,7.99915,0,1,1-11.3125,11.3125L128.00146,139.3125l-26.34375,26.34375a7.99915,7.99915,0,0,1-11.3125-11.3125L116.689,128,90.34521,101.65625a7.99915,7.99915,0,0,1,11.3125-11.3125l26.34375,26.34375,26.34375-26.34375a7.99915,7.99915,0,0,1,11.3125,11.3125L139.314,128Z"/>
        </>);
        case "light":
            return (<>
          <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "thin":
            return (<>
          <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        case "regular":
            return (<>
          <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const XSquare = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default XSquare;
