global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $
// fixed
$(window).bind('scroll', function () {
  var navHeight = $(window).height() - 70
  if ($(window).scrollTop() > navHeight) {
    $('nav').addClass('fixed')
  } else {
    $('nav').removeClass('fixed')
  }
})
$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target)
    var _opened = $('.navbar-collapse').hasClass('navbar-collapse in')
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {
      $('button.navbar-toggle').click()
      console.log('3')
    }
  })
})
