import React from "react";
import "./TrafficLights.css";

interface props {
  color: string;
  textValue: string;
  small?: boolean | null;
  medium?: boolean | null;
  large?: boolean | null;
}

const TrafficLights = ({
  color = "red",
  textValue,
  small,
  medium,
  large,
}: props) => {
  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
  };

  return (
    <div className="traffic-lights-container">
      <span
        className={`trafficLights-text ${small && "small"} ${
          medium && "medium"
        } ${large && "large"}`}
      >
        {textValue}
      </span>
      <div className="trafficLights-circle" style={circleStyle}></div>
    </div>
  );
};

export { TrafficLights };
