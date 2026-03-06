import imgIPhone16Pro from "figma:asset/7f6778640a389382cb390065d0b5db851f071eaf.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[642px] left-0 top-0 w-[325px]" data-name="iPhone 16 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.75%] left-[-82.52%] max-w-none top-[-6.51%] w-[362.46%]" src={imgIPhone16Pro} />
        </div>
      </div>
    </div>
  );
}