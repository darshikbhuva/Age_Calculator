const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.getElementById("month");
const btn = document.querySelector(".btn");
const resultyear = document.getElementById("resultyear");
const resultmonth = document.getElementById("resultmonth");
const resultday = document.getElementById("resultdays");
const errorDay = document.getElementById("errorDay");
const errorYear = document.getElementById("errorYear");
const errorMonth = document.getElementById("errorMonth");
const eday = document.getElementById("EDay");
const emonth = document.getElementById("EMonth");
const eyear = document.getElementById("EYear");

btn.addEventListener("click", () => {
  let d1 = day.value;
  let m1 = month.value;
  let y1 = year.value;
  // console.log(d1);
  // console.log(m1);
  // console.log(y1);

  let date = new Date();

  let y2 = date.getFullYear();
  let d2 = date.getDate();
  let m2 = date.getMonth() + 1;

  let flag = 1;

  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > 31 || d1 == "") {
    errorDay.innerText = "Must be valid in day";
    eday.classList.add("EDayy");
    flag = 0;
  }

  if (m1 > 12 || m1 == "") {
    errorMonth.innerText = "Must be valid in month";
    emonth.classList.add("EMonthh");
    flag = 0;
  }

  if ((y1 == y2 && m1 > m2) || y1 > y2 || y1 == "" || y1.length < 4) {
    errorYear.innerText = "Must be valid in past";
    eyear.classList.add("EYearr");
    flag = 0;
  }

  if (d1 > d2) {
    d2 = d2 + monthDays[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  if (flag) {
    resultday.innerText = d;
    resultyear.innerText = y;
    resultmonth.innerText = m;
  }
});
