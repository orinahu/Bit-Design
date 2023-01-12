import React from "react";
import { Text, Size } from "../../in";
import "./TrafficLights.css";

interface props {
  circleColor: string;
  size?: Size;
  text?: string;
}

const TrafficLights = ({ text = "", circleColor, size = "medium" }: props) => {
  const circleStyle: React.CSSProperties = {
    backgroundColor: circleColor,
  };

  return (
    <div className="traffic-lights-container">
      <div className={`trafficLights-circle ${size}`} style={circleStyle}></div>{" "}
      <div className="text-traffic">
        <Text text={text} size={size} />
      </div>
    </div>
  );
};

export { TrafficLights };
