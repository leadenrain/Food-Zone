const cards = document.querySelectorAll('.card');
cards.forEach(function(card, index) {

  card.addEventListener('click', function(event) {
    const cardActive = document.querySelector('.card-active');
    cardActive.classList.remove('card-active');
    event.currentTarget.classList.add('card-active');

    const heroActive = document.querySelector('.hero-active');
    heroActive.classList.remove('hero-active');
    const imgs = document.querySelectorAll('.hero-img');
    imgs[index].classList.add('hero-active');
    
   });
});

