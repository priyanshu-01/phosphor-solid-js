/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="160" cy="72" r="16"/>
  <path d="M208,96v24a96,96,0,0,1-96,96H12L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="90.66667" y1="176" x2="121.33333" y2="136" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" opacity="0.2"/>
  <circle cx="164" cy="68" r="12"/>
  <line x1="120" y1="136" x2="80" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M236.4375,73.34375,213.207,57.85547A60.00943,60.00943,0,0,0,96,76V93.19385L1.75293,211.00244A7.99963,7.99963,0,0,0,8,224H112A104.11791,104.11791,0,0,0,216,120V100.28125l20.4375-13.625a7.99959,7.99959,0,0,0,0-13.3125Zm-126.292,67.77783-40,48a7.99987,7.99987,0,0,1-12.291-10.24316l40-48a7.99987,7.99987,0,0,1,12.291,10.24316ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="164" cy="68" r="10"/>
  <line x1="120" y1="136" x2="80" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="164" cy="68" r="8"/>
  <line x1="120" y1="136" x2="80" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="164" cy="68" r="12"/>
  <line x1="120" y1="136" x2="80" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52.00738,52.00738,0,0,1,206.33275,62.88778L232,80Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Bird = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Bird;
