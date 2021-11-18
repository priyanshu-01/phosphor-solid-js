/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" opacity="0.2"/>
  <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M240.58984,128a15.84794,15.84794,0,0,1-10.53125,15.03711l-63.81543,23.206-23.206,63.81543a16.001,16.001,0,0,1-30.07422,0L89.75684,166.24316l-63.81543-23.206a16.001,16.001,0,0,1,0-30.07422L89.75684,89.75684l23.20605-63.81543a16.001,16.001,0,0,1,30.07422,0l23.206,63.81543,63.81543,23.20605A15.84794,15.84794,0,0,1,240.58984,128Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const StarFour = (props: any, ref: any)  => {
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


export default StarFour;
