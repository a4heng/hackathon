$(document).ready(function () {
  $("#yt").on("click", () => {
    // console.log("hello");
    // location.href = "https://www.google.com/";
    // chrome.windows.create({
    //   url: "https://www.google.com/",
    //   width: "500",
    //   height: "500",
    //   type: "panel",
    //   focused: true,
    // });

    $("box-container").append(
      '<iframe src="https://www.google.com/" frameborder="0"></iframe>'
    );
  });
});
