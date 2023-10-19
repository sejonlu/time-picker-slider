import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { TimePickerSliderConfig } from "./TimePickerSliderConfig";
import { ScopePicker } from "./ScopePicker";
import { ScopeType } from "../../types/ScopeType";

type TimePickerSliderThumbProps = {
  config: TimePickerSliderConfig;
  scope: ScopeType;
  setScope: (scope: ScopeType) => void;
};

const widths = {
  Day: "5.223%",
  Week: "6.5625%",
  Month: "11.25%",
  Quarter: "25%",
  Year: "100%",
} as const;

export const TimePickerSliderThumb: FC<TimePickerSliderThumbProps> = ({
  config,
  scope,
  setScope,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: widths[scope],
        backgroundColor: "gray",
        borderRadius: 9999,
        overflow: "hidden",
      }}
    >
      <Typography component="span" sx={{ ml: 1 }}>
        {scope}
      </Typography>
      <ScopePicker options={config.scopes} setScope={setScope} />
    </Stack>
  );
};
