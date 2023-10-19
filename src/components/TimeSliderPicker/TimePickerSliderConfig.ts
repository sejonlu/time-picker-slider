import { ScopeType } from "../../types/ScopeType";

export type TimePickerSliderConfig = {
  data: {
    start: Date;
    end: Date;
  };
  ranges: string[];
  scopes: Record<string, ScopeType>;
};
