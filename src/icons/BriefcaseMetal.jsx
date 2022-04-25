/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M168,68V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M32,112H224V80a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <path d="M32,176H224v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8Z" opacity="0.2"/>
  <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <rect x="24" y="120" width="208" height="48"/>
    <path d="M24,184v24a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V184Z"/>
    <path d="M232,104V80a16.01833,16.01833,0,0,0-16-16H176V56a24.0275,24.0275,0,0,0-24-24H104A24.0275,24.0275,0,0,0,80,56v8H40A16.01833,16.01833,0,0,0,24,80v24ZM96,56a8.00917,8.00917,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8H96Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="72" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const BriefcaseMetal = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default BriefcaseMetal;
