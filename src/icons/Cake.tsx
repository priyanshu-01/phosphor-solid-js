/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-36,24-36S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" opacity="0.2"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" opacity="0.2"/><line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M208,88H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24V112A24,24,0,0,0,208,88ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm104,87.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33V112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="128" y1="72" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,48a24,24,0,0,1-48,0c0-24,24-40,24-40S152,24,152,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cake = (props: any, ref: any)  => {
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


export default Cake;
