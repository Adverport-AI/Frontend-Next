import imgIPhone16Pro from "figma:asset/7f6778640a389382cb390065d0b5db851f071eaf.png";
import imgIPhone16Pro1 from "figma:asset/555efc789b83d6cd51fcb3e09719244e0ee71b64.png";
import imgBlue from "figma:asset/91a87e77e6e75f676caf9ca74e36779a4047e4ae.png";
import imgChangeThis1 from "figma:asset/9b423df27afb1bd28462f568464ed8f65e136bef.png";
import { imgChangeThis } from "./svg-p9g42";

function MaskGroup() {
  return (
    <div className="absolute contents inset-[2.24%_32.71%_4.21%_32.56%]" data-name="Mask group">
      <div className="absolute inset-[2.04%_32.64%_3.92%_32.45%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.844px_1.196px] mask-size-[255.922px_553.817px]" data-name="Change-This" style={{ maskImage: `url('${imgChangeThis}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="556.713" src={imgChangeThis1} width="257.293" />
      </div>
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute contents inset-[2.24%_32.71%_4.21%_32.56%]" data-name="Mockup">
      <MaskGroup />
    </div>
  );
}

function IPhone13ProFront() {
  return (
    <div className="absolute contents inset-[0_30.66%_1.91%_30.39%]" data-name="iPhone-13-Pro-Front">
      <div className="absolute inset-[0_30.66%_1.91%_30.39%]" data-name="Blue">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBlue} />
        </div>
      </div>
      <Mockup />
    </div>
  );
}

function Component001Blue() {
  return (
    <div className="absolute contents inset-[0_30.66%_1.91%_30.39%]" data-name="001/Blue">
      <IPhone13ProFront />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-full left-0 top-0 w-[40.71%]" data-name="iPhone 16 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.75%] left-[-82.52%] max-w-none top-[-6.51%] w-[362.46%]" src={imgIPhone16Pro} />
        </div>
      </div>
      <div className="absolute h-[97.13%] left-[60.65%] top-[1.01%] w-[39.35%]" data-name="iPhone 16 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.17%] left-[-190.07%] max-w-none top-[-34.24%] w-[378.82%]" src={imgIPhone16Pro1} />
        </div>
      </div>
      <Component001Blue />
    </div>
  );
}