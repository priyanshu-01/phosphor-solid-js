/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="134.059 161.941 168 128 134.059 94.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="134.059 161.941 168 128 134.059 94.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm47.38477,107.05469a7.99866,7.99866,0,0,1-1.73829,2.61133l-33.92773,33.92773a7.99915,7.99915,0,0,1-11.3125-11.3125L148.6875,136H88a8,8,0,0,1,0-16h60.6875L128.40625,99.71875a7.99915,7.99915,0,0,1,11.3125-11.3125L173.64648,122.334a8.02367,8.02367,0,0,1,1.73829,8.72071Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="134.059 161.941 168 128 134.059 94.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="134.059 161.941 168 128 134.059 94.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="134.059 161.941 168 128 134.059 94.059" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowCircleRight = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowCircleRight;
