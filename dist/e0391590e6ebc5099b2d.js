import"./style.css";document.querySelectorAll(".carousel").forEach((e=>{const s=e.querySelectorAll(".carousel__item"),t=Array.from(s,(()=>'<span class="carousel__button"></span>'));e.insertAdjacentHTML("beforeend",`\n      <div class="carousel__nav">\n        ${t.join("")}\n      </div>\n    `);const l=e.querySelectorAll(".carousel__button"),c=e.querySelectorAll("audio");let a=0;s[a].classList.add("carousel__item--selected"),l[a].classList.add("carousel__button--selected"),c[a].play(),c.forEach(((e,t)=>{e.addEventListener("ended",(()=>{e.pause(),l[a].classList.remove("carousel__button--selected"),s[a].classList.remove("carousel__item--selected"),a=(a+1)%s.length,l[a].classList.add("carousel__button--selected"),s[a].classList.add("carousel__item--selected"),e.currentTime=0,e.play()}))})),l.forEach(((e,t)=>{e.addEventListener("click",(()=>{c[a].pause(),l[a].classList.remove("carousel__button--selected"),s[a].classList.remove("carousel__item--selected"),a=t,l[a].classList.add("carousel__button--selected"),s[a].classList.add("carousel__item--selected"),c[a].currentTime=0,c[a].play()}))}))}));