/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M143.99951,79.46017V203.05573a8,8,0,0,0,4.42229,7.15542L167.07945,219.54a8,8,0,0,0,11.33885-5.21513L191.99951,160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M151.99951,160h40a40,40,0,0,0,0-80h-40Z" opacity="0.2"/>
  <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M240,120a48.055,48.055,0,0,0-48-48H152.0166c-.51855-.00195-52.38086-.68945-101.72656-42.07617A15.999,15.999,0,0,0,23.999,42.168V197.832a15.83932,15.83932,0,0,0,9.2295,14.49121,16.07273,16.07273,0,0,0,6.80664,1.52539,15.91249,15.91249,0,0,0,10.2539-3.77148C88.1665,178.30859,127.52344,170.521,144,168.61572v35.103a15.965,15.965,0,0,0,7.124,13.3125l10.99317,7.3291a16.00058,16.00058,0,0,0,24.39648-9.43262L198.354,167.56641A48.06327,48.06327,0,0,0,240,120Zm-69.00879,91.04688L160,203.71875V168h21.75391ZM192,152H160V88h32a32,32,0,0,1,0,64Z"/>
        </>);
        case "light":
            return (<>
          <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M152,80V203.71853a8,8,0,0,0,3.5624,6.6564l10.99213,7.32809a8,8,0,0,0,12.19874-4.71612L192,160" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M192,160a40,40,0,0,0,0-80H152S97.54828,80,45.14894,36.05237A7.99844,7.99844,0,0,0,32,42.16761V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54828,160,152,160,152,160Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Megaphone = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Megaphone;
