export interface PropertiesData {
  name: string;
  type: string;
  typeOptions: string;
  isRequired: string;
  defaultValue: string;
}

interface AllPropertiesData {
  [key: string]: PropertiesData[];
}

const AllDataOptions = {
  textValue: {
    name: "textValue",
    type: "string",
    typeOptions: "-",
    isRequired: "true",
    defaultValue: "-",
  },
  textSize: {
    name: "textSize",
    type: "TextSize",
    typeOptions: `"small" | "medium" | "large"`,
    isRequired: "false",
    defaultValue: "medium",
  },
  textColor: {
    name: "textColor",
    type: "string",
    typeOptions: "-",
    isRequired: "false",
    defaultValue: "black",
  },
  circleColor: {
    name: "circleColor",
    type: "string",
    typeOptions: "",
    isRequired: "true",
    defaultValue: "",
  },
  circleSize: {
    name: "circleSize",
    type: "CircleSize",
    typeOptions: `'small' | 'regular' | 'large'`,
    isRequired: "false",
    defaultValue: "regular",
  },
  iconColor: {
    name: "iconColor",
    type: "string",
    typeOptions: "-",
    isRequired: "false",
    defaultValue: "black",
  },
  iconSize: {
    name: "iconSize",
    type: "IconSize",
    typeOptions: ` "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl"`,
    isRequired: "false",
    defaultValue: "sm",
  },
  iconName: {
    name: "iconName",
    type: "string",
    typeOptions: "-",
    isRequired: "true",
    defaultValue: "-",
  },
  iconStyle: {
    name: "iconStyle",
    type: "IconStyle",
    typeOptions: `"solid" | "regular" | "light"`,
    isRequired: "false",
    defaultValue: "solid",
  },
};

const diffDefaultValue = {
  MainListUpperLeftItem: {
    iconColor: { defaultValue: "#52517A" },
    iconSize: { defaultValue: "lg" },
    iconName: { defaultValue: "id-card" },
    textSize: { defaultValue: "small" },
    textColor: { defaultValue: "#606060" },
  },
  MainListRightItem: {
    iconSize: { defaultValue: "lg" },
  },
  MainListBottomLeftItem: {
    iconColor: { defaultValue: "red" },
    iconSize: { defaultValue: "lg" },
    iconName: { defaultValue: "calendar" },
    textSize: { defaultValue: "small" },
    textColor: { defaultValue: "#606060" },
  },
};

export const propertiesData: AllPropertiesData = {
  Text: [
    AllDataOptions.textValue,
    AllDataOptions.textSize,
    AllDataOptions.textColor,
  ],
  TrafficLights: [AllDataOptions.circleColor, AllDataOptions.circleSize],
  TrafficLightsText: [
    AllDataOptions.circleColor,
    AllDataOptions.circleSize,

    AllDataOptions.textValue,
    AllDataOptions.textSize,
    AllDataOptions.textColor,
  ],
  Icon: [
    AllDataOptions.iconName,
    AllDataOptions.iconColor,
    AllDataOptions.iconSize,
    AllDataOptions.iconStyle,
  ],
  MainListRightItem: [
    AllDataOptions.circleColor,
    AllDataOptions.circleSize,

    AllDataOptions.textValue,
    AllDataOptions.textSize,
    AllDataOptions.textColor,

    AllDataOptions.iconName,
    AllDataOptions.iconColor,
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListRightItem.iconSize,
    },
    AllDataOptions.iconStyle,
  ],
  MainListUpperLeftItem: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.MainListUpperLeftItem.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListUpperLeftItem.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.MainListUpperLeftItem.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.MainListUpperLeftItem.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.MainListUpperLeftItem.textSize,
    },
    AllDataOptions.textValue,
  ],
  MainListBottomLeftItem: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.MainListBottomLeftItem.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListBottomLeftItem.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.MainListBottomLeftItem.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.MainListBottomLeftItem.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.MainListBottomLeftItem.textSize,
    },
    AllDataOptions.textValue,
  ],
};
