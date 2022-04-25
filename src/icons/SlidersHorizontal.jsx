/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="147.99951" y1="171.99353" x2="39.99951" y2="171.99365" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="215.99951" y1="171.99365" x2="187.99951" y2="171.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="167.99951" cy="171.99353" r="20" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="83.99951" y1="83.99353" x2="39.99951" y2="83.99294" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="215.99951" y1="83.99294" x2="123.99951" y2="83.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="103.99951" cy="83.99353" r="20" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="103.99951" cy="83.99353" r="20" opacity="0.2"/>
  <line x1="147.99951" y1="171.99353" x2="39.99951" y2="171.99365" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99951" y1="171.99365" x2="187.99951" y2="171.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="167.99951" cy="171.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="83.99951" y1="83.99353" x2="39.99951" y2="83.99294" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99951" y1="83.99294" x2="123.99951" y2="83.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="103.99951" cy="83.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M215.99951,163.99353H194.8291a27.99567,27.99567,0,0,0-53.65918,0H39.99951a8,8,0,0,0,0,16H141.16992a27.99567,27.99567,0,0,0,53.65918,0h21.17041a8,8,0,0,0,0-16Z"/>
    <path d="M39.999,91.99255l37.1709.001a27.99567,27.99567,0,0,0,53.65918,0l85.17041-.001a8,8,0,0,0,0-16l-85.17041.001a27.99567,27.99567,0,0,0-53.65918,0L40,75.99255h-.00049a8,8,0,0,0-.00049,16Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <line x1="147.99951" y1="171.99353" x2="39.99951" y2="171.99365" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="215.99951" y1="171.99365" x2="187.99951" y2="171.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="167.99951" cy="171.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="83.99951" y1="83.99353" x2="39.99951" y2="83.99294" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="215.99951" y1="83.99294" x2="123.99951" y2="83.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="103.99951" cy="83.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="147.99951" y1="171.99353" x2="39.99951" y2="171.99365" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="215.99951" y1="171.99365" x2="187.99951" y2="171.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="167.99951" cy="171.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="83.99951" y1="83.99353" x2="39.99951" y2="83.99294" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="215.99951" y1="83.99294" x2="123.99951" y2="83.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="103.99951" cy="83.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="147.99951" y1="171.99353" x2="39.99951" y2="171.99365" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99951" y1="171.99365" x2="187.99951" y2="171.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="167.99951" cy="171.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="83.99951" y1="83.99353" x2="39.99951" y2="83.99294" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99951" y1="83.99294" x2="123.99951" y2="83.99353" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="103.99951" cy="83.99353" r="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SlidersHorizontal = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SlidersHorizontal;
