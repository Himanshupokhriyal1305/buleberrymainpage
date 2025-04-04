// Sidebar Toggle
// document.getElementById("sidebarToggle").addEventListener("click", function () {
//     document.getElementById("sidebar").classList.add("active");
// });

// document.getElementById("closeSidebar").addEventListener("click", function () {
//     document.getElementById("sidebar").classList.remove("active");
// });

// Carousel Logic
let index = 0;

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.carousel .col-md-3');
    const totalCards = cards.length;
    const maxIndex = totalCards - 1;
    function moveSlide(direction) {
        const slideWidth = document.querySelector('.carousel .col-md-3').offsetWidth + 24; // +gap (margin)
        index += direction;
    
        const maxSlides = Math.ceil(totalCards - (window.innerWidth < 576 ? 2 : 4));
        if (index < 0) index = maxSlides;
        if (index > maxSlides) index = 0;
    
        document.getElementById('EveryOccasion').style.transform = `translateX(-${index * slideWidth}px)`;
        updateDots();
    }
    

    function createDots() {
        const dotsContainer = document.getElementById('dots');
        for (let i = 0; i < totalCards; i++) {
            let dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    // Initialize
    createDots();
    setInterval(() => moveSlide(1), 3000);

    // Attach to global if needed
    window.moveSlide = moveSlide;
});
function updateStack(stackId) {
    const cardStack = document.getElementById(stackId);
    const cards = cardStack.children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.zIndex = cards.length - i;
      if (i === 0) {
        cards[i].style.transform = 'translateX(0) translateY(10%) scale(1) rotateY(0deg)';
        cards[i].style.opacity = '1';
      } else if (i === 1) {
        cards[i].style.transform = 'translateX(20px) translateY(5%) scale(0.96)';
        cards[i].style.opacity = '0.95';
      } else if (i === 2) {
        cards[i].style.transform = 'translateX(40px) translateY(0%) scale(0.92)';
        cards[i].style.opacity = '0.9';
      } else if (i === 3) {
        cards[i].style.transform = 'translateX(60px) translateY(-5%) scale(0.88)';
        cards[i].style.opacity = '0.85';
      } else if (i === 4) {
        cards[i].style.transform = 'translateX(80px) translateY(-10%) scale(0.84)';
        cards[i].style.opacity = '0.8';
      } else {
        cards[i].style.opacity = '0';
      }
    }
  }
  
  function nextCard(stackId) {
    const cardStack = document.getElementById(stackId);
    const first = cardStack.children[0];
    const clone = first.cloneNode(true);
    cardStack.appendChild(clone);
    cardStack.removeChild(first);
    updateStack(stackId);
  }
  
  function prevCard(stackId) {
    const cardStack = document.getElementById(stackId);
    const last = cardStack.children[cardStack.children.length - 1];
    const clone = last.cloneNode(true);
    cardStack.removeChild(last);
    cardStack.prepend(clone);
    updateStack(stackId);
  }
  
  // Initialize all stacks when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    updateStack('cardStack1');
    updateStack('cardStack2');
    updateStack('cardStack3');
  
    // Auto rotation
    setInterval(() => nextCard('cardStack1'), 3000);
    setInterval(() => nextCard('cardStack2'), 4000);
    setInterval(() => nextCard('cardStack3'), 5000);
  });
  
