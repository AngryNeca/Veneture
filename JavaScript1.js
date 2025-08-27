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

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Ako je ulogovan
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("userMenu").style.display = "flex";

    const name = user.displayName ? user.displayName : user.email;
    document.getElementById("userName").innerText = `Hello, ${name}`;

    if (user.photoURL) {
      document.getElementById("userPic").src = user.photoURL;
    }
  } else {
    // Ako nije ulogovan
    document.getElementById("loginLink").style.display = "flex";
    document.getElementById("userMenu").style.display = "none";
  }
});

  import { getAuth, onAuthStateChanged, signOut } from 
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  const auth = getAuth();

  // Proveravamo da li je korisnik ulogovan
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Ako je ulogovan
      document.getElementById("userMenu").style.display = "flex";

      // Ako ima displayName (npr. preko Google/Facebook) uzimamo to ime
      // Ako nema, uzimamo email
      const name = user.displayName ? user.displayName : user.email;
      document.getElementById("userName").innerText = `Hello, ${name}`;
    } else {
      // Ako nije ulogovan, sakrij user meni i prikaži login link
      document.getElementById("userMenu").style.display = "none";
    }
  });

  // Logout dugme
  document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
      alert("Logged out!");
    }).catch((error) => {
      console.error(error);
    });
  });
