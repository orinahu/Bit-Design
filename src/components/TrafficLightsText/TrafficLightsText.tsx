import React from "react";
import "./TrafficLightsText.css";
import { TrafficLights, CircleSize } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  circleColor: string;
  textValue: string;
  textSize?: TextSize;
  circleSize?: CircleSize;
  textColor?: string;
}

const TrafficLightsText = ({
  circleColor,
  textSize,
  textValue,
  circleSize,
  textColor
}: props) => {
  return (
    <div className="traffic-lights-container">
      <div className="text-traffic">
        <Text textColor={textColor} textValue={textValue} textSize={textSize} />
      </div>
      <TrafficLights circleColor={circleColor} circleSize={circleSize} />
    </div>
  );
};

export { TrafficLightsText };
