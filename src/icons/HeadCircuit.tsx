/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M124,100a24,24,0,1,1,24-24A24,24,0,0,1,124,100Z"/><path d="M144,160a24,24,0,1,1,24-24A24,24,0,0,1,144,160Z"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="214.38 88 184 88 144 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="124" y1="76" x2="124" y2="24.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M215.93,100.72A80,80,0,0,0,56,104L32.65,148.87a8,8,0,0,0,3.77,10.31L64,171.81V208a8,8,0,0,0,8,8h48a16,16,0,0,0,16,16h56l-8-64A79.86,79.86,0,0,0,215.93,100.72ZM112.13,74.08a16,16,0,1,1,13.79,13.79A16,16,0,0,1,112.13,74.08Zm34,77.79a16,16,0,1,1,13.79-13.79A16,16,0,0,1,146.08,151.87Z" opacity="0.2"/><circle cx="128" cy="72" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="144" cy="136" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="56" x2="128" y2="24.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="214.38 88 184 88 154.24 123.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <circle cx="128" cy="71.95" r="8"/><circle cx="152" cy="135.95" r="8"/><path d="M192.5,171.42A88.32,88.32,0,0,0,224,101.89q0-1.1-.09-2.19a4,4,0,0,0-4-3.75H195.75L172.62,123.7a24,24,0,1,1-12.28-10.25l25.51-30.62A8,8,0,0,1,192,80h23.14a4,4,0,0,0,3.77-5.35C207.27,42,176.86,18,140.74,16.08l-.59,0a4,4,0,0,0-4.15,4V49.33a24,24,0,1,1-16,0v-27a4,4,0,0,0-4.89-3.91A88.16,88.16,0,0,0,48,102L25.55,145.14l-.22.45a16,16,0,0,0,7.51,20.7l.25.12L56,176.9v31a16,16,0,0,0,16,16h40v8a8,8,0,0,0,8,8h71.77a8.31,8.31,0,0,0,4.06-1,8,8,0,0,0,4.11-8Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="72" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="144" cy="136" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="56" x2="128" y2="24.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="214.38 88 184 88 154.24 123.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="72" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="144" cy="136" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="56" x2="128" y2="24.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polyline points="214.38 88 184 88 154.24 123.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="72" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="144" cy="136" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="56" x2="128" y2="24.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="214.38 88 184 88 154.24 123.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HeadCircuit = (props: any, ref: any)  => {
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


export default HeadCircuit;
