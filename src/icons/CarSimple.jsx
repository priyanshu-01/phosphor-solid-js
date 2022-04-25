/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M32,120,61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120Z" opacity="0.2"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M240,112H229.199L201.42188,49.501A16.01649,16.01649,0,0,0,186.80078,40H69.19922a16.0158,16.0158,0,0,0-14.6211,9.502L26.801,112H16a8,8,0,0,0,0,16h8v80a16.01833,16.01833,0,0,0,16,16H64a16.01833,16.01833,0,0,0,16-16V192h96v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128h8a8,8,0,0,0,0-16Z"/>
        </>);
        case "light":
            return (<>
          <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.88849,52.75089A8,8,0,0,1,69.199,48H186.801a8,8,0,0,1,7.31049,4.75089L224,120v88A8,8,0,0,1,216,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const CarSimple = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default CarSimple;
