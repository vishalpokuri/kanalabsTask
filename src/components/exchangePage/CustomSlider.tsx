import * as Slider from "@radix-ui/react-slider";
import BorderCard from "./BorderCard";

interface CustomSliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

function CustomSlider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
}: CustomSliderProps) {
  return (
    <BorderCard className="flex items-center p-2 bg-surface1 border border-[#222] w-full ">
      <Slider.Root
        className="relative flex items-center w-full h-6"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([val]) => onValueChange(val)}
      >
        <Slider.Track className="bg-[#444] relative flex-1 h-1 rounded-full">
          <Slider.Range className="absolute h-1 rounded-full bg-[#00e6ef]" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-[#00e6ef] border-[3px] border-white rounded-full shadow focus:outline-none" />
      </Slider.Root>
      <div className="ml-4 px-2 py-1 bg-surface0 rounded-lg border border-stroke flex items-center justify-center font-mr min-w-11 text-xxs">
        <span className="text-text2 ">{value}</span>
        <span className="text-disabled ml-1">%</span>
      </div>
    </BorderCard>
  );
}

export default CustomSlider;
