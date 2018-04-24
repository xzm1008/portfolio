

// Borrowed from http://jsfiddle.net/mariusc23/s6mLJ/31/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 75;
// console.log($('nav'),$('nav').length());


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down1').addClass('nav-up1');
    }
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up1').addClass('nav-down1');
            console.log('hihihiscroll', st, lastScrollTop, lastScrollTop - st)
        }
    }

    lastScrollTop = st;
}




$( document ).ready(function() {

//this is for the top navbar, make it disappear if scroll down and appears when scroll up
  var xPos = 683;
  var yPos = 800;
  var length = $(window).scrollTop();
  var width = $(window).width();
  var setState = function() {
    if(length > yPos && width > xPos){
      //use the fixed sidebar state
        $('#sidebar-fluid').hide();
        $('#sidebar-fixed').show();
      }
    else {
        //use the fluid sidebar state
        $('#sidebar-fluid').show();
        $('#sidebar-fixed').hide();
      }
  }

    $( window ).scroll(function (event) {
      length = $(window).scrollTop();
      setState();
    });
    $( window ).resize(function() {
      width = $(window).width();
      setState();
    });

// //for smooth scroll
//   $('.sidebar').scrollspy()
//   $('.sidebar ul li a').bind('click', function(e) {
//    // prevent default anchor click behavior
//    e.preventDefault();

//    // store hash
//    var hash = this.hash;

//    // animate
//    $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 300, function(){

//        // when done, add hash to url
//        // (default click behaviour)
//        window.location.hash = hash;
//      });
//   });
});





// for side navbar
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  $('section').each( function() {
    var top = $(this).offset().top - 250;
    var bottom = top + $(this).outerHeight();

    // check current location and if changed section
    if (cur_pos >= top && cur_pos <= bottom) {

      //inactive last section
      $('.sidebar').find('a').removeClass('active');
      $('section').removeClass('active');
      $(this).addClass('active');

      //active current section
      var id = $(this).attr('id')
      $('.sidebar').find('a[href="#'+ id +'"]').addClass('active');
    }
  });
});

