class ProgressBar {
  constructor(value, maximum, color) {
    this.value = value;
    this.maximum = maximum;
    this.color = color;
  }

  increment() {
    if(this.value < this.maximum) {
      this.value += 1;
      this.update();
    }
  }

  decrement() {
    if(this.value > 0) {
      this.value -= 1;
      this.update();
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'progress-bar';
    this.element.innerHTML = (
      `
      <div id="label" class="label">
        <span id="counter">4</span>/<span id="maximum">10</span>
        </div>
        <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
      </div>
      `
    );

    const knobColor = this.element.querySelector('#knob');
    knobColor.style.backgroundColor = this.color;

    const plusBtn = this.element.querySelector('.btn-plus');
     plusBtn.addEventListener('click', () => {
     this.increment();
    });
    const minusBtn = this.element.querySelector('.btn-minus');
     minusBtn.addEventListener('click', () => {
    this.decrement();
    });

    return this.element;
  }

  update() {
    this.element.querySelector('#counter').textContent = this.value;
    this.element.querySelector('#maximum').textContent = this.maximum;

    const step = 100 / this.maximum;
    const width = `${this.value * step}%`;
    this.element.querySelector('.knob').style.width = width;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }  
}
