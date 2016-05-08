$(document).ready(function () {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("login_name") != null) {
      $('#login-but').text(localStorage.getItem("login_name"));
    } else{
      $('#login-but').text("登录");
    }
  }

  $('#logout-but').on('click', function () {
    localStorage.removeItem("login_name");
    window.location.href = "index.html"
  });
});
