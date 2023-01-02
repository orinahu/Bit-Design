import React from "react";
import { PropertiesData } from "./PropertiesData";

interface props {
  propertiesObject: PropertiesData[];
}

const PropertiesDisplay = ({ propertiesObject }: props) => {
  const renderProperties = () => {
    const property = propertiesObject.reduce(
      (acc: any, currentValue: PropertiesData) => {
        const keys = Object.keys(currentValue);
        const propertyValues = keys.map((property: string) => {
          return (
            <div className="grid-item">
              {currentValue[property as keyof typeof currentValue]}
            </div>
          );
        });
        console.log([...acc, ...propertyValues]);
        return [...acc, ...propertyValues];
      },
      []
    );
    return property;
  };

  return (
    <div className="grid-container-inside inside-tabel">
      <div className="grid-item title">Name</div>
      <div className="grid-item title">Type</div>
      <div className="grid-item title">typeOptions</div>
      <div className="grid-item title">isRequired</div>
      <div className="grid-item title">defaultValue</div>
      {renderProperties()}
    </div>
  );
};

export default PropertiesDisplay;
