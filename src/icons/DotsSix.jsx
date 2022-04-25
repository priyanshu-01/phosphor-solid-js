/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="60" cy="92" r="16"/>
  <circle cx="128" cy="92" r="16"/>
  <circle cx="196" cy="92" r="16"/>
  <circle cx="60" cy="164" r="16"/>
  <circle cx="128" cy="164.0001" r="16"/>
  <circle cx="196" cy="164" r="16"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="60" cy="92" r="12"/>
  <circle cx="128" cy="92" r="12"/>
  <circle cx="196" cy="92" r="12"/>
  <circle cx="60" cy="164" r="12"/>
  <circle cx="128" cy="164.0001" r="12"/>
  <circle cx="196" cy="164" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M72,92.0001a12,12,0,1,1-12-12A12,12,0,0,1,72,92.0001Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80.0001Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104.0001Zm-136,48a12,12,0,1,0,12,12A12,12,0,0,0,60,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152.0001Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="60" cy="92" r="10"/>
  <circle cx="128" cy="92" r="10"/>
  <circle cx="196" cy="92" r="10"/>
  <circle cx="60" cy="164" r="10"/>
  <circle cx="128" cy="164.0001" r="10"/>
  <circle cx="196" cy="164" r="10"/>
        </>);
        case "thin":
            return (<>
          <circle cx="60" cy="92" r="8"/>
  <circle cx="128" cy="92" r="8"/>
  <circle cx="196" cy="92" r="8"/>
  <circle cx="60" cy="164" r="8"/>
  <circle cx="128" cy="164.0001" r="8"/>
  <circle cx="196" cy="164" r="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="60" cy="92" r="12"/>
  <circle cx="128" cy="92" r="12"/>
  <circle cx="196" cy="92" r="12"/>
  <circle cx="60" cy="164" r="12"/>
  <circle cx="128" cy="164.0001" r="12"/>
  <circle cx="196" cy="164" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const DotsSix = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default DotsSix;
