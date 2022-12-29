import "./App.css";
import { Text, TrafficLights, TrafficLightsText, Icon } from "./in";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <h1>Display Bit design components: </h1>
      <div className="grid-container">
        <div className="grid-item title">Name</div>
        <div className="grid-item title">Component view</div>
        <div className="grid-item title">Component Attribute</div>

        {/* Text */}
        <div className="grid-item">Text</div>
        <div className="grid-item">
          <Text textValue="This is a text component" textSize="small" />
        </div>
        <div className="grid-item">
          <div>
            <span>textValue: string;</span>
            <br />
            <span> textSize?: TextSize</span>
            <br />
            <br />
            <span>TextSize - "small" | "medium" | "large";</span>
          </div>
        </div>

        {/* TrafficLights */}
        <div className="grid-item">TrafficLights</div>
        <div className="grid-item">
          <TrafficLights circleColor="green" />
        </div>
        <div className="grid-item">circleColor: string;</div>

        {/* TrafficLightsText */}
        <div className="grid-item">TrafficLightsText</div>
        <div className="grid-item">
          <TrafficLightsText
            textValue="80"
            textSize="small"
            circleColor="red"
          />
        </div>
        <div className="grid-item">
          <span>circleColor: string;</span>
          <br />
          <span> textValue: string;</span>
          <br />
          <span> textSize?: TextSize;</span>
          <br />
          <br />
          <span>TextSize - "small" | "medium" | "large";</span>
        </div>

        {/* Icon */}
        <div className="grid-item">Icon</div>
        <div className="grid-item">
          <Icon iconName="camera" iconSize="lg" iconColor="grey" />
        </div>
        <div className="grid-item">
          <span>iconColor?: string;</span>
          <br />
          <span>iconSize?: IconSize;</span>
          <br />
          <span> iconName: string;</span>
          <br />
          <br />
          <span>iconName - "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";</span>
        </div>

        {/*  */}
        {/* <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div> */}
      </div>
    </div>
  );
}

export default App;
