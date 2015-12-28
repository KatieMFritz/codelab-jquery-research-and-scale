$('#js-calculator').each(function() {
  var $container = $(this)
  var $riders = $container.find( 'input#js-number-of-riders' )
  var $miles = $container.find( 'input#js-total-miles' )
  var $mileage = $container.find( 'input#js-mileage-rate' )

  function showResult() {
    var $total = $mileage.val() * $miles.val() / $riders.val()
    $('#js-result').html(function() {
      // return "<p>" + $riders.val() + "</p><p>" + $miles.val() + "</p><p>" + $mileage.val() + "</p>"
      return "<p class='total'>$" + $total + "</p>"
    })
  }

  $('#js-calculator').on('input', function() {
   showResult()
  })
})
