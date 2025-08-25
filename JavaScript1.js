const container = document.querySelector(".container2");
window.addEventListener("scroll", function() {
    const triggerPoint = window.innerHeight / 1.5;
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
        const triggerPoint=this.window.innerHeight*1;
        if(rect.top<triggerPoint){
            el.classList.add("visible");
        }
    });
});

const nav = document.querySelector(".navigator1");
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let accumulatedUp = 0;
const thresholdDown = 200; // px da sakrije
const thresholdUp = 100;   // px da pokaže
let ticking = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth < 768) return; // opcionalno: manje ekrane drugačije tretiraj

  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const delta = currentScroll - lastScrollTop;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (delta > 0 && currentScroll > thresholdDown) {
        // skrol dole → sakrij
        nav.style.top = "-225px";
        accumulatedUp = 0;
      } else if (delta < 0) {
        // skrol gore → akumuliraj
        accumulatedUp -= delta;
        if (accumulatedUp > thresholdUp) {
          nav.style.top = "0";
          accumulatedUp = 0;
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
