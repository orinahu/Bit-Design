import "./App.css";
import {
  Text,
  TrafficLights,
  TrafficLightsText,
  Icon,
  MainListRightItem,
  MainListUpperLeftItem,
  MainListBottomLeftItem,
  MainListItem,
} from "./in";
import "font-awesome/css/font-awesome.min.css";
import PropertiesDisplay from "./PropertiesDisplay/PropertiesDisplay";
import { propertiesData } from "./PropertiesDisplay/PropertiesData";

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
          <PropertiesDisplay propertiesObject={propertiesData.Text} />
        </div>

        {/* TrafficLights */}
        <div className="grid-item">TrafficLights</div>
        <div className="grid-item">
          <TrafficLights circleColor="green" circleSize="regular" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.TrafficLights} />
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
          <PropertiesDisplay
            propertiesObject={propertiesData.TrafficLightsText}
          />
        </div>

        {/* Icon */}
        <div className="grid-item">Icon</div>
        <div className="grid-item">
          <Icon iconName="camera" iconSize="2xl" iconColor="grey" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Icon} />
        </div>

        {/* MainListRightItem */}
        <div className="grid-item">Main List Right Item</div>
        <div className="grid-item">
          <MainListRightItem
            circleColor="red"
            textValue="רכיב 1"
            iconStyle="regular"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.MainListRightItem}
          />
        </div>

        {/* MainListUpperLeftItem */}
        <div className="grid-item">Main List Upper Left Item</div>
        <div className="grid-item">
          <MainListUpperLeftItem textValue="347A" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.MainListUpperLeftItem}
          />
        </div>

        {/* MainListBottomLeftItem */}
        <div className="grid-item">Main List Bottom Left Item</div>
        <div className="grid-item">
          <MainListBottomLeftItem
            mainListDate={new Date()}
            iconStyle="regular"
            iconColor="green"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.MainListBottomLeftItem}
          />
        </div>
        {/* MainListItem */}
        <div className="grid-item">Main List Item</div>
        <div className="grid-item">
          <MainListItem
            bottomLeftIconColor="red"
            bottomLeftMainListDate={new Date()}
            upperLeftTextValue="id123"
            rightItemCircleColor="red"
            rightItemTextValue="רכיב 1"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.MainListItem} />
        </div>
        {/* <div className="grid-item">7</div>
        <div className="grid-item">7</div> */}
      </div>
    </div>
  );
}

export default App;
