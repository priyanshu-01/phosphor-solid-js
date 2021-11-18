/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" opacity="0.2"/>
  <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M26.36035,158.87646a15.86839,15.86839,0,0,1,2.0293-16.96582L115.582,34.59668a15.99968,15.99968,0,0,1,24.83594.00049l87.19238,107.313A16.00008,16.00008,0,0,1,215.19238,168H40.80762A15.87032,15.87032,0,0,1,26.36035,158.87646ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const EjectSimple = (props: any, ref: any)  => {
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


export default EjectSimple;
