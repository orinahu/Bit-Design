import "./App.css";
import {
  Text,
  TrafficLight,
  Icon,
  Status,
  MainListUpperRightItem,
  MainListBottomRightItem,
  MainListItem,
  MainListBottom,
  Dropdown,
} from "./in";
import "font-awesome/css/font-awesome.min.css";
import PropertiesDisplay from "./PropertiesDisplay/PropertiesDisplay";
import { propertiesData } from "./PropertiesDisplay/PropertiesData";
import { randomListItem } from "./helper/helper";
const items: any[] = randomListItem(10);

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
          <Text text="This is a text component" size="small" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Text} />
        </div>

        {/* TrafficLight */}
        <div className="grid-item">TrafficLight</div>
        <div className="grid-item">
          <TrafficLight circleColor="green" size="medium" text="80" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.TrafficLight} />
        </div>


        {/* Icon */}
        <div className="grid-item">Icon</div>
        <div className="grid-item">
          <Icon iconName="camera" iconSize="2xl" iconColor="grey" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Icon} />
        </div>

        {/* Status */}
        <div className="grid-item">Status</div>
        <div className="grid-item">
          <Status
            circleColor="red"
            text="component 1"
            iconForm="regular"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.Status}
          />
        </div>

        {/* MainListUpperRightItem */}
        <div className="grid-item">Main List Upper Left Item</div>
        <div className="grid-item">
          <MainListUpperRightItem textValue="347A" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.MainListUpperRightItem}
          />
        </div>

        {/* MainListBottomRightItem */}
        <div className="grid-item">Main List Bottom Left Item</div>
        <div className="grid-item">
          <MainListBottomRightItem
            mainListDate={new Date()}
            iconStyle="regular"
            iconColor="green"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.MainListBottomRightItem}
          />
        </div>
        {/* MainListItem */}
        <div className="grid-item">Main List Item</div>
        <div className="grid-item">
          <MainListItem
            bottomRightIconColor="red"
            bottomRightMainListDate={new Date()}
            upperRightTextValue="id123"
            leftItemCircleColor="red"
            leftItemTextValue="component 1"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.MainListItem} />
        </div>
        <div className="grid-item">Main List Bottom</div>
        <div className="grid-item">
          <MainListBottom items={items}>
            {({ color, date, id, text }: any) => (
              <MainListItem
                key={id}
                bottomRightIconColor={color}
                bottomRightMainListDate={date}
                upperRightTextValue={id}
                leftItemCircleColor={color}
                leftItemTextValue={text}
              />
            )}
          </MainListBottom>
        </div>
        <div className="grid-item table">
          {" "}
          <PropertiesDisplay propertiesObject={propertiesData.MainListBottom} />
        </div>

        {/* DropDown */}

        <div className="grid-item">DropDown</div>
        <div className="grid-item">
          <Dropdown options={["status", "name"]} />
        </div>
        <div className="grid-item">7</div>
        {/* <div className="grid-item">7</div> */}
      </div>
    </div>
  );
}

export default App;
