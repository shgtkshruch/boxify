waypoints = [
  selector: '#js-wp1'
  class: 'fadeInLeft'
,
  selector: '.js-wp2'
  class: 'fadeInDown'
,
  selector: '#js-wp3'
  class: 'bounceInDown'
,
  selector: '#js-wp4'
  class: 'fadeInDown'
]

waypoints.forEach (wp) ->
  $ wp.selector
    .waypoint ->
      $ @.element
        .addClass 'animated ' + wp.class
    ,
      offset: '75%'

