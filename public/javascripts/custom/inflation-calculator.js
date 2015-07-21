function fetchOption() {
  return {
    start: $('#startDate').val(),
    end:   $('#endDate').val(),
    amount:$('#startPrice').val()
  }
}

function fetchEndPrice(callback) {
  // send AJAX request and get information back
  var options = fetchOptions();
  var apiURL = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';
  $.getJSON(apiURL, {
    country: 'united-states',
    start: options.start,
    end: options.end,
    amount: options.amount,
    format: true
  }).done(callback)
}

function addPriceToPage(price){
  var finalPrice = price.substring(1);
  $('#endPrice').val(finalPrice);
  return price;
}