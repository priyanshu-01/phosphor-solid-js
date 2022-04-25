/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M218.89989,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="79.98242" y1="88" x2="79.98242" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M190.61551,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"/>
  <path d="M218.91161,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.9707" y1="88" x2="79.9707" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.62723,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M224.56836,71.43935a8.00053,8.00053,0,0,0-11.31445,11.31446,63.99788,63.99788,0,0,1,0,90.50976A8.00053,8.00053,0,0,0,224.56836,184.578a80.00148,80.00148,0,0,0,0-113.13868Z"/>
    <path d="M155.51465,24.82217a7.99448,7.99448,0,0,0-8.42578.87207l-69.834,54.31445H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31445A7.99958,7.99958,0,0,0,160,224.00869v-192A7.9997,7.9997,0,0,0,155.51465,24.82217ZM32,96.00869H71.9707v64H32Z"/>
    <path d="M184.96973,99.72549a7.99913,7.99913,0,0,0,.001,11.31347,23.99832,23.99832,0,0,1,0,33.93946,7.99983,7.99983,0,1,0,11.3125,11.31445,39.99719,39.99719,0,0,0,0-56.56836A7.99825,7.99825,0,0,0,184.96973,99.72549Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <path d="M218.894,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="79.98828" y1="88" x2="79.98828" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M190.60965,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <path d="M218.88817,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="79.99414" y1="88" x2="79.99414" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M190.60379,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M218.88231,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.59793,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const SpeakerHigh = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default SpeakerHigh;
