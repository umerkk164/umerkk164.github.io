// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > window.innerHeight) {
    document.querySelector('nav').classList.add("scrolled");
  } else {
    document.querySelector('nav').classList.remove("scrolled");
  }
});

window.dispatchEvent(new Event("scroll"));

const items = document.querySelectorAll('.anim');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <=
    (window.innerHeight*3/4 || document.documentElement.clientHeight*3/4) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach(item => {
    if (isInViewport(item)) {
      item.children[0].classList.add('show');
    }
    // else {
    //   item.children[0].classList.remove('show');
    // }
  });
}

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);