import React from "react";
import { MainListItem } from "../in";

export const dateFormatMainList = (date: Date): string => {
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  let mi = new Intl.DateTimeFormat("en", { minute: "2-digit" }).format(date);
  let hours = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    hourCycle: "h23",
  }).format(date);
  return `${hours}:${mi}, ${da}/${mo}/${ye}`;
};

export const randomListItem = (n = 10) => {
  const array: JSX.Element[] = [];
  for (let i = 0; i < n; i++) {
    const color =randomColor();
    array.push(
      <MainListItem
        bottomLeftIconColor={color}
        bottomLeftMainListDate={new Date()}
        upperLeftTextValue={`id${Math.floor(Math.random() * 201 + 100)}`}
        leftItemCircleColor={color}
        leftItemTextValue={`component ${i + 1}`}
      />
    );
  }
  return array;
};

const randomColor = () => {
  const colors = ["red", "orange", "green"];
  return colors[Math.floor(Math.random() * 3)];
};
