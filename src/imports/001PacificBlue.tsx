import imgShadow from "/assets/f005c05a1956d0f1148431d376496984affafe62.png";
import imgIPhone12Pro from "/assets/68e44bb3f0ed8bd007643b303037baaf72cac6a4.png";
import imgChangeThis1 from "/assets/7f820a1e63961f5091665c8bd9f2b9628a59c9ad.png";
import imgRectangle from "/assets/4552d359cae94edd3ef029075972b9494a539072.png";
import imgShadow1 from "/assets/66e6e0b901a070ec84dcd39bdf5f32ca37c4c8e4.png";
import imgIPhone12Pro1 from "/assets/40a78a1e4f2f6ed098301a7a3a9aa1717e8c5759.png";
import imgChangeThis3 from "/assets/38e25feb017162ca98200dce434824ef5d0ba5de.png";
import { imgChangeThis, imgChangeThis2 } from "./svg-y7yb0";

function MaskGroup() {
  return (
    <div className="absolute contents inset-[6.44%_36.54%_19.87%_8.38%]" data-name="Mask group">
      <div className="absolute inset-[4.83%_35.17%_17.76%_6.73%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[6.568px_3.506px] mask-size-[219.713px_160.468px]" data-name="Change-This" style={{ maskImage: `url('${imgChangeThis}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="168.571" src={imgChangeThis1} width="231.737" />
      </div>
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute contents inset-[6.44%_36.54%_19.87%_8.38%]" data-name="Mockup">
      <MaskGroup />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[0_32.07%_8.19%_0]" data-name="1">
      <div className="absolute inset-[0_32.07%_8.19%_0] mix-blend-multiply" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
        </div>
      </div>
      <div className="absolute inset-[5.12%_35.17%_13.99%_6.91%]" data-name="iPhone-12-Pro">
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
    <div className="absolute contents inset-[17.53%_0_0_22.06%] mix-blend-multiply" data-name="Shadow">
      <div className="absolute inset-[17.53%_0_0_22.06%] mix-blend-multiply" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[17.16%_4.49%_18.08%_32.62%]" data-name="Mask group">
      <div className="absolute inset-[15.47%_3.45%_16.17%_31.24%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[5.49px_3.668px] mask-size-[250.869px_141.023px]" data-name="Change-This" style={{ maskImage: `url('${imgChangeThis2}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="148.846" src={imgChangeThis3} width="260.503" />
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="absolute contents inset-[17.16%_4.49%_18.08%_32.62%]" data-name="Mockup">
      <MaskGroup1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[15.69%_0_0_22.06%]" data-name="2">
      <Shadow />
      <div className="absolute inset-[17.6%_36.73%_27.33%_23.54%] mix-blend-multiply" data-name="Shadow">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow1} />
        </div>
      </div>
      <div className="absolute inset-[15.69%_3.1%_12.28%_30.98%]" data-name="iPhone-12-Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIPhone12Pro1} />
        </div>
      </div>
      <Mockup1 />
    </div>
  );
}

export default function Component001PacificBlue() {
  return (
    <div className="relative size-full" data-name="001/Pacific-Blue">
      <Component />
      <Component1 />
    </div>
  );
}