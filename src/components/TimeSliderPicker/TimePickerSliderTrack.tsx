import { FC, PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";
import { TimePickerSliderConfig } from "../../types/TimePickerSliderConfig";
import { RangePicker } from "./RangePicker";

type TimePickerSliderTrackProps = PropsWithChildren & {
  config: TimePickerSliderConfig;
  range: string;
  setRange: (range: string) => void;
};

export const TimePickerSliderTrack: FC<TimePickerSliderTrackProps> = ({
  children,
  config,
  range,
  setRange,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: "lightgrey",
        overflow: "hidden",
        borderRadius: 9999,
      }}
    >
      <Typography component="span" sx={{ ml: 1 }}>
        {range}
      </Typography>
      {children}
      <RangePicker options={config.ranges} setRange={setRange} />
    </Stack>
  );
};
