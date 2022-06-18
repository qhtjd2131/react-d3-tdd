import React from "react";
import { BarChartData } from "../../pages/Page3";
import * as style from "./BarChartSlider.style";

interface BarChartSliderProps {
  data: BarChartData[];
  setData: (data: BarChartData[]) => void;
}

const BarChartSlider = (props: BarChartSliderProps) => {
  const { data, setData } = props;
  const onSetValue = (valueNumber: number, index: number) => {
    const dataTemp: BarChartData[] = [...data];
    dataTemp[index].value =
      typeof valueNumber != "number" ? parseInt(valueNumber) : valueNumber;
    setData(dataTemp);
  };
  const slider = data.map((d, index) => (
    <div>
      <style.RangeLabel>{d.name}</style.RangeLabel>
      <style.RangeInput
        type="range"
        min="2"
        max="50"
        step="1"
        value={data[index].value}
        onChange={(e: any) => {
          onSetValue(e.target.value, index);
        }}
      />
      <style.RangeLabel>{d.value}</style.RangeLabel>

    </div>
  ));

  return <style.RangeWrapper>{slider}</style.RangeWrapper>;
};

export default BarChartSlider;
