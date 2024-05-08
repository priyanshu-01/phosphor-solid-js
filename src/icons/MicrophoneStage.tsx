/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M105.05,99.52l0,0L33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151l0,0A64,64,0,0,1,105.05,99.52Z" opacity="0.2"/><circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="160" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M115.06,46.36a4,4,0,0,0-6.11.54A71.54,71.54,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a71.54,71.54,0,0,0,41.09-12.93,4,4,0,0,0,.54-6.11Zm2.61,103.28-16,16a8,8,0,1,1-11.31-11.31l16-16a8,8,0,0,1,11.31,11.31Zm109.4-20.56a4,4,0,0,1-6.12.54L126.38,35.05a4,4,0,0,1,.54-6.12A71.93,71.93,0,0,1,227.07,129.08Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="160" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="160" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="160" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MicrophoneStage = (props: any, ref: any)  => {
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


export default MicrophoneStage;
