import React from "react";
import "./Map.scss";
import { VectorMap } from "react-jvectormap";
const { getCode, getName, getData } = require("country-list");


const handleClick = (e, countryCode) => {
    console.log(countryCode);
};


class Map extends React.Component {

    render() {



        const stats = this.props.stats;
        if (stats) {

            console.log(stats);

            let mapData = {
                CN: 68502,
                JP: 408,
                SG: 72,
                HK: 56,
                TH: 34,
                KR: 29,
                MY: 22,
                TW: 18,
                VN: 16,
                DE: 16,
                AU: 16,
                US: 16,
                FR: 16,
            };



            console.log(stats.map(item => {
                return item.country;
            }));


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
                        },
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
        } else { return null; }
    }
};
export default Map;
