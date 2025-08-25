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

const nav = document.querySelector(".navigator1");
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const thresholdDown = 150; // koliko px skrol dole da sakrije
const thresholdUp = 350;   // koliko px skrol gore da se pojavi
let accumulatedUp = 0;      // koliko px je korisnik skrolovao gore

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const delta = currentScroll - lastScrollTop;

  if (delta > 0 && currentScroll > thresholdDown) {
    // skroluje na dole → sakrij odmah
    nav.style.top = "-225px";
    accumulatedUp = 0; // resetujemo broj skrola gore
  } else if (delta < 0) {
    // skroluje na gore → akumuliraj pomak
    accumulatedUp -= delta; // delta je negativno, pa oduzimamo da bude pozitivno

    if (accumulatedUp > thresholdUp) {
      // tek kad se skrolovalo dovoljno nagore
      nav.style.top = "0";
      accumulatedUp = 0; // resetujemo
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });
