import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import {DateUtils} from "react-day-picker";

export const searchDateFormat  = 'yyyy-MM-dd';
export const parseDateFormat   = 'M/dd/yyyy h:mm:ss a';
export const displayDateFormat = 'MMM d, yy';

export const resDisplayDateFormat = 'MMM D, YY';
export const resParseDateFormat = 'MM/DD/YYYY h:mm:ss a';

export const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

export const parseSearchDate = (str, locale) => {
  const parsed = dateFnsParse(str, searchDateFormat, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

export const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale });
};
