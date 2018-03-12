$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var newBurgerName = $("#new-burger")
    .val()
    .trim();

  var newBurger = { name: newBurgerName };

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function(res) {
    $("#new-burger").val("");
    location.reload();
  });
});

$(".devour-burger").on("click", function(event) {
  event.preventDefault();

  var id = $(this).data("id");
  var devouredStatus = $(this).data("devour-status");

  if (devouredStatus == "0") {
    var devouredBurger = { newDevouredStatus: 1 };
  } else {
    console.log("Error - incorrect devoured status");
  }

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredBurger
  }).then(function(res) {
    location.reload();
  });
});
