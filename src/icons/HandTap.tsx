/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M68,224,42.68,182a20,20,0,0,1,34.64-20L96,192V84a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,13.84-1.75,25-4,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M56,84a60,60,0,0,1,120,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M64,76a52,52,0,0,1,104,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40Z" opacity="0.2"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M64,64a48,48,0,0,1,96,0,8,8,0,0,1-16,0,32,32,0,0,0-64,0,8,8,0,0,1-16,0Zm143.23,56c-8.61.4-15.23,7.82-15.23,16.43v7.28a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V120.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,144,120v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,96,64V183.74a8.19,8.19,0,0,1-6.72,8.16l-.12,0a6.09,6.09,0,0,1-6-3.09l-21-36.44c-4.3-7.46-13.74-10.57-21.4-6.62A16,16,0,0,0,34.15,168L65.1,228.05A8,8,0,0,0,72,232H208a8,8,0,0,0,7.16-4.42c.36-.72,8.84-15.06,8.84-40.65V136A16,16,0,0,0,207.23,120Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M64,76a52,52,0,0,1,104,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M64,76a52,52,0,0,1,104,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M64,76a52,52,0,0,1,104,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,224,42.68,174a20,20,0,0,1,34.64-20L96,184V76a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36c0,24-8,40-8,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HandTap = (props: any, ref: any)  => {
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


export default HandTap;
