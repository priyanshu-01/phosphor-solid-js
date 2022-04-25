/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="100" cy="128" r="16"/>
  <circle cx="156" cy="128" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" opacity="0.2"/>
  <path d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M216.002,47.99316h-176a16.01583,16.01583,0,0,0-16,16V222.82129a15.97593,15.97593,0,0,0,26.29688,12.25l31.75781-26.70313,133.94531-.375a16.01581,16.01581,0,0,0,16-16v-128A16.01582,16.01582,0,0,0,216.002,47.99316ZM80.001,140.001a12,12,0,1,1,12-12A12,12,0,0,1,80.001,140.001Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.001,140.001Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.001,140.001Z"/>
        </>);
        case "light":
            return (<>
          <path d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128" r="10"/>
  <circle cx="176" cy="128" r="10"/>
  <circle cx="80" cy="128" r="10"/>
        </>);
        case "thin":
            return (<>
          <path d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128" r="8"/>
  <circle cx="80" cy="128" r="8"/>
  <circle cx="176" cy="128" r="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="80" cy="128" r="12"/>
  <circle cx="176" cy="128" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ChatDots = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ChatDots;
