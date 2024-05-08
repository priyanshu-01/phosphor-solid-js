/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="64" cy="120" r="16"/><ellipse cx="64" cy="120" rx="40" ry="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="120" x2="124" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="164" y1="120" x2="172" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="212" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <ellipse cx="64" cy="120" rx="40" ry="80" opacity="0.2"/><circle cx="64" cy="120" r="12"/><ellipse cx="64" cy="120" rx="40" ry="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="120" x2="128" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="120" x2="176" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M184,120a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h16A8,8,0,0,1,184,120Zm56,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.35C87.37,200.37,76.18,208,64,208c-13.87,0-26.46-9.89-35.44-27.85C20.46,164,16,142.59,16,120s4.46-43.95,12.56-60.15C37.54,41.89,50.13,32,64,32H192c13.87,0,26.46,9.89,35.44,27.85C235.54,76.05,240,97.41,240,120ZM76,120a12,12,0,1,0-12,12A12,12,0,0,0,76,120Zm148,8H208a8,8,0,0,1,0-16h15.79C221.84,73.9,206.16,48,192,48H92.12a73.6,73.6,0,0,1,7.32,11.85c7.14,14.28,11.44,32.56,12.37,52.15H128a8,8,0,0,1,0,16H112v80H224Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="64" cy="120" r="10"/><ellipse cx="64" cy="120" rx="40" ry="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="104" y1="120" x2="128" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="160" y1="120" x2="176" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="208" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="64" cy="120" r="8"/><ellipse cx="64" cy="120" rx="40" ry="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="104" y1="120" x2="128" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="160" y1="120" x2="176" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="208" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="64" cy="120" r="12"/><ellipse cx="64" cy="120" rx="40" ry="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18-17.91-80-40-80H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="120" x2="128" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="120" x2="176" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="120" x2="232" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ToiletPaper = (props: any, ref: any)  => {
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


export default ToiletPaper;
