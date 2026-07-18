"use client";

import { useMemo } from "react";
import { geoMercator } from "d3-geo";
import { feature } from "topojson-client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { Warehouse, Truck, Store, Building2 } from "lucide-react";
import keralaTopo from "../../data/kerala-districts.json";

// Actual branch locations (matches Footer branch list) + Malappuram
const branches = [
  { name: "Kannur", coordinates: [75.37, 11.87] },
  { name: "Wayanad", coordinates: [76.08, 11.61] },
  { name: "Malappuram", coordinates: [76.07, 11.04] },
  { name: "Palakkad", coordinates: [76.65, 10.78] },
  { name: "Ernakulam", coordinates: [76.28, 9.98] },
  { name: "Alappuzha", coordinates: [76.33, 9.49] },
  { name: "Kollam", coordinates: [76.61, 8.89] },
];

const supplyChainSteps = [
  {
    label: "Our Warehouse",
    desc: "Well-stocked warehouses with quality products",
    bg: "bg-[#E8402C]",
    Icon: Warehouse,
  },
  {
    label: "Distribution",
    desc: "Efficient logistics & timely delivery",
    bg: "bg-[#123B7A]",
    Icon: Truck,
  },
  {
    label: "Retailers",
    desc: "Serving 1000+ retail outlets",
    bg: "bg-[#E8402C]",
    Icon: Store,
  },
  {
    label: "Supermarkets",
    desc: "Partnering with leading supermarkets",
    bg: "bg-[#123B7A]",
    Icon: Building2,
  },
];

// Kerala is tall and narrow (north-south), so the map box should be too.
const MAP_WIDTH = 300;
const MAP_HEIGHT = 480;

export default function DistributionSupplyChain() {
  // Fit the projection to the actual geometry instead of hand-tuning
  // scale/center — this is what was causing the crop, and it will now
  // stay correct even if the container size changes later.
  const projection = useMemo(() => {
    try {
      const objectKey = Object.keys(keralaTopo.objects)[0];
      const geojson = feature(keralaTopo, keralaTopo.objects[objectKey]);
      return geoMercator().fitSize([MAP_WIDTH, MAP_HEIGHT], geojson);
    } catch (e) {
      // Fallback so a bad topojson shape doesn't crash the page
      return geoMercator().center([76.4, 10.35]).scale(6000);
    }
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-90 items-start ">
        {/* All text — left column on desktop */}
        <div className="lg:order-1  ">
          <h3 className="text-[#123B7A] text-3xl font-extrabold mb-1">
            Our Distribution
          </h3>
          <span className="block h-[3px] w-8 bg-[#E8402C] mb-4" />
          <p className="text-[#0B2748] font-semibold text-[18px] mb-1">
            7 Branches Across Kerala
          </p>
          <p className="text-slate-500 text-[15px] max-w-sm mb-18">
            Our wide network of branches helps us serve better and foster across
            the state.
          </p>

          <h3 className="text-[#123B7A] text-3xl font-extrabold mb-1">
            Our Supply Chain
          </h3>
          <span className="block h-[3px] w-8 bg-[#E8402C] mb-6" />

          <div className="flex items-start justify-between">
            {supplyChainSteps.map((s, i) => (
              <div key={s.label} className="flex items-start">
                <div className="flex flex-col items-center text-center w-[110px]">
                  <div
                    className={`w-14 h-14 rounded-full ${s.bg} flex items-center justify-center mb-3`}
                  >
                    <s.Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <p className="text-[#0B2748] font-semibold text-[14px]">
                    {s.label}
                  </p>
                  <p className="text-slate-500 text-[12px] mt-1 leading-snug">
                    {s.desc}
                  </p>
                </div>
                {i < supplyChainSteps.length - 1 && (
                  <span className="text-slate-300 text-xl mt-6 mx-1">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map only — right column on desktop */}
        <div className="lg:order-2">
          <div
            className="relative w-full mx-auto lg:mx-0 "
            style={{
              maxWidth: MAP_WIDTH,
              aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}`,
            }}
          >
            <ComposableMap
              projection={projection}
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={keralaTopo}>
                {({ geographies }) =>
                  geographies.length === 0 ? (
                    <text
                      x={MAP_WIDTH / 2}
                      y={MAP_HEIGHT / 2}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#94a3b8"
                    >
                      Loading map…
                    </text>
                  ) : (
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: "#DDE5F2",
                            stroke: "#B9C6E0",
                            strokeWidth: 0.6,
                            outline: "none",
                          },
                          hover: {
                            fill: "#c7d3ec",
                            stroke: "#B9C6E0",
                            strokeWidth: 0.6,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#c7d3ec",
                            stroke: "#B9C6E0",
                            strokeWidth: 0.6,
                            outline: "none",
                          },
                        }}
                      />
                    ))
                  )
                }
              </Geographies>

              {branches.map((b) => (
                <Marker key={b.name} coordinates={b.coordinates}>
                  <circle r={7} fill="#E8402C" opacity={0.25}>
                    <animate
                      attributeName="r"
                      values="5;10;5"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.35;0;0.35"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    r={4}
                    fill="#E8402C"
                    stroke="#fff"
                    strokeWidth={1.4}
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}
