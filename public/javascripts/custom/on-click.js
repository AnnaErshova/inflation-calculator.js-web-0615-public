"use strict";

$(document).ready(function(){
  // add your on click event handler here
  // equivalent of runner
  $('#calc').on('click', function(){
    fetchEndPrice(addPriceToPage())
  });
});