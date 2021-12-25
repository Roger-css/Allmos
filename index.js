let mainNavLi = document.querySelector(".cc")
let megaMenu = document.querySelector(".mega-menu")
let landing = document.querySelector(".landing")
mainNavLi.addEventListener("click",  function() {
    if(megaMenu.hasAttribute("id")){
        megaMenu.removeAttribute("id", "activemega")
    }
    else{
        megaMenu.setAttribute("id", "activemega")
    }
})
let ourSkill = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".the-progress span")
let stats = document.querySelector(".stats")
let nums = document.querySelectorAll(".stats .box .number")
let started = false
window.onscroll = function(){
    if (window.scrollY >= ourSkill.offsetTop) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= stats.offsetTop - 100){
        if(!started){
            nums.forEach(num => {startCount(num)});
        }
        started = true
    }
}

function startCount(el) {
    let goal = el.dataset.number
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
    }
    }, 2000 / goal);
}

let date = new Date("Dec 31 ,2021 23:59:59").getTime()
let counter = setInterval(() => {
    let dateDifference = date - new Date().getTime()
    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    document.querySelector(".days").textContent = days
    let hours = Math.floor(dateDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.querySelector(".hours").textContent = hours
    let min = Math.floor(dateDifference % (1000 * 60 * 60) / (1000 * 60))
    document.querySelector(".min").textContent = min
    let sec = Math.floor(dateDifference % (1000 * 60 ) / (1000))
    document.querySelector(".sec").textContent = sec
}, 1000);
