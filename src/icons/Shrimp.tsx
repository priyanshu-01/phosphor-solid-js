/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="112" y1="144" x2="112" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="112" y1="192" x2="112" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,184H112a20,20,0,0,1,0-40h40a64,64,0,0,0,64-64H96.9C57.2,80,24.3,111.75,24,151.45A72,72,0,0,0,96,224h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="92.59" y1="159.18" x2="27.55" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="95.46" y1="175.24" x2="50.21" y2="207.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M112,80H96a72,72,0,0,0,0,144h16V192a20,20,0,0,1,0-40Z" opacity="0.2"/><line x1="112" y1="152" x2="112" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="148" cy="116" r="12"/><line x1="112" y1="192" x2="112" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,192H112a20,20,0,0,1,0-40h32a72,72,0,0,0,72-72H96a72,72,0,0,0,0,144h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="95.6" y1="160.55" x2="27.55" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="92.69" y1="177.22" x2="50.21" y2="207.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M136,116a12,12,0,1,1,12,12A12,12,0,0,1,136,116ZM240,60a28,28,0,0,1-16.2,25.38A80.09,80.09,0,0,1,144,160H112a12,12,0,0,0,0,24h56a8,8,0,0,1,0,16H120v16h32a8,8,0,0,1,0,16H96A80,80,0,0,1,96,72H212a12,12,0,0,0,0-24H128a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8h84A28,28,0,0,1,240,60ZM85.72,182.2a8,8,0,0,0-11.16-1.86l-15.36,11a8,8,0,0,0,9.3,13l15.36-11A8,8,0,0,0,85.72,182.2Zm-1.5-35.62L45.55,129a8,8,0,1,0-6.62,14.56L77.6,161.15a8,8,0,0,0,10.59-4A8,8,0,0,0,84.22,146.58ZM207.5,88H120v56h24A64.09,64.09,0,0,0,207.5,88Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="112" y1="152" x2="112" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="148" cy="116" r="10"/><line x1="112" y1="192" x2="112" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,192H112a20,20,0,0,1,0-40h32a72,72,0,0,0,72-72H96a72,72,0,0,0,0,144h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="95.6" y1="160.55" x2="27.55" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="92.69" y1="177.22" x2="50.21" y2="207.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="112" y1="152" x2="112" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="148" cy="116" r="8"/><line x1="112" y1="192" x2="112" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,192H112a20,20,0,0,1,0-40h32a72,72,0,0,0,72-72H96a72,72,0,0,0,0,144h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="95.6" y1="160.55" x2="27.55" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="92.69" y1="177.22" x2="50.21" y2="207.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="112" y1="152" x2="112" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="148" cy="116" r="12"/><line x1="112" y1="192" x2="112" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112,24a16,16,0,0,0,16,16h84a20,20,0,0,1,0,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,192H112a20,20,0,0,1,0-40h32a72,72,0,0,0,72-72H96a72,72,0,0,0,0,144h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="95.6" y1="160.55" x2="27.55" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="92.69" y1="177.22" x2="50.21" y2="207.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Shrimp = (props: any, ref: any)  => {
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


export default Shrimp;
