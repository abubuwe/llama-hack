import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import { Ingredient } from '../types';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const UK_COORDINATES: [number, number] = [-3.436, 55.378]; // UK coordinates

interface Props {
  ingredients: Ingredient[];
}

export default function IngredientOriginMap({ ingredients }: Props) {
  // Get unique origin countries
  const origins = Array.from(
    new Set(ingredients.map(ingredient => ingredient.origin))
  ).filter(origin => origin);

  return (
    <div className="w-full h-[400px] relative">
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 40] // Adjust center to better show all countries
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={origins.includes(geo.properties.name) ? "#93c5fd" : "#d1d5db"}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#60a5fa", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Draw arrows from origin countries to UK */}
        {origins.map((origin) => {
          const sourceCoords = getCountryCoordinates(origin);
          return (
            <React.Fragment key={`line-${origin}`}>
              <Line
                from={sourceCoords}
                to={UK_COORDINATES}
                stroke="#1d4ed8"
                strokeWidth={1}
                strokeDasharray="5,5"
              />
              <Marker coordinates={sourceCoords}>
                <circle r={4} fill="#1d4ed8" />
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "10px",
                    fill: "#1d4ed8",
                    fontWeight: "bold",
                  }}
                >
                  {origin}
                </text>
              </Marker>
            </React.Fragment>
          );
        })}

        {/* Mark UK as destination */}
        <Marker coordinates={UK_COORDINATES}>
          <circle r={6} fill="#dc2626" />
          <text
            textAnchor="middle"
            y={-10}
            style={{
              fontFamily: "system-ui",
              fontSize: "12px",
              fill: "#dc2626",
              fontWeight: "bold",
            }}
          >
            UK
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
}

function getCountryCoordinates(country: string): [number, number] {
  const coordinates: { [key: string]: [number, number] } = {
    "USA": [-95.7129, 37.0902],
    "Mexico": [-102.5528, 23.6345],
    "Brazil": [-51.9253, -14.2350],
    "Italy": [12.5674, 41.8719],
    "China": [104.1954, 35.8617],
    "India": [78.9629, 20.5937],
    "Spain": [-3.7492, 40.4637],
    "Thailand": [100.9925, 15.8700],
    "Vietnam": [108.2772, 14.0583],
    "Peru": [-75.0152, -9.1900],
    "Morocco": [-7.0926, 31.7917],
    "Greece": [21.8243, 39.0742],
    "Turkey": [35.2433, 38.9637],
    "Japan": [138.2529, 36.2048],
    "Colombia": [-74.2973, 4.5709],
    "Ethiopia": [40.4897, 9.1450],
    "Indonesia": [113.9213, -0.7893],
    "Argentina": [-63.6167, -38.4161],
    "Chile": [-71.5429, -35.6751],
    "Kenya": [37.9062, -0.0236],
  };
  
  return coordinates[country] || [0, 0];
} 