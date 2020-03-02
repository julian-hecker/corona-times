import React from "react";
import "./Map.scss";
import { VectorMap } from "react-jvectormap";
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

class Map extends React.Component {
  render() {
    const stats = this.props.stats;
    let mapData = {};

    if (stats) {
      stats.forEach(item => {
        let key = countries.getAlpha2Code(item.country, "en");
        console.log(key);
        if (!key) {
          // Sometimes countries don't get coded?
          switch (item.country) {
            case "United States":
              key = "US";
              break;
            case "Vietnam":
              key = "VN";
              break;
            case "Russia":
              key = "RU";
              break;
            case "Iran":
              key = "IR";
              break;
            case "Japan (+Diamond Princess)":
              key = "JP";
              break;
            case "North Macedonia":
              key = "MK";
              break;
            case "Czech Republic (Czechia)":
              key = "CZ";
              break;
            default:
              key = undefined;
          }
        }
        mapData[key] = item.infected;
      });

      return (
        <div className="map">
          <VectorMap
            map={"world_mill"}
            backgroundColor="#341541"
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "50vh"
            }}
            onRegionClick={handleClick} //gets the country code
            containerClassName="map-container"
            regionStyle={{
              initial: {
                fill: "#7d9",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              },
              hover: {
                "fill-opacity": 0.8,
                cursor: "pointer"
              }
            }}
            series={{
              regions: [
                {
                  values: mapData, //this is your data
                  scale: ["#aaaa00", "#ff0000"], //your color game's here
                  normalizeFunction: "polynomial"
                }
              ]
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Map;
