/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="40" cy="200" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="96" cy="96" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="160" cy="160" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="216" cy="56" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="40" cy="200" r="24" opacity="0.2"/>
  <circle cx="96" cy="96" r="24" opacity="0.2"/>
  <circle cx="160" cy="160" r="24" opacity="0.2"/>
  <circle cx="216" cy="56" r="24" opacity="0.2"/>
  <circle cx="40" cy="200" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="96" cy="96" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="216" cy="56" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M238.62793,78.62695A31.90289,31.90289,0,0,1,216,87.98438a32.23919,32.23919,0,0,1-7.64124-.91846l-26.629,49.45312c.30212.27979.60412.55957.8977.853a32.00038,32.00038,0,1,1-50.1958,6.37354l-20.17749-20.17774a32.157,32.157,0,0,1-23.89526,3.49805L61.72974,176.519c.30212.27979.60412.55957.8977.853a32.00038,32.00038,0,1,1-45.25537.001l.00049-.001a32.0127,32.0127,0,0,1,30.269-8.43848l26.62866-49.45214c-.302-.28028-.60412-.56006-.8977-.85352a32.03718,32.03718,0,0,1-.00049-45.25488l.00049-.001a32.00216,32.00216,0,0,1,50.1958,38.88232l20.177,20.17725a32.12466,32.12466,0,0,1,23.89624-3.498L194.27026,79.481c-.30212-.27979-.60412-.55957-.8977-.853a32.03718,32.03718,0,0,1-.00049-45.25488l.00049-.001a32.00021,32.00021,0,0,1,45.25537,45.25488Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="40" cy="200" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="96" cy="96" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="160" cy="160" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="216" cy="56" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="40" cy="200" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="96" cy="96" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="160" cy="160" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="216" cy="56" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="40" cy="200" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="96" cy="96" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="160" cy="160" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="216" cy="56" r="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="84.61991" y1="117.13444" x2="51.37906" y2="178.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="143.02941" y1="143.02941" x2="112.97057" y2="112.97057" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="204.62096" y1="77.1325" x2="171.37906" y2="138.86746" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LineSegments = (props: any, ref: any)  => {
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


export default LineSegments;
