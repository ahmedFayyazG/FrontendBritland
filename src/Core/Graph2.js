import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Tenets", 12],
  ["Landlord", 34],
  ["Managements", 22],
  ["Random", 9],
];

export const options = {
  title: "Data Usage",
  is3D: true,
};

export function Graph2() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"80%"}
      height={"400px"}
    />
  );
}
