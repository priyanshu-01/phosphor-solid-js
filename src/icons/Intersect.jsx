/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="96" cy="96" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="109.08829" y1="109.08829" x2="146.9117" y2="146.9117" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M88,160a70.51259,70.51259,0,0,0,.73242,7.26758A70.51259,70.51259,0,0,0,96,168a71.99981,71.99981,0,0,0,72-72,70.51259,70.51259,0,0,0-.73242-7.26758A70.51259,70.51259,0,0,0,160,88,71.99981,71.99981,0,0,0,88,160Z" opacity="0.2"/>
  <circle cx="96" cy="96" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M174.63477,81.36523a79.99168,79.99168,0,1,0-93.26954,93.26954,79.99168,79.99168,0,1,0,93.26954-93.26954ZM32,96A64.00385,64.00385,0,0,1,157.98779,80.05127,80.06522,80.06522,0,0,0,80.051,157.98779,64.1144,64.1144,0,0,1,32,96ZM160,224a64.11421,64.11421,0,0,1-61.98779-48.05127A80.06522,80.06522,0,0,0,175.949,98.01221,64.00389,64.00389,0,0,1,160,224Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="96" cy="96" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="96" cy="96" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="96" cy="96" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Intersect = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Intersect;
