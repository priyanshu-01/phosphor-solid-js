/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" opacity="0.2"/>
  <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M208,100V32a8.00008,8.00008,0,0,0-8-8H56a8,8,0,0,0-5.49316,13.81592L107.87793,92H56a8.00008,8.00008,0,0,0-8,8v68a7.99941,7.99941,0,0,0,2.50684,5.81592l72,68A7.99984,7.99984,0,0,0,136,236V176h64a8,8,0,0,0,5.49316-13.81592L148.12207,108H200A8.00008,8.00008,0,0,0,208,100Z"/>
        </>);
        case "light":
            return (<>
          <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polygon points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const FramerLogo = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default FramerLogo;
