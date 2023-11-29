<script setup>
const getCurrentTime = () => {
  const objToday = new Date(new Date().getTime() - 0 * 1000),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    dayOfMonth = objToday.getDate() < 10 ? '0' + objToday.getDate() : objToday.getDate(),
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : objToday.getHours() < 10 ? '0' + objToday.getHours() : objToday.getHours(),
    curMinute = objToday.getMinutes() < 10 ? '0' + objToday.getMinutes() : objToday.getMinutes(),
    curSecond = objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';

  const date = `${dayOfMonth}-${curMonth}-${curYear}`;
  const dayAndTime = `${dayOfWeek}, ${curHour}.${curMinute} ${curMeridiem}`;
  return [date, dayAndTime];
};
const [date, dayAndTime] = getCurrentTime();
</script>

<template>
  <div class="wrapper-date">
    <p class="date">{{ date }}</p>
    <p class="day-time">{{ dayAndTime }}</p>
  </div>
</template>
