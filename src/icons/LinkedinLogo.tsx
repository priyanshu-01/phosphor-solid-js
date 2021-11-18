/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="36" y="36" width="184" height="184" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="124" y1="120.00094" x2="124" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="84" y1="120.00094" x2="84" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M124,148.00094a28,28,0,1,1,56,0v28" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="84" cy="79.99998" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="36" y="36" width="184" height="184" rx="8" opacity="0.2"/>
  <rect x="36" y="36" width="184" height="184" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="88" cy="79.99998" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="36" y="36" width="184" height="184" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="88" cy="79.99998" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="36" y="36" width="184" height="184" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="88" cy="79.99998" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="36" y="36" width="184" height="184" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="88" cy="79.99998" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const LinkedinLogo = (props: any, ref: any)  => {
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


export default LinkedinLogo;
