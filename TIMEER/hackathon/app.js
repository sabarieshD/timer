const jsConfetti = new JSConfetti()


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 900
        }
      },
      "color": {
        "value": "#f00"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

if(window.innerWidth < 800){
  const domainCards = document.querySelectorAll('.domain-card');
  domainCards.forEach((domainCard)=> {
    domainCard.setAttribute('data-aos','zoom-out');
  });
}
// Delay for 5 seconds
var delayInMilliseconds = 5000;

setTimeout(function() {
  const glitchImage = document.querySelector('.glitch');
  PowerGlitch.glitch(glitchImage);
  PowerGlitch.glitch('.glitch', {
    playMode: 'always',
    hideOverflow: true,
    timing: {
      duration: 800,
      iterations: Infinity,
      easing: 'ease-in-out',
    },
    glitchTimeSpan: {
      start: 0.3,
      end: 0.7,
    },
    shake: {
      velocity: 5,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 5,
      velocity: 10,
      minHeight: 0.02,
      maxHeight: 0.40,
      hueRotate: true,
    },
  });
}, delayInMilliseconds);

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

 de= document.getElementById("home");
 de.style.display="none";
 async function loopWithDelay() {
  for (let i = 0; i < 3; i++) {
    jsConfetti.addConfetti()
    jsConfetti.addConfetti()
    jsConfetti.addConfetti()
    await delay(3000); // Delay for 1000 milliseconds (1 second)
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function myFunction() {
  loopWithDelay();
  var btn = document.getElementById("mydiv");
  btn.style.display = "none";
  de.style.display = "block";

  // var x = document.getElementById("mydiv");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
    
  // } else {
  //   x.style.display = "block";
  // }
}
function start(){
  // const storedTime = localStorage.getItem('totalHours');
  // let totalHours = storedTime ? parseInt(storedTime) : 0;
  myFunction();
  var last = "00:00:00";
  var now = "2023/10/12 14:38:00";
  $('#clock').countdown(now, function (event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    var hours = totalHours < 10 ? '0' + totalHours : totalHours; // Add leading zero if needed
    var format = hours + ':%M:%S';
    var now = event.strftime(format);
    animateTime(last, now);
    last = now;
  });
  
  function animateTime(last, now) {
    for (var i = 0; i < now.length; i++) {
      if (last[i] !== now[i]) {
        animate(i, now[i]);
      }
    }
  }
  

}

function animate(index, number) {
  var element = document.getElementsByClassName("number")[index];
  var second = element.lastElementChild.cloneNode(true);
  second.innerHTML = number;
  element.appendChild(second);
  element.classList.add('move');
  setTimeout(function () {
    element.classList.remove('move');
  }, 500);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 1000);
}


function animate(index, number) {
  var element = document.getElementsByClassName("number")[index];
  var second = element.lastElementChild.cloneNode(true);
  second.innerHTML = number;
  element.appendChild(second);
  element.classList.add('move');
  setTimeout(function () {
    element.classList.remove('move');
  }, 500);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 500);
}

anime.timeline({ loop: true })
  .add({
    targets: '.ml15 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

