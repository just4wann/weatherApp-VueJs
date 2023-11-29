export const UTCConverter = (utc) => {
  const time = new Date(utc * 1000),
    curHour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
    curMinute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
    curMeridiem = time.getHours() > 12 ? 'PM' : 'AM';
  return `${curHour}.${curMinute} ${curMeridiem}`;
};
