import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import { points, gradientColors } from "./Data";

const mapState = {
  center: [55.751574, 80.573856],
  zoom: 3,
  behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>"
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon",
    iconColor: getRandomColor()
  };
};

function getRandomColor() {
  return gradientColors[Math.floor(Math.random() * gradientColors.length)];
}

class PlacesMap extends React.Component {
  constructor(props) {
    super(props);
    this.changeSomething = this.changeSomething.bind(this);
    this.state = {
      some: 0
    };
  }

  changeSomething = () => {
    this.setState({ some: 1 });
  };

  render() {
    return (
      <div>
        <YMaps>
          <Map
            state={mapState}
            width="750px"
            height="600px"
            modules={["package.full"]}
          >
            <Clusterer
              options={{
                clusterIconLayout: "default#pieChart",
                clusterIconPieChartRadius: 25,
                clusterIconPieChartCoreRadius: 10,
                clusterIconPieChartStrokeWidth: 1,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false
              }}
            >
              {points.map((points, idx) => (
                <Placemark
                  key={idx}
                  geometry={points}
                  properties={getPointData(idx)}
                  options={getPointOptions()}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
        <button
          onClick={this.changeSomething}
          style={{ marginTop: 40, width: 200, height: 60 }}
        >
          Click to rerender
        </button>
      </div>
    );
  }
}

export default PlacesMap;