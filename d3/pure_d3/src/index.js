import * as d3 from "d3";
import * as topojson from "topojson-client";
import us from "us.json";

const width = 975;
const height = 610;

const path = d3.geoPath();
// const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
const svg = d3.create("svg").attr("height", height).attr("width", width);

const worldMap = svg
  .append("path")
  .attr("fill", "#ddd")
  // .attr("d", d3.geo.path().projection(d3.geo.mercator()));
  .attr("d", path(topojson.feature(us, us.objects.nation)));

const worldBorders = svg
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "#fff")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round");

document.body.appendChild(svg.node());
