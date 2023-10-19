import { Container } from "@mui/material";
import { TimePickerSlider } from "./components/TimeSliderPicker";
import { TimePickerSliderConfig } from "./components/TimeSliderPicker/TimePickerSliderConfig";

const config: TimePickerSliderConfig = {
  data: {
    start: new Date(1595289600),
    end: new Date(1697068800),
  },
  ranges: ["2020", "2021", "2022", "2023"],
  scopes: {
    day: "Day",
    week: "Week",
    month: "Month",
    quarter: "Quarter",
    year: "Year",
  },
};

function App() {
  return (
    <Container sx={{ pt: 5 }}>
      <TimePickerSlider config={config} />
    </Container>
  );
}

export default App;
