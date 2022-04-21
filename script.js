const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const line1 = document.querySelector('.line.one');
const line2 = document.querySelector('.line.two');
const line3 = document.querySelector('.line.three');

burger.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line3.classList.toggle('active');
});

const scroll = document.querySelector('.scroll');
let opacity = 1;

window.addEventListener('scroll', e => {
  const scrollDomRect = scroll.getBoundingClientRect();
  if (scrollDomRect.y < 400) {
    scroll.style.opacity -= opacity / 35;
  }

  else {
    scroll.style.opacity = 1;
  }
});

function initMap() {
  const home = { lat: 14.593482321171887, lng: 121.10182726138223 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: home,
  });

  const marker = new google.maps.Marker({
    position: home,
    map: map,
  });
}

window.initMap = initMap;
