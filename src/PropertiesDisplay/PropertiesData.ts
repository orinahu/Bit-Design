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
    name: "text",
    type: "string",
    typeOptions: "-",
    isRequired: "true",
    defaultValue: "-",
  },
  textSize: {
    name: "size",
    type: "Size",
    typeOptions: `"small" | "medium" | "large"`,
    isRequired: "false",
    defaultValue: "medium",
  },
  style: {
    name: "style",
    type: "css-object",
    typeOptions: `-`,
    isRequired: "false",
    defaultValue: "-",
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
    type: "Size",
    typeOptions: `'small' | 'medium' | 'large'`,
    isRequired: "false",
    defaultValue: "medium",
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
  mainListDate: {
    name: "mainListDate",
    type: "Date",
    typeOptions: `-`,
    isRequired: "true",
    defaultValue: "-",
  },
  selected: {
    name: "selected",
    type: "boolean",
    typeOptions: `-`,
    isRequired: "false",
    defaultValue: "false",
  },
  MainListItem: {
    name: "react-children",
    type: "JSX.Element[] | JSX.Element",
    typeOptions: `-`,
    isRequired: "false",
    defaultValue: "",
  },
};

const diffDefaultValue = {
  MainListUpperRightItem: {
    iconColor: { defaultValue: "#52517A" },
    iconSize: { defaultValue: "lg" },
    iconName: { defaultValue: "id-card", isRequired: "false" },
    textSize: { defaultValue: "small" },
    textColor: { defaultValue: "#606060" },
  },
  MainListRightItem: {
    iconSize: { defaultValue: "lg" },
    iconName: { defaultValue: "image", isRequired: "false" },
  },
  MainListBottomRightItem: {
    iconColor: { defaultValue: "red", isRequired: "true" },
    iconSize: { defaultValue: "lg" },
    iconName: { defaultValue: "calendar", isRequired: "false" },
    textSize: { defaultValue: "small" },
    textColor: { defaultValue: "#606060" },
  },
  MainListItem: {
    bottomRightIconName: {
      ...AllDataOptions.iconName,
      name: "bottomRightIconName",
      isRequired: "false",
    },
    bottomRightIconColor: {
      ...AllDataOptions.iconColor,
      name: "bottomRightIconColor",
      isRequired: "true",
    },
    bottomRightIconSize: {
      ...AllDataOptions.iconSize,
      name: "bottomRightIconSize",
    },
    bottomRightIconStyle: {
      ...AllDataOptions.iconStyle,
      name: "bottomRightIconStyle",
    },
    bottomRightTextSize: {
      ...AllDataOptions.textSize,
      name: "bottomRightTextSize",
    },
    bottomRightTextColor: {
      ...AllDataOptions.textColor,
      name: "bottomRightTextColor",
    },
    bottomRightMainListDate: {
      ...AllDataOptions.mainListDate,
      name: "bottomRightMainListDate",
    },
    upperRightIconName: {
      ...AllDataOptions.iconName,
      name: "upperRightIconName",
      isRequired: "false",
    },
    upperRightIconColor: {
      ...AllDataOptions.iconColor,
      name: "upperRightIconColor",
    },
    upperRightIconSize: {
      ...AllDataOptions.iconSize,
      name: "upperRightIconSize",
    },
    upperRightIconStyle: {
      ...AllDataOptions.iconStyle,
      name: "upperRightIconStyle",
    },
    upperRightTextValue: {
      ...AllDataOptions.textValue,
      name: "upperRightTextValue",
    },
    upperRightTextSize: {
      ...AllDataOptions.textSize,
      name: "upperRightTextSize",
    },
    upperRightTextColor: {
      ...AllDataOptions.textColor,
      name: "upperRightTextColor",
    },
    leftItemCircleColor: {
      ...AllDataOptions.circleColor,
      name: "leftItemCircleColor",
    },
    leftItemIconColor: {
      ...AllDataOptions.iconColor,
      name: "leftItemIconColor",
    },
    leftItemIconSize: {
      ...AllDataOptions.iconSize,
      name: "leftItemIconSize",
    },
    leftItemIconStyle: {
      ...AllDataOptions.iconStyle,
      name: "leftItemIconStyle",
    },
    leftItemIconName: {
      ...AllDataOptions.iconName,
      name: "leftItemIconName",
      isRequired: "false",
    },
    leftItemTextValue: {
      ...AllDataOptions.textValue,
      name: "leftItemTextValue",
    },
    leftItemTextSize: {
      ...AllDataOptions.textSize,
      name: "leftItemTextSize",
    },
    leftItemCircleSize: {
      ...AllDataOptions.circleSize,
      name: "leftItemCircleSize",
    },
    leftItemTextColor: {
      ...AllDataOptions.textColor,
      name: "leftItemTextColor",
    },
  },
};

