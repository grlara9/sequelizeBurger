$(function() {

$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
  };

  // Send the POST request.
  $.ajax("/burgers/create", {
      type: "POST",
      data: newBurger
  }).then(function() {
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
  });
})
})
