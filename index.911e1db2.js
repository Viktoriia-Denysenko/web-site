var scrollPos,masthead=document.querySelector(".masthead__wrapper");function scrollFunction(){scrollPos=masthead.offsetHeight;var o=window.scrollY;console.log(scrollPos),console.log(o),o>=scrollPos?masthead.classList.add("active"):masthead.classList.remove("active")}window.onscroll=function(){scrollFunction()};
//# sourceMappingURL=index.911e1db2.js.map
