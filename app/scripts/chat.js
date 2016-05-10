$(document).ready(function () {
  var userName;
  var userRole;
  if (typeof(Storage) !== "undefined") {
    userName = localStorage.getItem("login_name");
    userRole = localStorage.getItem("user_role");
    if (userName == null || userRole == null) {
      alert("请先登录!");
      window.location.href = "login.html"
    } else {
      var socket = io();
      
    }
  }
});
