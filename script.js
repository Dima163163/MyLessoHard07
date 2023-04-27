"use stict";

const arr = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

document.write(arr + "<br />");

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr = "<br />" + arr[i] + "<br />";
  document.write(newArr);
  if (arr[i] == "Суббота" || arr[i] == "Воскресенье") {
    document.write("<br /><i>" + arr[i] + "</i><br />");
  }
  const day = new Date();
  const todayDay = day.getDay() - 1;
  if (i == todayDay) {
    document.write("<br /><b>" + arr[i] + "</b><br />");
  }
}
