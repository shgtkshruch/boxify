$video = $ '#js-video'

$video.click (e) ->
  $.fancybox
    href: @.href
    padding: 0
    type: 'iframe'

  return false
