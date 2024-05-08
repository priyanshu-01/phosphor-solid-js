/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M206.35,136.29c-8.87-5.13-24.46-7.38-39.4-8.29,14.94-.91,30.53-3.16,39.4-8.29a32,32,0,1,0-32-55.42c-8.87,5.12-18.61,17.48-26.87,30C154.17,80.87,160,66.25,160,56a32,32,0,0,0-64,0c0,10.25,5.83,24.87,12.52,38.26-8.26-12.49-18-24.85-26.87-30a32,32,0,1,0-32,55.42c8.87,5.13,24.46,7.38,39.4,8.29-14.94.91-30.53,3.16-39.4,8.29a32,32,0,1,0,32,55.42c8.87-5.12,18.61-17.48,26.87-30C101.83,175.13,96,189.75,96,200a32,32,0,0,0,64,0c0-10.25-5.83-24.87-12.52-38.26,8.26,12.49,18,24.85,26.87,30a32,32,0,1,0,32-55.42ZM155.71,144A32,32,0,1,1,160,128,31.74,31.74,0,0,1,155.71,144Z" opacity="0.2"/><circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M210.35,129.36c-.81-.47-1.7-.92-2.62-1.36.92-.44,1.81-.89,2.62-1.36a40,40,0,1,0-40-69.28c-.81.47-1.65,1-2.48,1.59.08-1,.13-2,.13-3a40,40,0,0,0-80,0c0,.94,0,1.94.13,3-.83-.57-1.67-1.12-2.48-1.59a40,40,0,1,0-40,69.28c.81.47,1.7.92,2.62,1.36-.92.44-1.81.89-2.62,1.36a40,40,0,1,0,40,69.28c.81-.47,1.65-1,2.48-1.59-.08,1-.13,2-.13,2.95a40,40,0,0,0,80,0c0-.94-.05-1.94-.13-2.95.83.57,1.67,1.12,2.48,1.59A39.79,39.79,0,0,0,190.29,204a40.43,40.43,0,0,0,10.42-1.38,40,40,0,0,0,9.64-73.28ZM128,156a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Flower = (props: any, ref: any)  => {
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


export default Flower;
