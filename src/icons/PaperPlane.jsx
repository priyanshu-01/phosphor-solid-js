/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" opacity="0.2"/>
  <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M236.43432,201.4707l-94.59179-168.915a16.00119,16.00119,0,0,0-27.92188,0L19.32885,201.47021A16.00042,16.00042,0,0,0,38.67065,224.356l81.21094-29.00391V120a8,8,0,1,1,16,0v75.352L217.09253,224.356a16.171,16.171,0,0,0,5.44531.95117,16.02221,16.02221,0,0,0,13.89648-23.83643Z"/>
        </>);
        case "light":
            return (<>
          <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const PaperPlane = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default PaperPlane;
