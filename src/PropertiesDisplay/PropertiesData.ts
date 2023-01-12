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
    name: "date",
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
  ListItem: {
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
  },
  ListItem: {
    DateTimeIconName: {
      ...AllDataOptions.iconName,
      name: "DateTimeIconName",
      isRequired: "false",
    },
    DateTimeIconColor: {
      ...AllDataOptions.iconColor,
      name: "DateTimeIconColor",
      isRequired: "true",
    },
    DateTimeIconSize: {
      ...AllDataOptions.iconSize,
      name: "DateTimeIconSize",
    },
    DateTimeIconForm: {
      ...AllDataOptions.iconStyle,
      name: "DateTimeIconForm",
    },
    DateTimeSize: {
      ...AllDataOptions.textSize,
      name: "DateTimeSize",
    },
    DateTimeTextColor: {
      name: "DateTimeSize",
    },
    DateTimeMainListDate: {
      ...AllDataOptions.mainListDate,
      name: "date",
    },
    IdIconName: {
      ...AllDataOptions.iconName,
      name: "IdIconName",
      isRequired: "false",
    },
    IdIconColor: {
      ...AllDataOptions.iconColor,
      name: "IdIconColor",
    },
    IdIconSize: {
      ...AllDataOptions.iconSize,
      name: "IdIconSize",
    },
    IdIconForm: {
      ...AllDataOptions.iconStyle,
      name: "IdIconForm",
    },
    IdText: {
      ...AllDataOptions.textValue,
      name: "IdText",
    },
    IdSize: {
      ...AllDataOptions.textSize,
      name: "IdSize",
    },
    IdTextColor: {
      name: "IdTextColor",
    },
    statusCircleColor: {
      ...AllDataOptions.circleColor,
      name: "statusCircleColor",
    },
    statusIconColor: {
      ...AllDataOptions.iconColor,
      name: "statusIconColor",
    },
    statusIconSize: {
      ...AllDataOptions.iconSize,
      name: "statusIconSize",
    },
    statusIconForm: {
      ...AllDataOptions.iconStyle,
      name: "statusIconForm",
    },
    statusIconName: {
      ...AllDataOptions.iconName,
      name: "statusIconName",
      isRequired: "false",
    },
    statusText: {
      ...AllDataOptions.textValue,
      name: "statusText",
    },
    statusSize: {
      ...AllDataOptions.textSize,
      name: "statusSize",
    },
    statusCircleSize: {
      ...AllDataOptions.circleSize,
      name: "statusCircleSize",
    },
    statusTextColor: {
      name: "statusTextColor",
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
  MainListBottom: [AllDataOptions.ListItem],
  Status: [
    AllDataOptions.className,
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
    AllDataOptions.className,
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
      ...AllDataOptions.textSize,
      ...diffDefaultValue.Id.textSize,
    },
    AllDataOptions.textValue,
  ],
  DateTime: [
    AllDataOptions.className,
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
      ...AllDataOptions.textSize,
      ...diffDefaultValue.DateTime.textSize,
    },
    AllDataOptions.mainListDate,
  ],
  ListItem: [
    AllDataOptions.className,
    { ...diffDefaultValue.ListItem.DateTimeIconColor },
    { ...diffDefaultValue.ListItem.DateTimeIconName },
    { ...diffDefaultValue.ListItem.DateTimeIconSize },
    { ...diffDefaultValue.ListItem.DateTimeIconForm },
    { ...diffDefaultValue.ListItem.DateTimeMainListDate },
    { ...diffDefaultValue.ListItem.DateTimeSize },
    { ...diffDefaultValue.ListItem.statusCircleColor },
    { ...diffDefaultValue.ListItem.statusCircleSize },
    { ...diffDefaultValue.ListItem.statusIconColor },
    { ...diffDefaultValue.ListItem.IdIconName },
    { ...diffDefaultValue.ListItem.statusIconSize },
    { ...diffDefaultValue.ListItem.statusText },
    { ...diffDefaultValue.ListItem.statusIconForm },
    { ...diffDefaultValue.ListItem.statusIconName },
    { ...diffDefaultValue.ListItem.statusSize },
    { ...AllDataOptions.selected },
    { ...diffDefaultValue.ListItem.IdIconColor },
    { ...diffDefaultValue.ListItem.IdIconSize },
    { ...diffDefaultValue.ListItem.IdIconForm },
    { ...diffDefaultValue.ListItem.IdSize },
    { ...diffDefaultValue.ListItem.IdText },
  ],
};
