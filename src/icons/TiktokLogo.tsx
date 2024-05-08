/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" opacity="0.2"/><path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TiktokLogo = (props: any, ref: any)  => {
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


export default TiktokLogo;
