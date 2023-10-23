import { FC, HTMLAttributes, useState } from "react";
import { Box, SliderThumb, Stack } from "@mui/material";
import { TimePickerSliderConfig } from "../../types/TimePickerSliderConfig";
import { TimePickerSliderThumb } from "./TimePickerSliderThumb";
import { TimePickerSliderTrack } from "./TimePickerSliderTrack";
import { ScopeType } from "../../types/ScopeType";
import { MySlider } from "./MySlider";

export const Thumb: FC<HTMLAttributes<unknown>> = ({ children, ...other }) => {
  return <SliderThumb {...other}>{children}</SliderThumb>;
};

type TimePickerSliderProps = {
  config: TimePickerSliderConfig;
};

export const TimePickerSlider: FC<TimePickerSliderProps> = ({ config }) => {
  const [range, setRange] = useState<string>(
    new Date().getFullYear().toString(),
  );
  const [scope, setScope] = useState<ScopeType>("Day");
  return (
    <Stack>
      <MySlider min={0} max={12} length={3} />
      <TimePickerSliderTrack range={range} setRange={setRange} config={config}>
        <TimePickerSliderThumb
          scope={scope}
          setScope={setScope}
          config={config}
        />
        <Box sx={{ flexGrow: 1 }} />
      </TimePickerSliderTrack>
    </Stack>
  );
};
