/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <line x1="128" y1="192" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="136" r="16"/>
  <circle cx="164" cy="136" r="16"/>
  <polyline points="144 176 128 192 112 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152,48l55.76169-13.94042a8,8,0,0,1,9.80326,6.28683l16.41859,87.56583c1.54221,8.22509-8.98332,12.99712-14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M104,48,48.23831,34.05958A8,8,0,0,0,38.435,40.34641L22.01646,127.91224c-1.54221,8.22509,8.98332,12.99712,14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273L104,48h48Z" opacity="0.2"/>
  <line x1="128" y1="192" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>
  <polyline points="144 176 128 192 112 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,48l55.76169-13.94042a8,8,0,0,1,9.80326,6.28683l16.41859,87.56583c1.54221,8.22509-8.98332,12.99712-14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,48,48.23831,34.05958A8,8,0,0,0,38.435,40.34641L22.01646,127.91224c-1.54221,8.22509,8.98332,12.99712,14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68.72656,15.959a16.26177,16.26177,0,0,1-6.72363,1.47657A15.60358,15.60358,0,0,1,216,141.7915V184a40.04552,40.04552,0,0,1-40,40H80a40.04552,40.04552,0,0,1-40-40V141.7915a15.60358,15.60358,0,0,1-10.00293,3.644,16.254,16.254,0,0,1-6.72363-1.47657,15.76942,15.76942,0,0,1-9.12012-17.521l16.418-87.56592A16.00071,16.00071,0,0,1,50.17871,26.29834L104.98535,40h46.0293l54.80664-13.70166a15.99961,15.99961,0,0,1,19.60644,12.57227L241.84668,126.438A15.76942,15.76942,0,0,1,232.72656,143.959ZM200,184V122.04L148.11133,56H107.88867L56,122.04V184a24.0275,24.0275,0,0,0,24,24h40V195.314l-13.65723-13.65722a8.00018,8.00018,0,0,1,11.31446-11.31348L128,180.68652l10.34277-10.34326a8.00018,8.00018,0,0,1,11.31446,11.31348L136,195.314V208h40A24.0275,24.0275,0,0,0,200,184Z"/>
        </>);
        case "light":
            return (<>
          <line x1="128" y1="192" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="140" r="10"/>
  <circle cx="164" cy="140" r="10"/>
  <polyline points="144 176 128 192 112 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M152,48l55.76169-13.94042a8,8,0,0,1,9.80326,6.28683l16.41859,87.56583c1.54221,8.22509-8.98332,12.99712-14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M104,48,48.23831,34.05958A8,8,0,0,0,38.435,40.34641L22.01646,127.91224c-1.54221,8.22509,8.98332,12.99712,14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <line x1="128" y1="192" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="140" r="8"/>
  <circle cx="164" cy="140" r="8"/>
  <polyline points="144 176 128 192 112 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M152,48l55.76169-13.94042a8,8,0,0,1,9.80326,6.28683l16.41859,87.56583c1.54221,8.22509-8.98332,12.99712-14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M104,48,48.23831,34.05958A8,8,0,0,0,38.435,40.34641L22.01646,127.91224c-1.54221,8.22509,8.98332,12.99712,14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <line x1="128" y1="192" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>
  <polyline points="144 176 128 192 112 176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,48l55.76169-13.94042a8,8,0,0,1,9.80326,6.28683l16.41859,87.56583c1.54221,8.22509-8.98332,12.99712-14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,48,48.23831,34.05958A8,8,0,0,0,38.435,40.34641L22.01646,127.91224c-1.54221,8.22509,8.98332,12.99712,14.15352,6.41688Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,119.27273V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.27273" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Dog = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Dog;
