!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,l)=>{const n=new URL(e,s);if(self[o].moduleMap[n])return t(self[o].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${o}.moduleMap['${n}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),a(r)},onload(){t(self[o].moduleMap[n]),a(r)}});document.head.appendChild(r)})),self[o].moduleMap={}}}("https://bhaltair.github.io/cossava-web/assets/");$(document).ready((function(){var e=window.innerWidth;e>1029&&$("nav").css("display","show"),$(window).scroll((function(){$(document).scrollTop()>0?$(".outer2").addClass("outer2-active"):$(".outer2").removeClass("outer2-active")})),$(".outer4").click((function(){$(".nav").slideToggle("slow")})),$(".nav li").click((function(){e<1029&&$(".nav").slideToggle("slow"),$(this).siblings("li").removeClass("active"),$(this).addClass("active");var o=$(this).find("a").attr("href");$("html,body").stop().animate({scrollTop:$(o).offset().top},800)})),$(".header-logo").click((function(){$("body, html").stop().animate({scrollTop:0},500)}))}));
