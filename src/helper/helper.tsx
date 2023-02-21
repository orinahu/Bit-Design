import React from "react";
import { ListItem } from "../in";

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
  const array: any[] = [];
  for (let i = 0; i < n; i++) {
    const color = randomColor();

    array.push({
      color,
      date: new Date(),
      id: `id${Math.floor(Math.random() * 201 + 100)}`,
      text: `component ${i + 1}`,
    });
  }
  return array;
};

export const randomListRootItem = (n = 10) => {
  const array: any[] = [];
  for (let i = 0; i < n; i++) {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const number3 = Math.floor(Math.random() * 10);

    array.push({
      trafficlightsData: [
        { ComponentStatus: "ERROR" as const, counter: number1 },
        { ComponentStatus: "WARN" as const, counter: number2 },
        { ComponentStatus: "OK" as const, counter: number3 },
      ],
      textNumber: number1 + number2 + number3,
      textName: `component ${i + 1}`,
    });
  }
  return array;
};

const randomColor = () => {
  const colors = ["red", "orange", "green"];
  return colors[Math.floor(Math.random() * 3)];
};
