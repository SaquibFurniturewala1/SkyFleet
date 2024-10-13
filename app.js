// LogIn/SignUp function

const logIn = document.querySelector('#nav-list') // storing in the const variable
const container = document.querySelector('.form-container')  // storing in the const variable

function popUp () { // popUp is the funcation name
  logIn.addEventListener('click', () => {  // added the addEventListener, so when click the form should show up
    if (container.style.display  = 'flex') { // the formt that's hold everything
      container.style.display === 'none'
    } else {
      container.style.display === 'flex'
    }
  })
}
popUp ();  // calling the function to work

 function hide () { // hide is the funcation name
  document.addEventListener('click', (e) => {  // e is the parameter
    if (!container.contains(e.target) && !logIn.contains(e.target)) {   // if the user click outsite the from box, the box should we hidden or none
      container.style.display = 'none'
    }
  })
 }
hide(); // calling the function to work


setTimeout(() => {

  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
}, 5000); 


// let navListItems = document.querySelectorAll("#nav-list li");

// function navStyle() {
//   navListItems.forEach(item => {
//     item.style.padding = '5px 20px'
//     item.style.borderRadius = '5px'
//     item.style.transition = 'all 0.3s linear'
//   });
// }
// navStyle();

// function navHover() {
//   navListItems.forEach(navH => {
//     navH.addEventListener('mouseover', () => {
//       navH.style.transform = 'scale(1.1)'
//       navH.style.boxShadow = 'var(--shadow)';
//     })
//     navH.addEventListener('mouseout', () => {
//       navH.style.transform = ''
//       navH.style.boxShadow = ''
//     })
//   });
// }
// navHover();

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