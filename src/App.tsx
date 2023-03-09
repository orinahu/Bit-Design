import "./App.css";
import {
  Text,
  TrafficLight,
  Icon,
  Status,
  Id,
  DateTime,
  ListItem,
  ListItems,
  Dropdown,
  Filter,
  ComponentsListFilter,
  ListTitle,
  SystemItemText,
  TrafficLights,
  SystemListItem,
  ListMenu,
} from "./in";
import "font-awesome/css/font-awesome.min.css";
import PropertiesDisplay from "./PropertiesDisplay/PropertiesDisplay";
import { propertiesData } from "./PropertiesDisplay/PropertiesData";
import { randomListItem, randomListRootItem } from "./helper/helper";

const items: any[] = randomListItem(10);
const rootItems: any[] = randomListRootItem(10);

const trafficlightsData = [
  { ComponentStatus: "ERROR" as const, counter: 4 },
  { ComponentStatus: "WARN" as const, counter: 2 },
  { ComponentStatus: "OK" as const, counter: 6 },
];

const filters = [
  {
    title: "Component Status",
    items: [
      { name: "damaged", checked: false },
      { name: "warning", checked: true },
      { name: "undamaged", checked: false },
    ],
  },
  {
    title: "Advent Status:",
    items: [
      { name: "3", checked: false },
      { name: "6", checked: true },
      { name: "24", checked: false },
      { name: "week", checked: false },
    ],
  },
];

function App() {
  // dropDown
  const options = [
    { key: "status", value: "Status" },
    { key: "lastTimeCheck", value: "Last Time Check" },
    { key: "adventStatus", value: "Advent Status" },
  ];

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
          <Status circleColor="red" text="component 1" iconForm="regular" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Status} />
        </div>

        {/* Id */}
        <div className="grid-item">Id</div>
        <div className="grid-item">
          <Id text="347A" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Id} />
        </div>

        {/* DateTime */}
        <div className="grid-item">DateTime</div>
        <div className="grid-item">
          <DateTime date={new Date()} iconForm="regular" iconColor="green" />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.DateTime} />
        </div>
        {/* ListItem */}
        <div className="grid-item">List Item</div>
        <div className="grid-item">
          <ListItem
            onClick={() => console.log("Item Click")}
            date={new Date()}
            IdText="id123"
            statusCircleColor="red"
            statusText="component 1"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListItem} />
        </div>

        {/* ListItems */}
        <div className="grid-item">ListItems</div>
        <div className="grid-item">
          <ListItems items={items}>
            {({ color, date, id, text }: any) => (
              <ListItem
                onClick={() => console.log("Item Click")}
                key={id}
                statusCircleColor={color}
                date={date}
                IdText={id}
                statusText={text}
              />
            )}
          </ListItems>
        </div>
        <div className="grid-item table">
          {" "}
          <PropertiesDisplay propertiesObject={propertiesData.MainListBottom} />
        </div>

        {/* DropDown */}
        <div className="grid-item">DropDown</div>
        <div className="grid-item">
          <Dropdown
            chosenOption={options[0]}
            options={options}
            onChange={(option) => console.log(option.value, " from onChange")}
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.DropDown} />
        </div>

        {/* Filter */}
        <div className="grid-item">Filter</div>
        <div className="grid-item">
          <Filter
            filterItem={filters}
            onChange={(ChangeData) =>
              console.log("on change data ", ChangeData)
            }
            onFiltered={(filterData) =>
              console.log("on filter data ", filterData)
            }
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Filter} />
        </div>

        {/* ComponentsListFilter */}
        <div className="grid-item">ComponentsListFilter</div>
        <div className="grid-item">
          <ComponentsListFilter
            chosenOption={options[0]}
            options={options}
            onChange={(option) => console.log(option.value, " from onChange")}
            filterItem={filters}
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Filter} />
        </div>

        {/* InnerListTitle */}
        <div className="grid-item">ListTitle</div>
        <div className="grid-item">
          <ListTitle number={10} name={"engine"} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListTitle} />
        </div>

        {/* SystemItemText */}
        <div className="grid-item">SystemItemText</div>
        <div className="grid-item">
          <SystemItemText number={10} name={"engine"} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListTitle} />
        </div>

        {/* TrafficLights */}
        <div className="grid-item">TrafficLights</div>
        <div className="grid-item">
          <TrafficLights statusComponents={trafficlightsData} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.TrafficLights} />
        </div>

        {/* SystemListItem */}
        <div className="grid-item">SystemListItem</div>
        <div className="grid-item">
          <SystemListItem
            onClick={() => console.log("onClick clicked")}
            textNumber={10}
            textName={"engine"}
            statusComponents={trafficlightsData}
          />
        </div>
        <div className="grid-item">
          {/* <PropertiesDisplay propertiesObject={propertiesData.TrafficLights} /> */}
        </div>

        {/* ListItems */}
        <div className="grid-item">ListItems</div>
        <div className="grid-item">
          <ListItems items={rootItems}>
            {({ trafficlightsData, textNumber, textName }: any) => (
              <SystemListItem
                onClick={() => console.log("onClick clicked")}
                textNumber={textNumber}
                textName={textName}
                statusComponents={trafficlightsData}
              />
            )}
          </ListItems>
        </div>
        <div className="grid-item table">
          {" "}
          <PropertiesDisplay propertiesObject={propertiesData.MainListBottom} />
        </div>

        {/* ListMenu */}
        <div className="grid-item">ListMenu for Components</div>
        <div className="grid-item">
          <ListMenu
            renderTitle={() => {
              return (
                <div>
                  {" "}
                  <ListTitle number={10} name={"engine"} />{" "}
                </div>
              );
            }}
            renderFilters={() => {
              return (
                <ComponentsListFilter
                  chosenOption={options[0]}
                  options={options}
                  onChange={(option) =>
                    console.log(option.value, " from onChange")
                  }
                  filterItem={filters}
                />
              );
            }}
            renderItems={() => {
              return (
                <div>
                  {" "}
                  <ListItems items={items}>
                    {({ color, date, id, text }: any) => (
                      <ListItem
                        onClick={() => console.log("Item Click")}
                        key={id}
                        statusCircleColor={color}
                        date={date}
                        IdText={id}
                        statusText={text}
                      />
                    )}
                  </ListItems>
                </div>
              );
            }}
          />
        </div>
        <div className="grid-item table">
          {" "}
          <PropertiesDisplay propertiesObject={propertiesData.MainList} />
        </div>

        {/* ListMenu */}
        <div className="grid-item">ListMenu for System</div>
        <div className="grid-item">
          <ListMenu
            renderTitle={() => {
              return (
                <div>
                  {" "}
                  <ListTitle number={15} name={"System"} />{" "}
                </div>
              );
            }}
            renderItems={() => {
              return (
                <div>
                  {" "}
                  <ListItems items={rootItems}>
                    {({ trafficlightsData, textNumber, textName }: any) => (
                      <SystemListItem
                        onClick={() => console.log("onClick clicked")}
                        textNumber={textNumber}
                        textName={textName}
                        statusComponents={trafficlightsData}
                      />
                    )}
                  </ListItems>
                </div>
              );
            }}
          />
        </div>
        <div className="grid-item table">
          {" "}
          <PropertiesDisplay propertiesObject={propertiesData.MainList} />
        </div>
      </div>
    </div>
  );
}

export default App;
