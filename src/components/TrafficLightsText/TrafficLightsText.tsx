import React from "react";
import "./TrafficLightsText.css";
import { TrafficLights, CircleSize } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  circleColor: string;
  textValue: string;
  textSize?: TextSize;
  circleSize?: CircleSize;
}

const TrafficLightsText = ({
  circleColor,
  textSize,
  textValue,
  circleSize,
}: props) => {
  return (
    <div className="traffic-lights-container">
      <div className="text-traffic">
        <Text textValue={textValue} textSize={textSize} />
      </div>
      <TrafficLights circleColor={circleColor} circleSize={circleSize} />
    </div>
  );
};

export { TrafficLightsText };
