var btn = document.querySelectorAll('.btn');
var slide = document.getElementById('slide');

btn.forEach((item, index) => {
  item.onclick = function () {
    const move = -800 * index;
    console.log(move);
    slide.style.transform = `translateX(${move}px)`;
    changeIndicator(index);
  };
});

// btn[0].onclick = function () {
//   slide.style.transform = 'translateX(0px)';
//   changeIndicator(0);
// };
// btn[1].onclick = function () {
//   slide.style.transform = 'translateX(-800px)';
//   changeIndicator(1);
// };
// btn[2].onclick = function () {
//   slide.style.transform = 'translateX(-1600px)';
//   changeIndicator(2);
// };

function changeIndicator(number) {
  const indicator = document.querySelector('.indicator');
  const spans = indicator.querySelectorAll('span');
  spans.forEach((span, index) => {
    span.classList.remove('active');
    index === number && span.classList.add('active');
  });
}
