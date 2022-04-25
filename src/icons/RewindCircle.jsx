/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="168 156 132 128 168 100 168 156" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="112 156 76 128 112 100 112 156" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32ZM112,160,64,128l48-32Zm64,0-48-32,48-32Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M24,128A104,104,0,1,0,128,24,104.11791,104.11791,0,0,0,24,128Zm44,0a7.99968,7.99968,0,0,1,3.41211-6.55371l40-28A8.00015,8.00015,0,0,1,124,100v28a7.99968,7.99968,0,0,1,3.41211-6.55371l40-28A8.00015,8.00015,0,0,1,180,100v56a8,8,0,0,1-12.58789,6.55371l-40-28A7.99968,7.99968,0,0,1,124,128v28a8,8,0,0,1-12.58789,6.55371l-40-28A7.99968,7.99968,0,0,1,68,128Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const RewindCircle = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default RewindCircle;
