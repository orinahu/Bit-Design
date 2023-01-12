import "./App.css";
import {
  Text,
  TrafficLight,
  Icon,
  Status,
  Id,
  DateTime,
  ListItem,
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

        {/* Id */}
        <div className="grid-item">Id</div>
        <div className="grid-item">
          <Id text="347A" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.Id}
          />
        </div>

        {/* DateTime */}
        <div className="grid-item">DateTime</div>
        <div className="grid-item">
          <DateTime
            date={new Date()}
            iconForm="regular"
            iconColor="green"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay
            propertiesObject={propertiesData.DateTime}
          />
        </div>
        {/* ListItem */}
        <div className="grid-item">List Item</div>
        <div className="grid-item">
          <ListItem
            date={new Date()}
            IdText="id123"
            statusCircleColor="red"
            statusText="component 1"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListItem} />
        </div>
        <div className="grid-item">Main List Bottom</div>
        <div className="grid-item">
          <MainListBottom items={items}>
            {({ color, date, id, text }: any) => (
              <ListItem
                key={id}
                statusCircleColor={color}
                date={date}
                IdText={id}
                statusText={text}
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
