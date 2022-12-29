import React from "react";
import "./TrafficLightsText.css";
import { TrafficLights } from "../TrafficLights/TrafficLights";
import { Text, TextSize } from "../Text/Text";

interface props {
  circleColor: string;
  textValue: string;
  textSize?: TextSize;
}

const TrafficLightsText = ({ circleColor, textSize, textValue }: props) => {
  return (
    <div className="traffic-lights-container">
      <div className="text-traffic">
        <Text textValue={textValue} textSize={textSize} />
      </div>
      <TrafficLights circleColor={circleColor} />
    </div>
  );
};

export { TrafficLightsText };
