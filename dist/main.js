(()=>{"use strict";const e=document.getElementById("content"),t=new class{constructor(e,t){this.title=e,this.tabs=t}createTabs(){let e=document.createElement("ul"),t=this.tabs;for(let a of t){let t=document.createElement("li");t.textContent=a,t.id=`${a.toLowerCase().replace(" ","")}Page`,e.appendChild(t)}return e}createHeader(){let e=document.createElement("header");return e.classList.add("header"),e.innerText=this.title,e.appendChild(this.createTabs()),e}}("Trials by Coffee",["Home","Menu","About Us"]);e.appendChild(t.createHeader())})();