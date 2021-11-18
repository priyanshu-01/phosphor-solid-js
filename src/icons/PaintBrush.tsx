/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M138.41669,84.55047a92.45653,92.45653,0,0,1,33.01749,33.00663" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M132.96191,90.647A84.40614,84.40614,0,0,1,165.353,123.03809C192.66992,99.12988,224.9707,63.91016,224.9707,31.0293,192.08984,31.0293,156.87012,63.33008,132.96191,90.647Z" opacity="0.2"/>
  <path d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M132.9608,90.6464a84.40058,84.40058,0,0,1,32.3928,32.3928" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224.9707,23.0293c-21.30468,0-45.23242,11.74316-71.11914,34.90234-18.04687,16.146-33.54394,34.64258-44.27978,48.69922A59.99965,59.99965,0,0,0,32,164c0,31.21094-16.23926,45.12109-17.041,45.78809A8,8,0,0,0,20,224H92a60.00007,60.00007,0,0,0,57.36914-77.57227c14.05664-10.73535,32.55371-26.23193,48.7002-44.28027C221.22852,76.26172,232.9707,52.334,232.9707,31.0293A8.00039,8.00039,0,0,0,224.9707,23.0293ZM124.44189,113.56689c2.8628-3.66259,6.29053-7.91308,10.1753-12.49218a76.22114,76.22114,0,0,1,20.3081,20.3081c-4.5791,3.88477-8.82959,7.3125-12.49267,10.1753A60.4544,60.4544,0,0,0,124.44189,113.56689Zm42.54883-2.86718a92.19891,92.19891,0,0,0-21.69043-21.69043c19.60987-21.18408,45.98389-44.37354,70.79834-49.10791C211.36426,64.71631,188.1748,91.08984,166.99072,110.69971Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M132.9608,90.6464a84.40058,84.40058,0,0,1,32.3928,32.3928" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M132.9608,90.6464a84.40058,84.40058,0,0,1,32.3928,32.3928" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M132.9608,90.6464a84.40058,84.40058,0,0,1,32.3928,32.3928" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PaintBrush = (props: any, ref: any)  => {
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


export default PaintBrush;
