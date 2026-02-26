import imgIPhone13 from "/assets/36c19dca002fd11ebaa0df8ed37c61afd2a2fef6.png";
import imgScreen1 from "/assets/83f733506694c511087cc3dbfe18347154406cc4.png";
import imgChangeThis from "/assets/aca5c3fa561b6b57946873f8350684d4efb235bd.png";
import { imgScreen } from "./svg-18895";

function Mockup() {
  return (
    <div className="absolute contents inset-[2.01%_2.84%_3.87%_7.74%]" data-name="Mockup">
      <div className="absolute h-[886.396px] left-[70.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23.826px_4.653px] mask-size-[533.818px_930.842px] top-[15.24px] w-[524.555px]" data-name="Screen" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen1.src} />
      </div>
      <div className="absolute inset-[1.52%_0.72%_3.32%_5.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.757px_4.857px] mask-size-[533.818px_930.842px]" data-name="Change-This" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="941.136" src={imgChangeThis.src} width="557.223" />
      </div>
    </div>
  );
}

function IPhone1() {
  return (
    <div className="absolute contents inset-0" data-name="iPhone-13">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone13.src} />
      </div>
      <Mockup />
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute contents left-0 top-0" data-name="iPhone 13">
      <IPhone1 />
    </div>
  );
}

export default function IPhone13Mockup() {
  return (
    <div className="relative size-full" data-name="iPhone 13 Mockup">
      <IPhone />
    </div>
  );
}