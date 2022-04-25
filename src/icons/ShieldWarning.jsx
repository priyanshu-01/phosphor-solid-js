/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99951" y1="92" x2="127.99951" y2="132" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="172" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z" opacity="0.2"/>
  <path d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99951" y1="96" x2="127.99951" y2="136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="172" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M207.99951,40h-160a16.01833,16.01833,0,0,0-16,16v58.667c0,89.45313,75.82617,119.124,91.02637,124.16406a15.48781,15.48781,0,0,0,9.94726,0c15.2002-5.04,91.02637-34.71093,91.02637-124.16406V56A16.01833,16.01833,0,0,0,207.99951,40Zm-88,56a8,8,0,1,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,127.99951,184Z"/>
        </>);
        case "light":
            return (<>
          <path d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99951" y1="96" x2="127.99951" y2="136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="172" r="10"/>
        </>);
        case "thin":
            return (<>
          <path d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99951" y1="96" x2="127.99951" y2="136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="172" r="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M40,114.66667V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="96" x2="128" y2="136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="172" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ShieldWarning = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ShieldWarning;
