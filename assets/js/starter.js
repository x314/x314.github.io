// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";

var $lastCard = $(".card-stack .card-list .card").length - 1

$('.card-stack .next').click(function (e) {
  e.preventDefault()
  var prependList = function () {
    if ($('.card-stack .card').hasClass('activeNow')) {
      var $slicedCard = $('.card-stack .card').slice($lastCard).removeClass('transformThis activeNow')
      $('.card-stack ul').prepend($slicedCard)
    }
  }
  $('.card-stack li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow')
  setTimeout(function () {
    prependList()
  }, 150)
})

$('.card-stack .prev').click(function (e) {
  e.preventDefault()
  var appendToList = function () {
    if ($('.card-stack .card').hasClass('activeNow')) {
      var $slicedCard = $('.card-stack .card').slice(0, 1).addClass('transformPrev')
      $('.card-stack .card-list').append($slicedCard)
    }
  }

  $('.card-stack li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass(
    'activeNow')
  setTimeout(function () {
    appendToList()
  }, 150)
})
