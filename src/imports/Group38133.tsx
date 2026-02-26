import imgShadow from "/assets/730e4f03da4f8949f4b825e192296bf174e56fe2.png";
import imgIPhone12Pro from "/assets/b632c8b348a7d1c205d71b33e4614474ba9914d6.png";
import imgScreen1 from "/assets/9bb4d9024d3981d5ab41d235e650162f54d1cb14.png";
import imgChangeThis from "/assets/749891e9f3db7b6265dda6f2f1143894a16e0f64.png";
import imgShadow1 from "/assets/4552d359cae94edd3ef029075972b9494a539072.png";
import imgShadow2 from "/assets/66e6e0b901a070ec84dcd39bdf5f32ca37c4c8e4.png";
import imgIPhone12Pro1 from "/assets/7c0b3043ac9af54679174f72f0d75ec8900572a6.png";
import imgScreen3 from "/assets/ad6922956a52200ed075b526020279beb0488245.png";
import imgChangeThis1 from "/assets/934de660d18738151ede3633a754a710488f6985.png";
import { imgScreen, imgScreen2 } from "./svg-i2vvs";

function Mockup() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-39.08px)] top-[calc(50%-10.17px)]" data-name="Mockup">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.326px] left-[calc(50%-265.79px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[170.418px_42.559px] mask-size-[152.895px_111.646px] top-[calc(50%-93.89px)] w-[40.315px]" data-name="Screen" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen1.src} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[117.283px] left-[calc(50%-39.46px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.57px_2.439px] mask-size-[152.895px_111.646px] top-[calc(50%-9.79px)] w-[161.262px]" data-name="Change-This" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="117.283" src={imgChangeThis.src} width="161.262" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-44.51px)] top-[calc(50%-6.2px)]" data-name="1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[139.098px] left-[calc(50%-44.51px)] mix-blend-multiply opacity-60 top-[calc(50%-6.2px)] w-[188.543px]" data-name="Shadow">
        <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow.src} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[122.547px] left-[calc(50%-39.21px)] top-[calc(50%-6.71px)] w-[160.758px]" data-name="iPhone-12-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone12Pro.src} />
        </div>
      </div>
      <Mockup />
    </div>
  );
}

function Shadow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+30.62px)] mix-blend-multiply top-[calc(50%+13.28px)]" data-name="Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[124.94px] left-[calc(50%+30.62px)] mix-blend-multiply opacity-60 top-[calc(50%+13.28px)] w-[216.329px]" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow1.src} />
        </div>
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+39.05px)] top-[calc(50%-0.7px)]" data-name="Mockup">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25.895px] left-[calc(50%-246.27px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[220.693px_54.763px] mask-size-[174.575px_98.117px] top-[calc(50%-91.58px)] w-[45.32px]" data-name="Screen" style={{ maskImage: `url('${imgScreen2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen3.src} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[103.56px] left-[calc(50%+38.58px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.822px_2.552px] mask-size-[174.575px_98.117px] top-[calc(50%-0.53px)] w-[181.279px]" data-name="Change-This" style={{ maskImage: `url('${imgScreen2}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="103.56" src={imgChangeThis1.src} width="181.279" />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+30.62px)] top-[calc(50%+11.89px)]" data-name="2">
      <Shadow />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[83.439px] left-[calc(50%-18.31px)] mix-blend-multiply opacity-60 top-[calc(50%-7.37px)] w-[110.264px]" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow2.src} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[109.121px] left-[calc(50%+38.7px)] top-[calc(50%+2.59px)] w-[182.977px]" data-name="iPhone-12-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone12Pro1.src} />
        </div>
      </div>
      <Mockup1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Component />
      <Component1 />
    </div>
  );
}