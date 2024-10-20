// setTimeout(() => {
//   document.querySelector('.intro').style.display = 'none'; // Hide the intro
//   document.querySelector('.main-content').style.display = 'block'; // Show the main content
// }, 4000); // 4 seconds delay


let cursor = document.getElementById('cursor');
let curblur = document.getElementById('cursor-blur');
document.addEventListener('mousemove', (move) => {
  cursor.style.left = move.clientX + 'px';
  cursor.style.top = move.clientY + 'px';
});


let navListItems = document.querySelectorAll("#nav-list li");

function navStyle() {
  navListItems.forEach(item => {
    item.style.padding = '5px 20px'
    item.style.borderRadius = '5px'
    item.style.transition = 'all 0.3s linear'
  });
}
navStyle();


function navHover() {
  navListItems.forEach(navH => {
    navH.addEventListener('mouseover', () => {
      navH.style.transform = 'scale(1.1)'
      navH.style.boxShadow = 'var(--shadow)';
    })
    navH.addEventListener('mouseout', () => {
      navH.style.transform = ''
      navH.style.boxShadow = ''
    })
  });
}
navHover();


const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menuList');

// Toggle nav list visibility on menu icon click
menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('active'); // Toggle a class for visibility
});


function animation() {
  gsap.to('.nav-container', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '70px',
    scrollTrigger: {
      trigger: '.nav-container',
      scroller: 'body',
      start: "top -15%",
      end: "top -10%",
      scrub: 1,
      // markers: true, // Uncomment for debugging
    }
  });
}
animation();