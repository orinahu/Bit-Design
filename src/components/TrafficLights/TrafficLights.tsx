import React from "react";
import "./TrafficLights.css";

interface props {
  circleColor: string;
}

const TrafficLights = ({ circleColor = "red" }: props) => {
  const circleStyle: React.CSSProperties = {
    backgroundColor: circleColor,
  };

  return <div className="trafficLights-circle" style={circleStyle}></div>;
};

export { TrafficLights };
