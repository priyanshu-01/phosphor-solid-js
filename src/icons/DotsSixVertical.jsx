/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="92" cy="60" r="16"/>
  <circle cx="164" cy="60" r="16"/>
  <circle cx="92" cy="128" r="16"/>
  <circle cx="164" cy="128" r="16"/>
  <circle cx="92" cy="196" r="16"/>
  <circle cx="164" cy="196" r="16"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="92" cy="60" r="12"/>
  <circle cx="164" cy="60" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="196" r="12"/>
  <circle cx="164" cy="196" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M104,60.0001a12,12,0,1,1-12-12A12,12,0,0,1,104,60.0001Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72.0001Zm-72,44a12,12,0,1,0,12,12A12,12,0,0,0,92,116.0001Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116.0001Zm-72,68a12,12,0,1,0,12,12A12,12,0,0,0,92,184.0001Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184.0001Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="92" cy="60" r="10"/>
  <circle cx="164" cy="60" r="10"/>
  <circle cx="92" cy="128" r="10"/>
  <circle cx="164" cy="128" r="10"/>
  <circle cx="92" cy="196" r="10"/>
  <circle cx="164" cy="196" r="10"/>
        </>);
        case "thin":
            return (<>
          <circle cx="92" cy="60" r="8"/>
  <circle cx="164" cy="60" r="8"/>
  <circle cx="92" cy="128" r="8"/>
  <circle cx="164" cy="128" r="8"/>
  <circle cx="92" cy="196" r="8"/>
  <circle cx="164" cy="196" r="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="92" cy="60" r="12"/>
  <circle cx="164" cy="60" r="12"/>
  <circle cx="92" cy="128" r="12"/>
  <circle cx="164" cy="128" r="12"/>
  <circle cx="92" cy="196" r="12"/>
  <circle cx="164" cy="196" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const DotsSixVertical = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default DotsSixVertical;
