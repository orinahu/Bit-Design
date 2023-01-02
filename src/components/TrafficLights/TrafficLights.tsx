import React from "react";
import "./TrafficLights.css";

export type CircleSize = 'small' | 'regular' | 'large' 

interface props {
  circleColor: string;
  circleSize?: CircleSize
}

const TrafficLights = ({ circleColor = "red", circleSize = 'regular' }: props) => {
  const circleStyle: React.CSSProperties = {
    backgroundColor: circleColor,
  };

  return <div className={`trafficLights-circle ${circleSize}`} style={circleStyle}></div>;
};

export { TrafficLights };
