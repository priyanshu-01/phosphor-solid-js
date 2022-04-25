/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="156" y1="152" x2="100" y2="152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="124" x2="128" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="176" y1="20" x2="176" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="80" y1="20" x2="80" y2="40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="156" y1="152" x2="100" y2="152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="124" x2="128" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M207.99414,31.99707h-24v-8a8,8,0,0,0-16,0v8h-80v-8a8,8,0,1,0-16,0v8h-24a16.01583,16.01583,0,0,0-16,16v160a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16v-160A16.01582,16.01582,0,0,0,207.99414,31.99707ZM156,160H136v20a8,8,0,0,1-16,0V160H100a8,8,0,0,1,0-16h20V124a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16Zm51.99414-80.00293h-160v-32h24v8a8,8,0,0,0,16,0v-8h80v8a8,8,0,1,0,16,0v-8h24Z"/>
        </>);
        case "light":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="156" y1="152" x2="100" y2="152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="124" x2="128" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="156" y1="152" x2="100" y2="152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="124" x2="128" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="156" y1="152" x2="100" y2="152" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="124" x2="128" y2="180" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const CalendarPlus = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default CalendarPlus;
