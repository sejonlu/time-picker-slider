import { FC, HTMLAttributes, useState } from "react";
import { Box, Slider, SliderThumb, Stack } from "@mui/material";
import { TimePickerSliderConfig } from "./TimePickerSliderConfig";
import { TimePickerSliderThumb } from "./TimePickerSliderThumb";
import { TimePickerSliderTrack } from "./TimePickerSliderTrack";
import { ScopeType } from "../../types/ScopeType";

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
      <Slider marks min={0} max={12} slots={{ thumb: Thumb }} />
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
