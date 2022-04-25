/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <circle cx="156" cy="76" r="16"/>
  <path d="M186.30284,167.94573Q185.15821,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72q0-1.16456.05488-2.31579" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M62.177,153.17849,12,175.96316,64,192l16,52,22.8003-50.20045v.00009c138.35934-3.2851,120.00626-122.89746,114.38209-148.8602a7.98721,7.98721,0,0,0-6.1218-6.12182C185.099,33.19376,65.49508,14.84213,62.17691,153.17849Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <path d="M88.05489,69.68421c-14.74239,17.88968-24.94149,44.45157-25.878,83.49428h.0001L8,175.96316,64,192l16,56,22.8003-54.20045v.00009c39.04488-.92705,65.60976-11.118,83.50255-25.85391Q185.1582,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72Q88,70.83544,88.05489,69.68421Z" opacity="0.2"/>
  <circle cx="156" cy="76" r="12"/>
  <path d="M186.30284,167.94573Q185.15821,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72q0-1.16456.05488-2.31579" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M62.177,153.17849,8,175.96316,64,192l16,56,22.8003-54.20045v.00009c138.35934-3.2851,120.00626-122.89746,114.38209-148.8602a7.98721,7.98721,0,0,0-6.1218-6.12182C185.099,33.19376,65.49508,14.84213,62.17691,153.17849Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm37.708,83.49292c-20.42774,25.95142-53.21875,40.1106-97.51758,42.12524L87.374,251.10205A7.99987,7.99987,0,0,1,80.00293,256c-.16016,0-.32129-.00488-.48242-.01416a8.0008,8.0008,0,0,1-7.21289-5.78809l-14.7793-51.72949L5.79785,183.6543a8.00035,8.00035,0,0,1-.89941-15.06543l49.46094-20.80152c2.02539-44.28955,16.19042-77.074,42.14355-97.49829,41.11816-32.35791,99.376-22.94629,116.251-19.29A16.03051,16.03051,0,0,1,225.001,43.24487C228.65723,60.12231,238.07031,118.3811,205.708,159.49292Zm3.65625-112.85986C194.2168,43.35449,142.02148,34.82642,106.39844,62.8623a78.69585,78.69585,0,0,0-10.38086,9.83619A40.03964,40.03964,0,0,0,136,112a8.00024,8.00024,0,0,1,8,8,40.039,40.039,0,0,0,39.29077,39.98193,78.64492,78.64492,0,0,0,9.845-10.38549C221.17383,113.978,212.64551,61.78223,209.36426,46.63306Z"/>
        </>);
        case "light":
            return (<>
          <circle cx="156" cy="76" r="10"/>
  <path d="M186.30284,167.94573Q185.15821,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72q0-1.16456.05488-2.31579" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M62.177,153.17849,8,175.96316,64,192l16,56,22.8003-54.20045v.00009c138.35934-3.2851,120.00626-122.89746,114.38209-148.8602a7.98721,7.98721,0,0,0-6.1218-6.12182C185.099,33.19376,65.49508,14.84213,62.17691,153.17849Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <circle cx="156" cy="76" r="8"/>
  <path d="M186.30284,167.94573Q185.15821,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72q0-1.16456.05488-2.31579" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M62.177,153.17849,8,175.96316,64,192l16,56,22.8003-54.20045v.00009c138.35934-3.2851,120.00626-122.89746,114.38209-148.8602a7.98721,7.98721,0,0,0-6.1218-6.12182C185.099,33.19376,65.49508,14.84213,62.17691,153.17849Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <circle cx="156" cy="76" r="12"/>
  <path d="M186.30284,167.94573Q185.15821,167.99979,184,168a48,48,0,0,1-48-48A48,48,0,0,1,88,72q0-1.16456.05488-2.31579" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M62.177,153.17849,8,175.96316,64,192l16,56,22.8003-54.20045v.00009c138.35934-3.2851,120.00626-122.89746,114.38209-148.8602a7.98721,7.98721,0,0,0-6.1218-6.12182C185.099,33.19376,65.49508,14.84213,62.17691,153.17849Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Fish = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined} {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Fish;
