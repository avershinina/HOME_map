import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
// import {  } from 'd3';
import { useWorldMap } from "./useWorldMap";
import { useMeteors } from "./useMeteors";
import { Marks } from "./Marks";

const width = 1024;
const height = 768;

const App = () => {
  const worldMap = useWorldMap();
  const meteors = useMeteors();
  console.log(meteors);

  if (!worldMap || !meteors) {
    return <pre>Loading...</pre>;
  }

  // const xScale = scaleLinear()
  //   .domain([0, max(data, xValue)])
  //   .range([0, innerWidth]);

  // const yScale = scaleBand()
  //   .domain(data.map(yValue))
  //   .range([0, innerHeight])
  //   .paddingInner(0.15);

  return (
    <svg width={width} height={height}>
      <Marks worldMap={worldMap} meteors={meteors} />
    </svg>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
