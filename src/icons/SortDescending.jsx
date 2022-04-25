/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="144 87.994 184 47.994 223.999 87.987" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="143.99359" x2="184" y2="47.99359" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="63.99353" x2="103.99902" y2="63.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="191.99353" x2="183.99902" y2="191.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="144 87.994 184 47.994 223.999 87.987" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="143.99359" x2="184" y2="47.99359" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="63.99353" x2="103.99902" y2="63.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="191.99353" x2="183.99902" y2="191.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M231.39062,91.04724A7.99937,7.99937,0,0,1,224,95.9867l-32,.00268v48.00415a8,8,0,0,1-16,0V95.99085l-31.999.00268a8.00037,8.00037,0,0,1-5.65772-13.65723l40-40a8.00122,8.00122,0,0,1,11.313,0l39.999,39.99317A8.00019,8.00019,0,0,1,231.39062,91.04724ZM48,135.99353h71.999a8,8,0,1,0,0-16H48a8,8,0,0,0,0,16Zm0-64h55.999a8,8,0,0,0,0-16H48a8,8,0,1,0,0,16Zm135.999,112H48a8,8,0,0,0,0,16H183.999a8,8,0,0,0,0-16Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="144 87.994 184 47.994 223.999 87.987" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="143.99359" x2="184" y2="47.99359" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="63.99353" x2="103.99902" y2="63.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="191.99353" x2="183.99902" y2="191.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="144 87.994 184 47.994 223.999 87.987" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="143.99359" x2="184" y2="47.99359" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="63.99353" x2="103.99902" y2="63.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="191.99353" x2="183.99902" y2="191.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="144 87.994 184 47.994 223.999 87.987" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="143.99359" x2="184" y2="47.99359" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="127.99353" x2="119.99902" y2="127.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="63.99353" x2="103.99902" y2="63.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="191.99353" x2="183.99902" y2="191.99353" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SortDescending = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SortDescending;
