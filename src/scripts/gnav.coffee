$menuIcon = $ '#js-menu-icon'
$gnav = $ '#js-gnav'

$ '#js-menu-icon, #js-gnav'
  .click (e) ->
    $menuIcon.toggleClass 'is_open'
    $gnav.toggleClass 'is_open'
