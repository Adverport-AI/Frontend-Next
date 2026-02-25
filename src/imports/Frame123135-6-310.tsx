import imgShadow from "/assets/730e4f03da4f8949f4b825e192296bf174e56fe2.png";
import imgIPhone12Pro from "/assets/b632c8b348a7d1c205d71b33e4614474ba9914d6.png";
import imgScreen1 from "/assets/9bb4d9024d3981d5ab41d235e650162f54d1cb14.png";
import imgChangeThis from "/assets/4d2f93e3f146b46cc6cdb1e930864e967d9a906d.png";
import imgShadow1 from "/assets/4552d359cae94edd3ef029075972b9494a539072.png";
import imgShadow2 from "/assets/66e6e0b901a070ec84dcd39bdf5f32ca37c4c8e4.png";
import imgIPhone12Pro1 from "/assets/7c0b3043ac9af54679174f72f0d75ec8900572a6.png";
import imgScreen3 from "/assets/ad6922956a52200ed075b526020279beb0488245.png";
import imgChangeThis1 from "/assets/898fde952be2522964e470e0daf5bcf0ebc8e53d.png";
import { imgScreen, imgScreen2 } from "./svg-68ohn";

function Mockup() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-132.9px)] top-[calc(50%-34.59px)]" data-name="Mockup">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[99.739px] left-[calc(50%-903.93px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[579.59px_144.744px] mask-size-[519.994px_379.706px] top-[calc(50%-319.32px)] w-[137.113px]" data-name="Screen" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[398.879px] left-[calc(50%-134.22px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[15.545px_8.296px] mask-size-[519.994px_379.706px] top-[calc(50%-33.3px)] w-[548.45px]" data-name="Change-This" style={{ maskImage: `url('${imgScreen}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="398.879" src={imgChangeThis} width="548.45" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-151.38px)] top-[calc(50%-21.09px)]" data-name="1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[473.073px] left-[calc(50%-151.38px)] mix-blend-multiply opacity-60 top-[calc(50%-21.09px)] w-[641.236px]" data-name="Shadow">
        <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[416.783px] left-[calc(50%-133.36px)] top-[calc(50%-22.83px)] w-[546.736px]" data-name="iPhone-12-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone12Pro} />
        </div>
      </div>
      <Mockup />
    </div>
  );
}

function Shadow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+104.13px)] mix-blend-multiply top-[calc(50%+45.17px)]" data-name="Shadow">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[424.919px] left-[calc(50%+104.13px)] mix-blend-multiply opacity-60 top-[calc(50%+45.17px)] w-[735.735px]" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow1} />
        </div>
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+132.79px)] top-[calc(50%-2.38px)]" data-name="Mockup">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[88.068px] left-[calc(50%-837.58px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[750.576px_186.249px] mask-size-[593.729px_333.694px] top-[calc(50%-311.45px)] w-[154.133px]" data-name="Screen" style={{ maskImage: `url('${imgScreen2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen3} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[352.207px] left-[calc(50%+131.2px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12.996px_8.68px] mask-size-[593.729px_333.694px] top-[calc(50%-1.81px)] w-[616.531px]" data-name="Change-This" style={{ maskImage: `url('${imgScreen2}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="352.207" src={imgChangeThis1} width="616.531" />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+104.13px)] top-[calc(50%+40.43px)]" data-name="2">
      <Shadow />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[283.777px] left-[calc(50%-62.28px)] mix-blend-multiply opacity-60 top-[calc(50%-25.07px)] w-[375.009px]" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow2} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[371.119px] left-[calc(50%+131.62px)] top-[calc(50%+8.8px)] w-[622.303px]" data-name="iPhone-12-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone12Pro1} />
        </div>
      </div>
      <Mockup1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Component />
      <Component1 />
    </div>
  );
}