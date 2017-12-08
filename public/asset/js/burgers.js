$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var devour-progress = {
      devour: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devour-progress
    }).then(
      function() {
        console.log("changed sleep to", newdevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newEAT = {
      name: $("#ca").val().trim(),
      devour: $("[name=devour]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newEAT
    }).then(
      function() {
        console.log("EAT NEW BURGER");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
