import "./TrafficLights.css";
import { TrafficLight, Text, Size } from "../../in";

export type componenetsStatus = "ERROR" | "WARN" | "OK";

export interface StatusComponents {
  ComponentStatus: componenetsStatus;
  counter: number;
}

interface props {
  statusComponents: StatusComponents[];
  size?: Size;
  className?: string;
}

const statusToColor = (status: componenetsStatus) => {
  switch (status) {
    case "ERROR":
      return "red";
    case "WARN":
      return "orange";
    case "OK":
      return "green";
  }
};

const TrafficLights = ({
  statusComponents,
  className,
  size = "small",
}: props) => {
  return (
    <div className={`trafficlights-container ${className}`}>
      {statusComponents.map(({ ComponentStatus, counter }) => {
        return (
          !!counter && (
            <div className="bit-traffic-lights">
              <TrafficLight
                text={counter.toString()}
                circleColor={statusToColor(ComponentStatus)}
                size={size}
              />
            </div>
          )
        );
      })}
    </div>
  );
};

export { TrafficLights };
