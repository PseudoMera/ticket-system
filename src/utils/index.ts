import { format } from 'date-fns';
import { RebateDate } from '../models/date';

export const example = () => console.log('Hello World');

export function getDateFromString(
  data: string | Date = new Date(),
): RebateDate {
  const date: string = data.toString();
  const myDate = new Date(data);
  const year = format(myDate, 'YYY');
  const month = format(myDate, 'MMMMMMM');
  const day = format(myDate, 'dd');
  const dayOfTheWeek = format(myDate, 'iiii');
  const hour = date.substring(11, 13);
  const minutes = format(myDate, 'mm');
  const seconds = format(myDate, 'ss');
  const miliseconds = date.substring(20, 26);
  const amOrPm = hour >= '12' ? 'pm' : 'am';
  const monthNumber = format(myDate, 'M');
  const monthShort = format(myDate, 'MMM');

  const yourDate: RebateDate = {
    day: day,
    month: month,
    year: year,
    dayOfTheWeek: dayOfTheWeek,
    hour: format(myDate, 'hh'),
    minutes: minutes,
    seconds: seconds,
    miliseconds: miliseconds,
    amOrPm: amOrPm,
    monthNumber: monthNumber,
    monthShort: monthShort,
  };

  return yourDate;
}
