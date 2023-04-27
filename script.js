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
const day = new Date();
const todayDay = day.getDay() - 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "Суббота" || arr[i] == "Воскресенье") {
    document.write("<br /><i>" + arr[i] + "</i><br />");
  } else if (i == todayDay) {
    document.write("<br /><b>" + arr[i] + "</b><br />\n");
  } else {
    newArr = "<br />" + arr[i] + "<br />";
    document.write("<br />" + newArr + "<br />");
  }
}
