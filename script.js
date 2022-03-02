document.querySelectorAll('.accordion').forEach(accordion => {
  const parent

  accordion.querySelector('.accordion__header').addEventListener('click', function(){
    accordion.classList.toggle('accordion--open');
  });
}); 
