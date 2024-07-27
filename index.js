$(document).ready(function () {
  $(window).scroll(function () {

    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }


    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {

    $("html").css("scrollBehavior", "smooth");
  });


  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });


  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let drive = document
  .querySelector(".Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/18m6eOsyILc4VVYizhaO3nvnJ2zWy-emp/view?usp=sharing")
  );
}

let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", openDrive2);

function openDrive2() {
  window.open(
    (href =
      "https://drive.google.com/file/d/18m6eOsyILc4VVYizhaO3nvnJ2zWy-emp/view?usp=sharing")
  );
}

{/* <script src="three.r134.min.js"></script>
<script src="vanta.birds.min.js"></script>
<script>
VANTA.BIRDS({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xf1114,
  color1: 0x372b2b,
  birdSize: 0.80,
  wingSpan: 36.00,
  alignment: 41.00
})
</script> */}

document.addEventListener("DOMContentLoaded", function() {
  // Function to initialize Vanta Birds effect
  var setVanta = function() {
      if (window.VANTA) {
          window.VANTA.BIRDS({
              el: "#home",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 100.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00

          });
      }
  };
})
// Call setVanta when the page is loaded
setVanta();

// Subscribe to an event to re-initialize Vanta when the page changes
if (window.edit_page && window.edit_page.Event) {
  window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
}
