document.querySelectorAll('.accordion').forEach(accordion => {
  const parent = accordion('.accordions');

  accordion.querySelector('.accordion__header').addEventListener('click', function(){
    if (parent && parent.classList.contains('accordions--toggle')){
      
    }
    accordion.classList.toggle('accordion--open');
  });
}); 
