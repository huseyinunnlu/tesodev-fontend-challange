import moment from "moment";

export const formatDate = (date, format = "d m y") => {
  return moment(date).format(format) || null;
};
