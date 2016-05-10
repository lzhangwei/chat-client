$(document).ready(function () {
  if (typeof(Storage) !== "undefined") {
    var userName = localStorage.getItem("login_name");
    var userRole = localStorage.getItem("user_role");
      if(userName != null && userRole != null) {
      $('#login-but').text(userName);
    } else{
      $('#login-but').text("登录");
    }
  }

  $('#logout-but').on('click', function () {
    localStorage.removeItem("login_name");
    window.location.href = "index.html"
  });
});
