/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M192,120h26.32a7.77,7.77,0,0,0,7-4.42l17.9-36.81a8.12,8.12,0,0,0-3.1-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M64,120H37.68a7.77,7.77,0,0,1-7-4.42L12.82,78.77a8.12,8.12,0,0,1,3.1-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40Z" opacity="0.2"/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40Z" opacity="0.2"/><path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112Zm185.07-.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TShirt = (props: any, ref: any)  => {
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


export default TShirt;
