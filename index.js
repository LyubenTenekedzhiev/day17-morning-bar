const progressBar = new ProgressBar(0, 17, 'red');
const progressBar2 = new ProgressBar(0, 17, 'green');
const progressBar3 = new ProgressBar(0, 17, 'black');

document.addEventListener('DOMContentLoaded', () => { 
  const parent = document.querySelector('.app');

  progressBar.mount(parent);
  progressBar2.mount(parent);
  progressBar3.mount(parent);


  const colorChange = () => {
    const result = document.querySelector('#result');
    const resultBody = document.querySelector('.result')
    result.style.backgroundColor = `rgb(${progressBar.value * 15}, ${progressBar2.value * 15}, ${progressBar3.value * 15})`;

    resultBody.style.backgroundColor = `rgb(${progressBar.value * 15}, ${progressBar2.value * 15}, ${progressBar3.value * 15})`;
    this.update();
  }
  
  const btnColor = document.querySelector('#colorChanger');
  btnColor.addEventListener('click', () => colorChange());

});