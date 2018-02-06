$(function(){

  $("#submit").on("click", function(event) {
    event.preventDefault();
    $(".checkForError").each(function() {
      if ($(this).val() === "") {
        $(this).addClass("error");
        $(".error").show();
        $(this).siblings(".errorMessage").show();
      } else {
        $(this).removeClass("error");
        $(this).siblings(".errorMessage").hide();
      }
    });
  });
});
