document.addEventListener('DOMContentLoaded', () => {
  const knob = document.querySelector('.knob');
  const plus = document.querySelector('#plus');
  const minus = document.querySelector('#minus');
  const counter = document.getElementById('counter')
  const max = document.getElementById('maximum')
  
  //plus sing is adding
    plus.addEventListener('click', () => {
      if(Number(counter.textContent) < Number(max.textContent)) {
        counter.textContent = Number(counter.textContent) + 1;
        knob.style.width = Number(counter.textContent * 10) + '%';
      }
    });  

  //minus sign is subtracting
   minus.addEventListener('click', () => {
    if(Number(counter.textContent) > 0) {
      counter.textContent = Number(counter.textContent) - 1;
      knob.style.width = Number(counter.textContent * 10) + '%';
    }
  })
});