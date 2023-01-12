import React from "react";
import "./TrafficLightsText.css";
import { TrafficLights } from "../../in";
import { Text, Size } from "../../in";

interface props {
  circleColor: string;
  textValue: string;
  size?: Size ;
  textColor?: string;
}

const TrafficLightsText = ({
  circleColor,
  textValue,
  textColor,
  size,
}: props) => {
  return (
    <div className="traffic-lights-container">
      <TrafficLights circleColor={circleColor} size={size} />
      <div className="text-traffic">
        <Text color={textColor} text={textValue} size={size} />
      </div>
    </div>
  );
};

export { TrafficLightsText };