export const propertiesData: AllPropertiesData = {
  Text: [
    AllDataOptions.textValue,
    AllDataOptions.textSize,
    AllDataOptions.style,
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
  MainListBottom: [
    AllDataOptions.MainListItem
  ],
  MainListLeftItem: [
    AllDataOptions.circleColor,
    AllDataOptions.circleSize,

    AllDataOptions.textValue,
    AllDataOptions.textSize,
    AllDataOptions.textColor,

    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.MainListRightItem.iconName,
    },
    AllDataOptions.iconColor,
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListRightItem.iconSize,
    },
    AllDataOptions.iconStyle,
  ],
  MainListUpperRightItem: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.MainListUpperRightItem.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListUpperRightItem.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.MainListUpperRightItem.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.MainListUpperRightItem.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.MainListUpperRightItem.textSize,
    },
    AllDataOptions.textValue,
  ],
  MainListBottomRightItem: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.MainListBottomRightItem.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.MainListBottomRightItem.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.MainListBottomRightItem.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.MainListBottomRightItem.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.MainListBottomRightItem.textSize,
    },
    AllDataOptions.mainListDate,
  ],
  MainListItem: [
    { ...diffDefaultValue.MainListItem.bottomRightIconColor },
    { ...diffDefaultValue.MainListItem.bottomRightIconName },
    { ...diffDefaultValue.MainListItem.bottomRightIconSize },
    { ...diffDefaultValue.MainListItem.bottomRightIconStyle },
    { ...diffDefaultValue.MainListItem.bottomRightMainListDate },
    { ...diffDefaultValue.MainListItem.bottomRightTextColor },
    { ...diffDefaultValue.MainListItem.bottomRightTextSize },
    { ...diffDefaultValue.MainListItem.leftItemCircleColor },
    { ...diffDefaultValue.MainListItem.leftItemCircleSize },
    { ...diffDefaultValue.MainListItem.leftItemIconColor },
    { ...diffDefaultValue.MainListItem.upperRightIconName },
    { ...diffDefaultValue.MainListItem.leftItemIconSize },
    { ...diffDefaultValue.MainListItem.leftItemTextValue },
    { ...diffDefaultValue.MainListItem.leftItemIconStyle },
    { ...diffDefaultValue.MainListItem.leftItemIconName },
    { ...diffDefaultValue.MainListItem.leftItemTextSize },
    { ...diffDefaultValue.MainListItem.leftItemTextColor },
    { ...AllDataOptions.selected },
    { ...diffDefaultValue.MainListItem.upperRightIconColor },
    { ...diffDefaultValue.MainListItem.upperRightIconSize },
    { ...diffDefaultValue.MainListItem.upperRightIconStyle },
    { ...diffDefaultValue.MainListItem.upperRightIconStyle },
    { ...diffDefaultValue.MainListItem.upperRightTextColor },
    { ...diffDefaultValue.MainListItem.upperRightTextSize },
    { ...diffDefaultValue.MainListItem.upperRightTextValue },
  ],
};
