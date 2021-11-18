/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="44" y="56" width="160" height="80" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M204,96h28a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="44" y1="96" x2="16" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="40" y="56" width="168" height="80" rx="8" opacity="0.2"/>
  <rect x="40" y="56" width="168" height="80" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="96" x2="16" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M248,104v49.96582a16.06941,16.06941,0,0,1-11.60352,15.38477L135.999,198.03418,136,232a8,8,0,0,1-16,0V198.03418a16.06941,16.06941,0,0,1,11.60352-15.38477L232.001,153.96582,232,104H216v24a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V104H16a8,8,0,0,1,0-16H32V64A16.01833,16.01833,0,0,1,48,48H200a16.01833,16.01833,0,0,1,16,16V88h16A16.01833,16.01833,0,0,1,248,104Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="40" y="56" width="168" height="80" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="96" x2="16" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="40" y="56" width="168" height="80" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="96" x2="16" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="40" y="56" width="168" height="80" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="96" x2="16" y2="96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PaintRoller = (props: any, ref: any)  => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
};


export default PaintRoller;
