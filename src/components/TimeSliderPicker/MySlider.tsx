import { FC, useState } from "react";
import { Slider } from "@mui/material";
import { Thumb } from "./TimePickerSlider";

type MySliderProps = {
  min: number;
  max: number;
  length: number;
};

export const MySlider: FC<MySliderProps> = ({ min, max, length }) => {
  const [value, setValue] = useState<number[]>([3, 3 + length]); // Initialize with the desired constant range
  const handleChange = (
    _: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] !== length) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], max - length);
        setValue([clamped, clamped + length]);
      } else {
        const clamped = Math.max(newValue[1] - length, min);
        setValue([clamped, clamped + length]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      disableSwap
      marks
      min={min}
      max={max}
      slots={{ thumb: Thumb }}
    />
  );
};
