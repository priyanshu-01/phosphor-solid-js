/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polygon points="120 32 24 128 120 224 120 176 176 176 176 80 120 80 120 32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polygon points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32" opacity="0.2"/>
  <polygon points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M114.34277,229.65723l-96-96a8.003,8.003,0,0,1,0-11.31446l96-96A8.00065,8.00065,0,0,1,128,32V72h56a8.00039,8.00039,0,0,1,8,8v96a8.00039,8.00039,0,0,1-8,8H128v40a8.00066,8.00066,0,0,1-13.65723,5.65723ZM216,184a8.00039,8.00039,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00039,8.00039,0,0,0,216,184Z"/>
        </>);
        case "light":
            return (<>
          <polygon points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polygon points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polygon points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="216" y1="176" x2="216" y2="80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowFatLineLeft = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ArrowFatLineLeft;
