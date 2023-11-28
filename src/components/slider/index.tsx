"use client";

import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import cn from "@/util/cn";

export type SliderProps = RadixSlider.SliderProps & {
  className?: string;
};

const Slider: React.FC<SliderProps> = ({ className, ...props }) => {
  return (
    <RadixSlider.Root
      className={cn(
        "relative flex h-12 w-[200px] touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <RadixSlider.Track className="relative h-2 grow rounded-full bg-white">
        <RadixSlider.Range className="absolute h-full rounded-full bg-white" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="hover:bg-violet3 block h-3 w-3 rounded-[10px] bg-white shadow-[0_0_0_6px] focus:shadow-[0_0_0_8px] focus:shadow-stone-900 focus:outline-none"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};

export default Slider;
