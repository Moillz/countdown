let d, h, m, s;
function countdown() {
  let date = new Date();
  let now = date.getTime();

  let str = "2020/5/29 00:00:00";
  let endDate = new Date(str);

  
  let end = endDate.getTime();

  let leftTime = end - now;
  
  if (leftTime >= 0) {
    d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    h = Math.floor(leftTime /1000/ 60 / 60 % 24);
    m = Math.floor(leftTime /1000/ 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
  }
  document.getElementById("h").innerHTML =`${h} :`;
  document.getElementById('d').innerHTML = `${d} :`;
  document.getElementById('m').innerHTML = `${m} :`;
  document.getElementById('s').innerHTML = `${s}`;
  setTimeout(countdown, 1000);
}
window.onload = countdown;


