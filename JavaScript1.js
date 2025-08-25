const container = document.querySelector(".container2");
window.addEventListener("scroll", function() {
    const triggerPoint = window.innerHeight / 1.3;
    const containerTop = container.getBoundingClientRect().top;
    if (containerTop < triggerPoint) {
        container.classList.add("visible");
        container.classList.remove("hidden");
    } else {
        container.classList.add("hidden");
        container.classList.remove("visible");
    }
});

const revealElements=document.querySelectorAll(".reveal");
window.addEventListener("scroll",function(){
    revealElements.forEach(el =>{
        const rect=el.getBoundingClientRect();
        const triggerPoint=this.window.innerHeight*0.9;
        if(rect.top<triggerPoint){
            el.classList.add("visible");
        }
    });
});

const navigator1 = document.querySelector(".navigator1");
let showTimeout;

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        // Scroll down → sakrij odmah
        navigator1.style.top = "-225px";
        clearTimeout(showTimeout);
    } else if (e.deltaY < 0) {
        // Scroll up → pojavi posle 0.5s
        clearTimeout(showTimeout);
        showTimeout = setTimeout(() => {
            navigator1.style.top = "0";
        }, 200);
    }
});