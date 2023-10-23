import { FC, useState } from "react";
import { Slider } from "@mui/material";
import { Thumb } from "./TimePickerSlider";

const minDistance = 1;

export const MySlider: FC = () => {
  const [value, setValue] = useState<number[]>([3, 6]);
  const handleChange = (
    _: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
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
      min={0}
      max={12}
      slots={{ thumb: Thumb }}
    />
  );
};
