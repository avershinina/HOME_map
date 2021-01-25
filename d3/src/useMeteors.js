import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl = "../../data/MeteorStrikes.csv";

const row = (d) => {
  d.latitude = +d.latitude;
  d.longitude = +d.longitude;
  d.mass_g = +d.mass_g / 1000000;
  return d;
};

export const useMeteors = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
