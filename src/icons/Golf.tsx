/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="164" cy="100" r="16"/><circle cx="132" cy="132" r="16"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="216" x2="128" y2="244" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,209.17a120.55,120.55,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="96" r="80" opacity="0.2"/><circle cx="164" cy="100" r="12"/><circle cx="132" cy="132" r="12"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="208" x2="128" y2="248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M175.47,197.14a8,8,0,0,1-4.61,10.33A125.91,125.91,0,0,1,136,215.68V248a8,8,0,0,1-16,0V215.68a125.91,125.91,0,0,1-34.86-8.21,8,8,0,1,1,5.72-14.94C104,197.56,116.15,200,128,200s24-2.44,37.14-7.47A8,8,0,0,1,175.47,197.14ZM216,96A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-72,36a12,12,0,1,0-12,12A12,12,0,0,0,144,132Zm32-32a12,12,0,1,0-12,12A12,12,0,0,0,176,100Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="164" cy="100" r="10"/><circle cx="132" cy="132" r="10"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="208" x2="128" y2="248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="164" cy="100" r="8"/><circle cx="132" cy="132" r="8"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="208" x2="128" y2="248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="164" cy="100" r="12"/><circle cx="132" cy="132" r="12"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="208" x2="128" y2="248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Golf = (props: any, ref: any)  => {
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


export default Golf;
