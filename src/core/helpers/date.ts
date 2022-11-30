import moment from "moment";

export const dateTimeDiff = (value?: string) => {
  if (value) {
    const today = moment;
    const date = moment(value)
    const diff = moment().diff(date, "hours", true).toFixed();
    
    return diff+' Hours ago';
  }
  return value || "";
};
