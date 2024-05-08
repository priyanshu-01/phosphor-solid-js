/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="104" y1="40" x2="192" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="216" x2="152" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="69.88" y1="176" x2="134.56" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M86.67,152.05A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,24V51.5A72,72,0,0,1,169.33,104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="121.44" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M64,208v-3.5a72,72,0,0,1,39.8-64.4l48.4-24.2A72,72,0,0,0,192,51.5V48H64v3.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V208Z" opacity="0.2"/><line x1="96" y1="48" x2="192" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="208" x2="160" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="107.89" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="69.88" y1="176" x2="148.11" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M93.38,146.47A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,24V51.5a72,72,0,0,1-29.38,58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM163.18,192H83.91a8,8,0,0,1-8-8.53A8.18,8.18,0,0,1,84.18,176H149.7a4,4,0,0,0,2.75-6.9,48.24,48.24,0,0,0-11-7.53L94.8,138.23a4,4,0,0,0-4.08.3A79.51,79.51,0,0,0,56,204.5v27.23A8.17,8.17,0,0,0,63.47,240,8,8,0,0,0,72,232V216h92a4,4,0,0,0,4-4v-7.5a48.76,48.76,0,0,0-.9-9.32A4,4,0,0,0,163.18,192ZM191.47,16A8.17,8.17,0,0,0,184,24.27V40H92a4,4,0,0,0-4,4v7.5a48.76,48.76,0,0,0,.9,9.32A4,4,0,0,0,92.82,64h79a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H106.3a4,4,0,0,0-2.75,6.9,48.24,48.24,0,0,0,11,7.53l46.67,23.34a4,4,0,0,0,4.08-.3A79.51,79.51,0,0,0,200,51.5V24A8,8,0,0,0,191.47,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="96" y1="48" x2="192" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="208" x2="160" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="107.89" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="69.88" y1="176" x2="148.11" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M93.38,146.47A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M192,24V51.5a72,72,0,0,1-29.38,58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="96" y1="48" x2="192" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="64" y1="208" x2="160" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="107.89" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="69.88" y1="176" x2="148.11" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M93.38,146.47A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M192,24V51.5a72,72,0,0,1-29.38,58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="96" y1="48" x2="192" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="208" x2="160" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="107.89" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="69.88" y1="176" x2="148.11" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M93.38,146.47A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,24V51.5a72,72,0,0,1-29.38,58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Dna = (props: any, ref: any)  => {
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


export default Dna;
