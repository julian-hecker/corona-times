import React from "react";
import "./Map.scss";
import { VectorMap } from "react-jvectormap";
import { getAlpha2Code as getCode} from "i18n-iso-countries";


const handleClick = (e, countryCode) => {
    console.log(countryCode);
};


class Map extends React.Component {

    render() {

        const stats = this.props.stats;
        let mapData = {};
        
        if (stats) {
            stats.forEach(item => {
                console.log(getCode(item.country));
                let key = getCode(item.country);
                mapData[key] = item.infected;
                console.log(mapData[key]);
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
