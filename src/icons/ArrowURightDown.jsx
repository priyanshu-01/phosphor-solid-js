/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="120 176 168 224 216 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="120 176 168 224 216 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M221.65723,181.65674l-48,48a8.00063,8.00063,0,0,1-11.31446,0l-48-48A8.00037,8.00037,0,0,1,120,168h40V88a48,48,0,0,0-96,0v88a8,8,0,0,1-16,0V88a64,64,0,0,1,128,0v80h40a8.00038,8.00038,0,0,1,5.65723,13.65674Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="120 176 168 224 216 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="120 176 168 224 216 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="120 176 168 224 216 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56,176V88a56,56,0,0,1,56-56h.00011A55.99988,55.99988,0,0,1,168,87.99989V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowURightDown = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowURightDown;
