import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ worldMap: { land, interiors }, meteors }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })} />
    {land.features.map((feature) => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {meteors.map((d) => {
      const [x, y] = projection([d.longitude, d.latitude]);
      console.log(x, y);
      return <circle cx={x} cy={y} r={d.mass_g} />;
    })}
  </g>
);
