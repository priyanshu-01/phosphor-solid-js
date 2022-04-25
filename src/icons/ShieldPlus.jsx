/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="96" x2="128" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" opacity="0.2"/>
  <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="96" x2="128" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M207.99463,39.99512h-160a16.018,16.018,0,0,0-16,16v58.667c0,89.458,75.82617,119.125,91.02588,124.16406a15.48947,15.48947,0,0,0,9.94775,0c15.2002-5.03906,91.02637-34.70605,91.02637-124.16406v-58.667A16.018,16.018,0,0,0,207.99463,39.99512ZM160,136H136v24a8,8,0,0,1-16,0V136H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"/>
        </>);
        case "light":
            return (<>
          <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="96" x2="128" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="96" x2="128" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M39.99463,114.66215V55.99548a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57059a7.54755,7.54755,0,0,1-4.9124,0C111.30065,226.51231,39.99463,198.67748,39.99463,114.66215Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="128" x2="160" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="96" x2="128" y2="160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ShieldPlus = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ShieldPlus;
