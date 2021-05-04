/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96" y1="216" x2="160" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="192" y1="152" x2="192" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" opacity="0.2"/>
  <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="216" x2="160" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="152" x2="192" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M233.2251,152.80762A15.95645,15.95645,0,0,1,219.86768,160H200v24a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H36.13232a15.99993,15.99993,0,0,1-14.706-22.30273l41.14258-96A15.98206,15.98206,0,0,1,77.27539,32H178.72461a15.98206,15.98206,0,0,1,14.70654,9.69727l41.14258,96A15.95711,15.95711,0,0,1,233.2251,152.80762Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="216" x2="160" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="192" y1="152" x2="192" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="216" x2="160" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="192" y1="152" x2="192" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="216" x2="160" y2="216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="152" x2="192" y2="184" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Lamp = (props: any, ref: any)  => {
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


export default Lamp;
