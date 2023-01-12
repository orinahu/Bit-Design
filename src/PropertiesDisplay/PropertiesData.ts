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
  className: {
    name: "className",
    type: "string",
    typeOptions: "-",
    isRequired: "false",
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
    name: "size",
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
    name: "iconForm",
    type: "IconForm",
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
  Id: {
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
  DateTime: {
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
    AllDataOptions.className,
  ],
  TrafficLight: [
    AllDataOptions.circleColor,
    AllDataOptions.textValue,
    AllDataOptions.className,
    AllDataOptions.circleSize,
    AllDataOptions.style,
    AllDataOptions.className,
  ],
  Icon: [
    AllDataOptions.iconName,
    AllDataOptions.iconColor,
    AllDataOptions.iconSize,
    AllDataOptions.iconStyle,
    AllDataOptions.className,
    AllDataOptions.style,
  ],
  MainListBottom: [AllDataOptions.MainListItem],
  Status: [
    AllDataOptions.circleColor,
    AllDataOptions.circleSize,

    AllDataOptions.textValue,
    AllDataOptions.textSize,
        AllDataOptions.className,

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
  Id: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.Id.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.Id.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.Id.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.Id.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.Id.textSize,
    },
    AllDataOptions.textValue,
  ],
  DateTime: [
    {
      ...AllDataOptions.iconName,
      ...diffDefaultValue.DateTime.iconName,
    },
    {
      ...AllDataOptions.iconSize,
      ...diffDefaultValue.DateTime.iconSize,
    },
    {
      ...AllDataOptions.iconColor,
      ...diffDefaultValue.DateTime.iconColor,
    },
    AllDataOptions.iconStyle,
    {
      ...AllDataOptions.textColor,
      ...diffDefaultValue.DateTime.textColor,
    },
    {
      ...AllDataOptions.textSize,
      ...diffDefaultValue.DateTime.textSize,
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
