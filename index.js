$(document).ready(function () {
  $("#my_form").submit(function (e) {
    e.preventDefault();
    const user = "andy";
    const pass = "1234";
    const userInput = $("#user-input").val();
    const passInput = $("#pass-input").val();
    if (pass === passInput && user === userInput) {
      window.location = "./popup.html";
    }
  });
});
