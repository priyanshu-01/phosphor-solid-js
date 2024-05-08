/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M164.35,136.35a8,8,0,0,1,2.46-13l44.41-15.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l15.82-44.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L215.66,199a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" opacity="0.2"/><path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M220.49,207.8,207.8,220.49a12,12,0,0,1-17,0l-56.57-56.57L115,214.08l-.13.33A15.84,15.84,0,0,1,100.26,224l-.78,0a15.82,15.82,0,0,1-14.41-11L32.8,52.92A15.95,15.95,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.33.13-50.16,19.27,56.57,56.56A12,12,0,0,1,220.49,207.8Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cursor = (props: any, ref: any)  => {
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


export default Cursor;
