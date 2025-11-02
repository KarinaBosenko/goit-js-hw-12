import{a as S,S as v,i as n}from"./assets/vendor-BgmC94F3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="53039261-652763fc75278139e9d77d75b";async function h(s,t=1){const{data:o}=await S.get("https://pixabay.com/api/",{params:{key:q,q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".btn-load");let M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(o=>`
    <li class="gallery-item">
    <a href="${o.largeImageURL}">
    <img src="${o.webformatURL}" alt="${o.tags}"/>
    </a>
    <ul class="descr">
    <li class="descr-item">
    <h3>Likes</h3>
    <p>${o.likes}</p>
    </li>
    <li class="descr-item">
    <h3>Views</h3>
    <p>${o.views}</p>
    </li>
    <li class="descr-item">
    <h3>Comments </h3>
    <p>${o.comments}</p>
    </li>
    <li class="descr-item">
    <h3>Downloads </h3>
    <p>${o.downloads}</p>
    </li>
    </ul>
      </li>`).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function x(){m.innerHTML=""}function y(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}function L(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}let a="",i=1;const w=15,b=document.querySelector(".form"),P=document.querySelector('[name="search-text"]'),R=document.querySelector(".btn-load");b.addEventListener("submit",O);R.addEventListener("click",$);async function O(s){if(s.preventDefault(),i=1,c(),x(),y(),a=P.value.trim(),!a){n.warning({message:"Enter a search word!",position:"topRight"}),u();return}try{const t=await h(a,i);if(t.hits.length<=0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits);const o=Math.ceil(t.totalHits/w);i<o?L():(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{b.reset(),u()}}async function $(){i++,c(),y();try{const s=await h(a,i);g(s.hits);const t=Math.ceil(s.totalHits/w);i>=t?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}catch{n.error({message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{u()}}
//# sourceMappingURL=index.js.map
