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
