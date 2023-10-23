const e=document.querySelector("header");$(function(){$(".menu-trigger").click(function(i){$(this).toggleClass("active"),$("#menu_wrap").slideToggle(),"fixed"===e.style.position?(e.style.position="absolute",i.preventDefault()):e.style.position="fixed"}),$(".menu_main>ul>li>a").hover(function(){!1===$(this).hasClass("fixed")&&$(this).addClass("animate").siblings().removeClass("animate")},function(){$(".menu_main>ul>li>a").removeClass("animate")})});//# sourceMappingURL=index.69fc4fe9.js.map

//# sourceMappingURL=index.69fc4fe9.js.map
