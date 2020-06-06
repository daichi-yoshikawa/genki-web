window.onload = function() {
  add_effect_scroll();

  $(window).scroll(function() {
    add_effect_scroll();
  })

  function add_effect_scroll() {
    let window_height = $(window).height();
    let scroll = $(window).scrollTop();
    let margin = 50;

    function add_effect_scroll_impl(elem) {
      let elem_top = elem.offset().top;
      if((scroll + window_height > elem_top + margin) &&
         (scroll < elem_top + elem.outerHeight(true) - margin)) {
        elem.addClass('effect-scroll');
      }
    }

    $('.ss-fadein:not([class~="effect-scroll"])').each(function() {
      add_effect_scroll_impl($(this))
    });
    $('.ss-fadein-to-top:not([class~="effect-scroll"])').each(function() {
      add_effect_scroll_impl($(this))
    });
    $('.ss-fadein-to-bottom:not([class~="effect-scroll"])').each(function() {
      add_effect_scroll_impl($(this))
    });
    $('.ss-fadein-to-right:not([class~="effect-scroll"])').each(function() {
      add_effect_scroll_impl($(this))
    });
    $('.ss-fadein-to-left:not([class~="effect-scroll"])').each(function() {
      add_effect_scroll_impl($(this))
    });
  }
};
