/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="68" width="192" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,212V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V212" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M88,72V216l-47.99219,0a8,8,0,0,1-8-8v-128a8,8,0,0,1,8-8Z" opacity="0.2"/>
  <path d="M168.00781,72V216l47.99219,0a8,8,0,0,0,8-8v-128a8,8,0,0,0-8-8Z" opacity="0.2"/>
  <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M216,64H175.99219V56a24.0275,24.0275,0,0,0-24-24h-48a24.0275,24.0275,0,0,0-24,24v8H40A16.01833,16.01833,0,0,0,24,80V208a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216,64ZM95.99219,80h64V208h-64Zm0-24a8.00916,8.00916,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8h-64Z"/>
        </>);
        case "light":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Suitcase = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Suitcase;
