/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="128" cy="164" r="68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="163.71281" y1="64" x2="92.28719" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="92.28719" y1="64" x2="163.71281" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="96" x2="128" y2="41.99999" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <circle cx="128" cy="164" r="68" opacity="0.2"/>
  <circle cx="128" cy="164" r="68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="163.71281" y1="68" x2="92.28719" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="92.28719" y1="68" x2="163.71281" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="96" x2="128" y2="44.00003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M136,88.42383V59.01465l23.25049,15.625a7.99987,7.99987,0,1,0,8.9248-13.2793L142.34253,44l25.83276-17.36035a7.99987,7.99987,0,1,0-8.9248-13.2793L128,34.36133l-31.25049-21.001a7.99987,7.99987,0,1,0-8.9248,13.2793L113.65747,44,87.82471,61.36035a7.99987,7.99987,0,1,0,8.9248,13.2793L120,59.01465V88.42383a76,76,0,1,0,16,0ZM128,224a60,60,0,1,1,60-60A60.06812,60.06812,0,0,1,128,224Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="128" cy="164" r="68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="163.71281" y1="68" x2="92.28719" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="92.28719" y1="68" x2="163.71281" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="96" x2="128" y2="44.00003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="128" cy="164" r="68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="163.71281" y1="68" x2="92.28719" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="92.28719" y1="68" x2="163.71281" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="96" x2="128" y2="44.00003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="128" cy="164" r="68" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="163.71281" y1="68" x2="92.28719" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="92.28719" y1="68" x2="163.71281" y2="20" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="96" x2="128" y2="44.00003" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const GenderNonbinary = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default GenderNonbinary;
