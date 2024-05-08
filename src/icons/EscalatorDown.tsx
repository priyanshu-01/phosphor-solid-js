/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" opacity="0.2"/><polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM224,144H187.5L93.88,42.57A8,8,0,0,0,88,40H32A16,16,0,0,0,16,56V96a16,16,0,0,0,16,16H68.5l93.62,101.43A8,8,0,0,0,168,216h56a16,16,0,0,0,16-16V160A16,16,0,0,0,224,144Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const EscalatorDown = (props: any, ref: any)  => {
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


export default EscalatorDown;
