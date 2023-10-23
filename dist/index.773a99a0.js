/*Luxon 라이브러리*//*호주 시간 계산하기*//*버튼 클릭시 각 도시의 시간을 보여준다.
멜버른 / 시드니 / 브리즈번 모두 UTC+10
서머타임 시행시 UTC+11, 브리즈번은 서머타임 미시행이며,
시행시 서머타임 아이콘을 보여준다.*/const e="Australia/Sydney";function t(e){!function t(){//도시 시간대(기본정보) 불러오기
let n=luxon.DateTime.now().setZone(e),a=n.toFormat("HH:mm:ss");document.getElementById("time__now--australia").innerText=a;//오전 오후 확인
let r=n.toFormat("HH"),c=document.getElementById("time__merdiem--australia");r>=12&&r<=24?c.innerHTML="오후":c.innerHTML="오전";//날짜 확인
let o=n.toFormat("yyyy.LL.dd.");document.querySelector("#today__now--australia").innerText=o;// console.log(cityDate);
//요일 확인
let i=n.toFormat("c"),l=document.getElementById("today__day--australia");//luxon은 월요일 = 1, 일요일 = 7
switch(i){case"1":i="월요일";break;case"2":i="화요일";break;case"3":i="수요일";break;case"4":i="목요일";break;case"5":i="금요일";break;case"6":i="토요일";break;case"7":i="일요일"}l.innerText=i;/*DST 시행 확인*/let s=luxon.DateTime.now().setZone(e).isInDST,d=document.getElementById("weather__summertime--dtc");s?d.innerHTML="sunny":d.innerHTML="",setTimeout(t,200)}()}/*날씨정보 알아오기*/const n=config.apikey;//gitignore에서 숨겨짐
//날씨별 아이콘 이름
function a(e,t){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${t}&units=metric&lang=kr`).then(e=>e.json()).then(e=>{// console.log(data);
//나라 판별
let t=e.sys.country;switch(t){case"KR":t="korea";break;case"AU":t="australia"}// console.log(country);
//도시 판별
let n=e.name,a=document.getElementById(`weather__city--${t}`);switch(n){case"Sydney":n="시드니";break;case"Melbourne":n="멜버른";break;case"Brisbane":n="브리즈번";break;case"Seoul":n="서울"}a.innerText=n;//날씨 판별
let r=e.weather[0].icon,c=document.querySelector(`.weather__icon--${t}`),o="clear_day";"01d"===r||"01n"===r?o="clear_day":"02d"===r||"02n"===r?o="partly_cloudy_day":"03d"===r||"03n"===r?o="cloud":"04d"===r||"04n"===r?o="cloud":"09d"===r||"09n"===r?o="rainy_light":"10d"===r||"10n"===r?o="rainy":"11d"===r||"11n"===r?o="thunderstorm":"13d"===r||"13n"===r?o="ac_unit":("50d"===r||"50n"===r)&&(o="foggy"),c.innerText=o;// console.log(putIcon);
//온도 넣기
let i=e.main.temp.toFixed(1);document.getElementById(`weather__now--${t}`).innerText=i}).catch(e=>{console.error("오류가 발생했습니다. 기본값이 출력됩니다."),document.querySelector(".weather__error").innerText="현재 기본값이 출력 중입니다.";//default값 (20도, 맑음 출력)
let t=document.querySelectorAll(".weather__now"),n=document.querySelectorAll(".weather__icon--now"),a=document.querySelectorAll(".btn__blur--weather"),r=document.querySelector("#weather__city--australia");t.forEach(e=>{e.innerText="20.0"}),n.forEach(e=>{e.innerText="sunny"}),a.forEach(e=>{e.addEventListener("click",e=>{r.innerText=e.target.innerText})})})}const r=document.getElementById("btn__blur--sydney"),c=document.getElementById("btn__blur--melbourne"),o=document.getElementById("btn__blur--brisbane"),i=document.querySelectorAll(".btn__blur--weather");t(e),a("seoul",n),a("sydney",n),//버튼 호출
r.addEventListener("click",r=>{t(e),a("Sydney, AU",n),i.forEach(e=>{e.classList.remove("active")}),r.target.classList.add("active")}),c.addEventListener("click",e=>{t("Australia/Melbourne"),a("Melbourne, AU",n),i.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")}),o.addEventListener("click",e=>{t("Australia/Brisbane"),a("Brisbane, AU",n),i.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")}),/*시간 계산하기*///한국 시간 계산하기
function e(){let t=new Date,n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),c=t.getDay(),o=t.getHours();//요일 판별
switch(c){case 0:c="일요일";break;case 1:c="월요일";break;case 2:c="화요일";break;case 3:c="수요일";break;case 4:c="목요일";break;case 5:c="금요일";break;case 6:c="토요일"}//포맷맞추기
let i=`${n}.${a>=10?a:"0"+a}.${r>=10?r:"0"+r}.`;document.getElementById("today__now--korea").innerText=i,document.getElementById("today__day--korea").innerText=c;//시간 구하기
let l=new Date().toTimeString().split(" ")[0];document.getElementById("time__now--korea").innerText=l;//오전 오후 확인
let s=document.getElementById("time__merdiem--korea");o>=12&&o<24?s.innerHTML="오후":s.innerHTML="오전",setTimeout(e,200)}();//# sourceMappingURL=index.773a99a0.js.map

//# sourceMappingURL=index.773a99a0.js.map
