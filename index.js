document.addEventListener('DOMContentLoaded', () => {
  const knob = document.querySelector('.knob');
  const plus = document.querySelector('#plus');
  const minus = document.querySelector('#minus');
  const counter = document.getElementById('counter')
  const max = document.getElementById('maximum')
  
  //plus sing is adding
    plus.addEventListener('click', () => {
      if(Number(counter.innerHTML) < Number(max.innerHTML)) {
        counter.innerHTML = Number(counter.innerHTML) + 1;
        knob.style.width = Number(counter.innerHTML * 10) + '%';
      }
    });  

  //minus sign is subtracting
   minus.addEventListener('click', () => {
    if(Number(counter.innerHTML) > 0) {
      counter.innerHTML = Number(counter.innerHTML) - 1;
      knob.style.width = Number(counter.innerHTML * 10) + '%';
    }
  })
});