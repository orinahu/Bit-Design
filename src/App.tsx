import "./App.css";
import React, { useState } from "react";
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
  InnerListFilter,
  ListTitle,
  InnerList,
  RootItemText,
  TrafficLights,
  RootListItem
} from "./in";
import "font-awesome/css/font-awesome.min.css";
import PropertiesDisplay from "./PropertiesDisplay/PropertiesDisplay";
import { propertiesData } from "./PropertiesDisplay/PropertiesData";
import { randomListItem } from "./helper/helper";
const items: any[] = randomListItem(10);

const trafficlightsData = [{ ComponentStatus: 'ERROR' as const, counter: 4 }, { ComponentStatus: 'WARN' as const, counter: 2 }, { ComponentStatus: 'OK' as const, counter: 6 },]

function App() {
  // dropDown
  const options = ["status", "lastTimeCheck", "adventStatus"];
  const [dropdownValue, setDropdownValue] = useState(options[0]);

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
            date={new Date()}
            IdText="id123"
            statusCircleColor="red"
            statusText="component 1"
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListItem} />
        </div>
        <div className="grid-item">Inner List items</div>
        <div className="grid-item">
          <ListItems items={items}>
            {({ color, date, id, text }: any) => (
              <ListItem
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
            options={options}
            value={dropdownValue}
            setDropdownValue={setDropdownValue}
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.DropDown} />
        </div>

        {/* Filter */}
        <div className="grid-item">Filter</div>
        <div className="grid-item">
          <Filter />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Filter} />
        </div>

        {/* InnerListFilter */}
        <div className="grid-item">InnerListFilter</div>
        <div className="grid-item">
          <InnerListFilter
            options={options}
            value={dropdownValue}
            setDropdownValue={setDropdownValue} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.Filter} />
        </div>

        {/* InnerListTitle */}
        <div className="grid-item">ListTitle</div>
        <div className="grid-item">
          <ListTitle number={10} name={'engine'} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListTitle} />
        </div>

        {/* InnerList */}
        <div className="grid-item">InnerList</div>
        <div className="grid-item">
          <InnerList
            titleNumber={10}
            titleName={'engine'}
            filterOptions={options}
            filterValue={dropdownValue}
            filterSetDropdownValue={setDropdownValue}
            InnerItems={items}
            renderItemsFunction={
              ({ color, date, id, text }: any) => (
                <ListItem
                  key={id}
                  statusCircleColor={color}
                  date={date}
                  IdText={id}
                  statusText={text}
                />
              )
            }
          />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListTitle} />
        </div>

        {/* rootItemText */}
        <div className="grid-item">RootItemText</div>
        <div className="grid-item">
          <RootItemText number={10} name={'engine'} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.ListTitle} />
        </div>

        {/* TrafficLights */}
        <div className="grid-item">TrafficLights</div>
        <div className="grid-item">
          <TrafficLights SDerivedStatusCounter={trafficlightsData} />
        </div>
        <div className="grid-item">
          <PropertiesDisplay propertiesObject={propertiesData.TrafficLights} />
        </div>

        {/* RootListItem */}
        <div className="grid-item">RootListItem</div>
        <div className="grid-item">
          <RootListItem  textNumber={10} textName={'engine'} SDerivedStatusCounter={trafficlightsData}/>
        </div>
        <div className="grid-item">
          {/* <PropertiesDisplay propertiesObject={propertiesData.TrafficLights} /> */}
        </div>

      </div>
    </div>

  );
}

export default App;
