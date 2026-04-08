tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: { value: 100, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.2, // Très léger pour rester élégant
      random: true
    },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1, // Les fils du réseau
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" }, // Les lignes se connectent à ta souris
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.5 } }
    }
  },
  detectRetina: true
});


// On récupère les éléments
const btn = document.getElementById('toggleButton');
const content = document.getElementById('contentBox');

// On ajoute l'événement clic
btn.addEventListener('click', () => {
    // La méthode toggle ajoute la classe si elle n'est pas là, 
    // et la retire si elle est déjà présente.
    content.classList.toggle('hidden');

    // Optionnel : changer le texte du bouton
    if (content.classList.contains('hidden')) {
        btn.textContent = "Afficher le contenu";
    } else {
        btn.textContent = "Masquer le contenu";
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // On ajoute/enlève la classe active au clic
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

