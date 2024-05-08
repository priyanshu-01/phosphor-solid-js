/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="184" r="16"/><path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,60a20,20,0,0,1,40,0v52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88.8,164a44,44,0,0,1,78.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M188,96a20,20,0,0,0-20,20V60a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V76a20,20,0,0,0-40,0v76a80,80,0,0,0,160,0V116A20,20,0,0,0,188,96ZM128,200c-32,0-48-32-48-32s16-32,48-32,48,32,48,32S160,200,128,200Z" opacity="0.2"/><path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,60a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="168" r="12"/><path d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm72-76v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V104a16,16,0,0,1,32,0Zm-36.42,74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88,32.81-51.58,34.21a4,4,0,0,0,0,3.58c.7,1.4,17.5,34.21,51.58,34.21s50.88-32.81,51.58-34.21A4,4,0,0,0,179.58,178.21Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="168" r="10"/><path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,60a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="168" r="8"/><path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,60a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,60a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="168" r="12"/><path d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HandEye = (props: any, ref: any)  => {
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


export default HandEye;
