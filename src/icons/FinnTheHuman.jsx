/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="56" y="100.00002" width="144" height="80" rx="32" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M20,64a24,24,0,1,1,48,0H188a24,24,0,0,1,48,0v88a64,64,0,0,1-64,64H84a64,64,0,0,1-64-64Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="96" cy="140" r="16"/>
  <circle cx="160" cy="140" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M208,40a23.99994,23.99994,0,0,0-24,24H72a24,24,0,0,0-48,0v80a64,64,0,0,0,64,64h80a64,64,0,0,0,64-64V64A23.99994,23.99994,0,0,0,208,40Zm-8,104a32,32,0,0,1-32,32H88a32.00034,32.00034,0,0,1-32-32v-8a32,32,0,0,1,32-32h80a31.99971,31.99971,0,0,1,32,32Z" opacity="0.2"/>
  <rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M176,140a12,12,0,1,1-12-12A12.01343,12.01343,0,0,1,176,140ZM92,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,92,128ZM240,64v80a72.08124,72.08124,0,0,1-72,72H88a72.08124,72.08124,0,0,1-72-72V64a32.00221,32.00221,0,0,1,62.98779-8h98.02442A32.00221,32.00221,0,0,1,240,64Zm-40,72a31.99971,31.99971,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32.00034,32.00034,0,0,0,32,32h80a32,32,0,0,0,32-32Z"/>
        </>);
        case "light":
            return (<>
          <rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="140" r="10"/>
  <circle cx="164" cy="140" r="10"/>
        </>);
        case "thin":
            return (<>
          <rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="140" r="8"/>
  <circle cx="164" cy="140" r="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="56" y="104.00002" width="144" height="72" rx="32" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const FinnTheHuman = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default FinnTheHuman;
