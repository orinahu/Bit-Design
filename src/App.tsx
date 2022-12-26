import React from "react";
import "./App.css";
import { Text, TrafficLights } from "./in";

function App() {
  return (
    <div className="App">
      <h1>Display Bit design components: </h1>
      <div className="table-container">
        <table>
          <tr>
            <th className="label-title">Name</th>
            <th className="label-title">Component view</th>
          </tr>
          <tr>
            <td>Text</td>
            <td className="component-table">
              <Text text="This is a text component" />
            </td>
          </tr>
          <tr>
            <td>TrafficLights</td>
            <td className="component-table">
              <TrafficLights medium textValue="80" color="red" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
