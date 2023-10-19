import { ScopeType } from "./ScopeType";

export type TimePickerSliderConfig = {
  data: {
    start: Date;
    end: Date;
  };
  ranges: string[];
  scopes: Record<string, ScopeType>;
};
