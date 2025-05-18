// Animation typewriter pour le titre
function typeWriterEffect(text, elementId, speed = 50) {
    const element = document.getElementById(elementId);
    let index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  // Animation des cards au scroll
  function revealCardsOnScroll() {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight * 0.85;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
  
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Titre animé
    const titleText = "🎯 Formation Complète en Développement Web";
    typeWriterEffect(titleText, "animated-title", 50);
  
    // Initial reveal + on scroll
    revealCardsOnScroll();
    window.addEventListener('scroll', revealCardsOnScroll);
  });
  
  function alerteInscription() {
    alert("Merci de contacter le +226 55440266 pour votre inscription !");
  }
  