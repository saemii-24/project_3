const e=document.querySelector(".main__title"),t=[["하버","브리지에서","바라보는","붉게","물든","시드니"],["태양과","만나","일곱","가지","색으로","빛나는","바위산"],["호주에서","살고","있는","동물들과의","특별한","만남"],["남극해의","시원한","바람을","맞으며","떠나는","드라이브"],["크루즈를","타고","만나는","장난기","가득한","돌고래"],["푸른","바다","위","파도를","가르며","즐기는","서핑"]];let n=0,a=0;const i=document.getElementById("main__bar--gage");$(".main__bg>div:gt(0)").hide(),function d(){i.classList.add("gageBar");let s=document.createElement("span");s.textContent=`
    ${t[n][a]}
    `,e.append(s),a===t[n].length-1?(clearTimeout(d),e.classList.add("fadeOut"),e.style.animationDelay=`${5-.3*t[n].length}s`,a=0,setTimeout(()=>{// 첫 애니메이션 총 시간 5초가 지난 후 다음 문장 애니메이션 시작
e.textContent="",++n===t.length&&(n=0),d(),i.classList.remove("gageBar"),e.classList.remove("fadeOut"),$(".main__bg>div:first-child").fadeOut(1e3).next("div").fadeIn(1e3).end().appendTo(".main__bg")},5e3-(t[n].length-1)*300)):(a++,setTimeout(d,300))}();//# sourceMappingURL=index.7ff13d64.js.map

//# sourceMappingURL=index.7ff13d64.js.map
