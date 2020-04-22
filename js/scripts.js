const animatedBoxes = Array.from(document.querySelectorAll('.animated-box'));

let windowHeight = window.innerHeight;

window.addEventListener('scroll', checkIfInView);

function checkIfInView() {
  animatedBoxes.map((box, index) => {
    addAnimationClass(box, index);
  });
}

function addAnimationClass(box, duration) {
  let boxPosition = box.getBoundingClientRect();
  let boxPositionTop = boxPosition.top;

  if (boxPositionTop <= 0.6 * windowHeight) {
    box.classList.add('animate');
    box.style.animationDelay = duration * 0.1;
  }
}
