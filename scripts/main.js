(function() {
  var $gnav, $menuIcon;

  $menuIcon = $('#js-menu-icon');

  $gnav = $('#js-gnav');

  $('#js-menu-icon, #js-gnav').click(function(e) {
    $menuIcon.toggleClass('is_open');
    return $gnav.toggleClass('is_open');
  });

}).call(this);

(function() {
  var $video;

  $video = $('#js-video');

  $video.click(function(e) {
    $.fancybox({
      href: this.href,
      padding: 0,
      type: 'iframe'
    });
    return false;
  });

}).call(this);

(function() {
  $('#js-intro-slider, #js-device-slider').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
  });

}).call(this);

(function() {
  $('.js-screenshot__link').fancybox({
    padding: 4
  });

}).call(this);

(function() {
  var waypoints;

  waypoints = [
    {
      selector: '#js-wp1',
      "class": 'fadeInLeft'
    }, {
      selector: '.js-wp2',
      "class": 'fadeInDown'
    }, {
      selector: '#js-wp3',
      "class": 'bounceInDown'
    }, {
      selector: '#js-wp4',
      "class": 'fadeInDown'
    }
  ];

  waypoints.forEach(function(wp) {
    return $(wp.selector).waypoint(function() {
      return $(this.element).addClass('animated ' + wp["class"]);
    }, {
      offset: '75%'
    });
  });

}).call(this);

(function() {
  $('gnav a, nav a').smoothScroll();

}).call(this);
