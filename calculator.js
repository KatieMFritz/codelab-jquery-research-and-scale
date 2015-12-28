$('#js-calculator').each(function() {
  var $container = $(this)
  var $riders = $container.find( 'input#js-number-of-riders' )
  var $miles = $container.find( 'input#js-total-miles' )
  var $mileage = $container.find( 'input#js-mileage-rate' )

  function showResult() {
    $('#js-result').html(function() {
      return "<p>" + $riders.val() + "</p><p>" + $miles.val() + "</p><p>" + $mileage.val() + "</p>"
    })
  }

  $('#js-calculator').on('input', function() {
   showResult()
  })
})




// $('#js-number-of-riders').on('input',  function () {
//   var $riders = $( 'input#js-number-of-riders' ).val()
//   console.log( $riders)
// })
//
// $('#js-result').html(function() {
//   return "<p>" + $riders  + "</p>"
// })
