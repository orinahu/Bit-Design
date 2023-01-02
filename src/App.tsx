import "./App.css";
import {
  Text,
  TrafficLights,
  TrafficLightsText,
  Icon,
  MainListRightItem,
  MainListUpperLeftItem,
} from "./in";
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
            <span> textSize?: TextSize (default - 'medium')</span>
            <br />
            <br />
            <span>TextSize - "small" | "medium" | "large";</span>
          </div>
        </div>

        {/* TrafficLights */}
        <div className="grid-item">TrafficLights</div>
        <div className="grid-item">
          <TrafficLights circleColor="green" circleSize="regular" />
        </div>
        <div className="grid-item">
          {" "}
          <span>circleColor: string; (default - 'red')</span>
          <br />
          <span>circleSize?: CircleSize (default - 'regular')</span>
          <br />
          <br />
          <span>CircleSize = 'small' | 'regular' | 'large' ;s</span>
        </div>

        {/* TrafficLightsText */}
        <div className="grid-item">TrafficLightsText</div>
        <div className="grid-item">
          <TrafficLightsText
            textValue="80"
            textSize="small"
            circleColor="red"
            circleSize="regular"
          />
        </div>
        <div className="grid-item">
          <span>circleColor: string;</span>
          <br />
          <span> textValue: string;</span>
          <br />
          <span> textSize?: TextSize;</span>
          <br />
          <span>circleSize?: CircleSize</span>
          <br />
          <br />
          <span>TextSize - "small" | "medium" | "large";</span>
          <br />
          <span>CircleSize = 'small' | 'regular' | 'large' ;s</span>
        </div>

        {/* Icon */}
        <div className="grid-item">Icon</div>
        <div className="grid-item">
          <Icon iconName="camera" iconSize="2xl" iconColor="grey" />
        </div>
        <div className="grid-item">
          <span>iconColor?: string; (default - 'black')</span>
          <br />
          <span>iconSize?: IconSize; (default - 'sm')</span>
          <br />
          <span> iconName: string;</span>
          <br />
          <span> iconStyle?: IconStyle; (default - 'solid') </span>
          <br />
          <br />
          <span>iconSize - "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";</span>
          <br />
          <span>IconStyle = "solid" | "regular" | "light";</span>
        </div>

        {/* MainListRightItem */}
        <div className="grid-item">Main List Right Item</div>
        <div className="grid-item">
          <MainListRightItem
            circleColor="red"
            iconName="image"
            textValue="רכיב 1"
            iconStyle="regular"
          />
        </div>
        <div className="grid-item">
          {" "}
          <span>circleColor: string;</span>
          <br />
          <span>iconColor?: string;</span>
          <br />
          <span>iconSize?: IconSize; (default - 'solid')</span>
          <br />
          <span>iconStyle?: IconStyle;</span>
          <br />
          <span>iconName: string;</span>
          <br />
          <span>textValue: string;</span>
          <br />
          <span>textSize?: TextSize;</span>
          <br />
          <span>circleSize?: CircleSize</span>
          <br />
          <br />
          <span>iconSize - "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";</span>
          <br />
          <span>IconStyle = "solid" | "regular" | "light";</span>
          <br />
          <span>CircleSize = 'small' | 'regular' | 'large' ;s</span>
        </div>

        {/* MainListUpperLeftItem */}

        <div className="grid-item">Main List Upper Left Item</div>
        <div className="grid-item">
          <MainListUpperLeftItem iconName="id-card" textValue="347A" />
        </div>
        <div className="grid-item">
          {" "}
          <span>iconName: string;</span>
          <br />
          <span>iconColor?: string; (default - '#52517A')</span>
          <br />
          <span> iconSize?: IconSize; (default - 'lg')</span>
          <br />
          <span> iconStyle?: IconStyle;</span>
          <br />
          <span> textValue: string;</span>
          <br />
          <span> textSize?: TextSize;  (default - 'small')</span>
          <br />
          <br />
          <span>iconSize - "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";</span>
          <br />
          <span>IconStyle = "solid" | "regular" | "light";</span>
          <br />
          <span>TextSize - "small" | "medium" | "large";</span>
        </div>
        <div className="grid-item">7</div>
        <div className="grid-item">7</div>
      </div>
    </div>
  );
}

export default App;
