/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M28.13612,88.20841a52.01064,52.01064,0,0,1,99.864-16.24342l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-33.69291-18.868-61.96423-47.99889" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M128,216S28,160,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92C228,160,128,216,128,216Z" opacity="0.2"/>
  <polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M176,32a59.85506,59.85506,0,0,0-48,23.95947A60.02029,60.02029,0,0,0,20,92a85.2156,85.2156,0,0,0,4.92969,28H67.71875l13.625-20.4375a7.99959,7.99959,0,0,1,13.3125,0L120,137.57764l9.34375-14.01514A7.99943,7.99943,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28125l-13.625,20.4375a7.99959,7.99959,0,0,1-13.3125,0L88,118.42236,78.65625,132.4375A7.99943,7.99943,0,0,1,72,136H31.98389c26.65088,49.81006,88.77392,85.11328,92.10693,86.98a8.00089,8.00089,0,0,0,7.81836,0,317.34027,317.34027,0,0,0,51.44238-37.53369C218.28613,154.00488,236,122.56494,236,92A60.06812,60.06812,0,0,0,176,32Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Heartbeat = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Heartbeat;
