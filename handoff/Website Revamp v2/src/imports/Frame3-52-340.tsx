import imgBeymenLogo1 from "figma:asset/475353305f5614af0afb11ccf4b79302062766a8.png";

export default function Frame() {
  return (
    <div className="bg-[#fcfcfa] relative size-full">
      <div className="absolute left-0 size-[1920px] top-0" data-name="beymen-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBeymenLogo1} />
      </div>
    </div>
  );
}