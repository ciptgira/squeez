
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
if(menuBtn){
  menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));
}
document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>nav?.classList.remove("show"));
});
