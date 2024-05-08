/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="56" y1="184" x2="176" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,148V52.48c0-10.85-8.43-20.08-19.27-20.47A20,20,0,0,0,176,52V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H196" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M56,192H184v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8Z" opacity="0.2"/><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="192" x2="184" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,48V152a8,8,0,0,1-8.53,8,8.17,8.17,0,0,1-7.47-8.25V48a8,8,0,0,0-8.55-8A8.19,8.19,0,0,0,192,48.28V180a4,4,0,0,1-4,4H52a4,4,0,0,1-4-4V48A24,24,0,0,1,72,24H200A24,24,0,0,1,224,48ZM188,200H52a4,4,0,0,0-4,4v12a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V204A4,4,0,0,0,188,200Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="56" y1="192" x2="184" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="56" y1="192" x2="184" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="192" x2="184" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Towel = (props: any, ref: any)  => {
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


export default Towel;
