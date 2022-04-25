/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="200" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M20.20855,75.93124c63.48474-47.90809,152.098-47.90812,215.58263.00015a8.015,8.015,0,0,1,1.201,11.61025c-19.04723,22.44929-82.94714,97.76169-102.95188,121.33925a7.93583,7.93583,0,0,1-12.14044-.0705L19.03968,87.57941A8.055,8.055,0,0,1,20.20855,75.93124Z" opacity="0.2"/>
  <path d="M20.20855,75.93124c63.48474-47.90809,152.098-47.90812,215.58263.00015a8.015,8.015,0,0,1,1.201,11.61025c-19.04723,22.44929-82.94714,97.76169-102.95188,121.33925a7.93583,7.93583,0,0,1-12.14044-.0705L19.03968,87.57941A8.055,8.055,0,0,1,20.20855,75.93124Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M246.86034,80.49665a15.72068,15.72068,0,0,0-6.209-10.91944C174.34325,19.50788,81.71141,19.49665,15.39061,69.54548a15.73529,15.73529,0,0,0-6.21142,10.936,16.27674,16.27674,0,0,0,3.76074,12.27393L115.85985,214.05768a15.95117,15.95117,0,0,0,12.17383,5.65528A15.77638,15.77638,0,0,0,140.081,214.127L243.12206,92.6822A16.16767,16.16767,0,0,0,246.86034,80.49665Z"/>
        </>);
        case "light":
            return (<>
          <path d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="200" r="10"/>
        </>);
        case "thin":
            return (<>
          <path d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="200" r="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="200" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const WifiHigh = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default WifiHigh;
