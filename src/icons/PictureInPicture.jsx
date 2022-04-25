/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M216,56H40a7.99993,7.99993,0,0,0-8,8V192a7.99993,7.99993,0,0,0,8,8h96V136a7.99993,7.99993,0,0,1,8-8h80V64A7.99993,7.99993,0,0,0,216,56Z" opacity="0.2"/>
  <rect x="32" y="56" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M216,48H40A16.01833,16.01833,0,0,0,24,64V192a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,216,48ZM40,64H216l.00439,56H144a16.01833,16.01833,0,0,0-16,16v56H40Z"/>
        </>);
        case "light":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="32" y="56" width="192" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const PictureInPicture = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default PictureInPicture;
