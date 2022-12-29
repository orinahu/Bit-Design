import React from "react";
import "./TrafficLightsText.css";
import { TrafficLights } from "../TrafficLights/TrafficLights";
import { Text, TextSize } from "../Text/Text";

interface props {
  circleColor: string;
  textValue: string;
  size?: TextSize;
}

const TrafficLightsText = ({ circleColor, size, textValue }: props) => {
  return (
    <div className="traffic-lights-container">
      <div className="text-traffic">
        <Text textValue={textValue} size={size} />
      </div>
      <TrafficLights circleColor={circleColor} />
    </div>
  );
};

export { TrafficLightsText };
