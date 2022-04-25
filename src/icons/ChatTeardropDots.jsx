/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="132" cy="128" r="16"/>
  <circle cx="180" cy="128" r="16"/>
  <circle cx="84" cy="128" r="16"/>
        </>);
        case "duotone":
            return (<>
          <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" opacity="0.2"/>
  <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="132" cy="128" r="12"/>
  <circle cx="84" cy="128" r="12"/>
  <circle cx="180" cy="128" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M132,23.99219a100.113,100.113,0,0,0-100,100v84.33349a15.68449,15.68449,0,0,0,15.667,15.66651H132a100,100,0,0,0,0-200Zm-48.00195,116.001a12,12,0,1,1,12-12A12,12,0,0,1,83.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,131.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,179.99805,139.99316Z"/>
        </>);
        case "light":
            return (<>
          <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="132" cy="128" r="10"/>
  <circle cx="180" cy="128" r="10"/>
  <circle cx="84" cy="128" r="10"/>
        </>);
        case "thin":
            return (<>
          <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="132" cy="128" r="8"/>
  <circle cx="84" cy="128" r="8"/>
  <circle cx="180" cy="128" r="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M132.00018,215.99219H47.66667A7.66667,7.66667,0,0,1,40,208.32552V123.992a91.99981,91.99981,0,0,1,91.99982-91.99981H132a92,92,0,0,1,92,92v.00018A91.99982,91.99982,0,0,1,132.00018,215.99219Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="132" cy="128" r="12"/>
  <circle cx="84" cy="128" r="12"/>
  <circle cx="180" cy="128" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ChatTeardropDots = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default ChatTeardropDots;
