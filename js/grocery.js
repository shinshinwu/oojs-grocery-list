
$(document).ready(function() {

  $('.item').draggable({
    helper: "clone"
  });

  $('#grocery_list').droppable({

    drop: function (event, ui) {
      var clone = ui.draggable;
      $('#drop-list').append(clone.clone());
      var total = parseFloat($('#total_cost')[0].innerText)
      var addition = parseFloat(clone.children().last()[0].innerText)
      $('#total_cost').text(total + addition)
    }

  });

});
