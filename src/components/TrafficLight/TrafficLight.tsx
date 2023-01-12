import React from "react";
import { Text, Size } from "../../in";
import "./TrafficLight.css";

interface props {
  circleColor: string;
  size?: Size;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TrafficLight = ({style, className, text = "", circleColor, size = "medium" }: props) => {
  const circleStyle: React.CSSProperties = {
    backgroundColor: circleColor,
    ...style
  };

  return (
    <div className={`bit-traffic-lights-container ${className}`}>
      <div className={`trafficLights-circle ${size}`} style={circleStyle}></div>{" "}
      <div className="text-traffic">
        <Text text={text} size={size} />
      </div>
    </div>
  );
};

export { TrafficLight };
