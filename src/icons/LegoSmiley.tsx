/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="100" cy="112" r="16"/><circle cx="156" cy="112" r="16"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="48" y="60" width="160" height="136" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M96,60V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,196v28a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V196" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="48" y="56" width="160" height="144" rx="24" opacity="0.2"/><circle cx="100" cy="112" r="12"/><circle cx="156" cy="112" r="12"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="56" width="160" height="144" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M184,48H168V32a16,16,0,0,0-16-16H104A16,16,0,0,0,88,32V48H72A32,32,0,0,0,40,80v96a32.06,32.06,0,0,0,24,31v17a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V207a32.06,32.06,0,0,0,24-31V80A32,32,0,0,0,184,48Zm-28,52a12,12,0,1,1-12,12A12,12,0,0,1,156,100Zm4.27,58.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM104,32h48V48H104Zm-4,68a12,12,0,1,1-12,12A12,12,0,0,1,100,100Zm76,124H80V208h96Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="100" cy="112" r="10"/><circle cx="156" cy="112" r="10"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="48" y="56" width="160" height="144" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="100" cy="112" r="8"/><circle cx="156" cy="112" r="8"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="48" y="56" width="160" height="144" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="100" cy="112" r="12"/><circle cx="156" cy="112" r="12"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="56" width="160" height="144" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LegoSmiley = (props: any, ref: any)  => {
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


export default LegoSmiley;
