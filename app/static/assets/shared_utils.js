function add_effect_scroll() {
  let window_height = $(window).height();
  let scroll = $(window).scrollTop();

  function add_effect_scroll_impl(elem, margin) {
    if(scroll + window_height > elem.offset().top + margin) {
      elem.addClass('effect-scroll');
    }
  }

  $('.ss-fadein:not([class~="effect-scroll"])').each(function() {
    add_effect_scroll_impl($(this), 0)
  });
  $('.ss-fadein-to-top:not([class~="effect-scroll"])').each(function() {
    add_effect_scroll_impl($(this), -400)
  });
  $('.ss-fadein-to-bottom:not([class~="effect-scroll"])').each(function() {
    add_effect_scroll_impl($(this), 400)
  });
  $('.ss-fadein-to-right:not([class~="effect-scroll"])').each(function() {
    add_effect_scroll_impl($(this), 0)
  });
  $('.ss-fadein-to-left:not([class~="effect-scroll"])').each(function() {
    add_effect_scroll_impl($(this), 0)
  });
}

window.onload = function() {
  add_effect_scroll();

  $(window).scroll(function() {
    add_effect_scroll();
  })
};

