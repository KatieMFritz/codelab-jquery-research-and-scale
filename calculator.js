$('.js-calculator').each(function() {
  var $container = $(this)
  var $riders = $container.find( 'input.js-number-of-riders' )
  var $miles = $container.find( 'input.js-total-miles' )
  var $mileage = $container.find( 'input.js-mileage-rate' )

  function showResult() {
    var $total = ( $mileage.val() * $miles.val() / $riders.val() ).toFixed(2)
    $('.js-result').html(function() {
      return "$" + $total
    })
    if ($total >= 50 ) {
      $('.js-result').addClass( 'expensive' )
    }
    if ($total < 50 ) {
      $('.js-result').removeClass( 'expensive' )
    }
  }

  $('.js-calculator').on('input', function() {
    showResult()
  })
})
