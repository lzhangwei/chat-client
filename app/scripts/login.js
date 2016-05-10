$(document).ready(function () {
  // $('.amount').text(getAmounts());
  var role = 'user';
  $('input:radio[name="role"]').change(function () {
    if ($(this).val() == 'service') {
      role = 'service'
    } else {
      role = 'user'
    }
  });

  $('#login').on('click', function () {
    var name = $('#name').val();
    var password = $('#password').val();

    var user = new User(name, password, role);
    $.post('/users/login', user, function (response, status) {
      if (status == 'success' && response != "") {
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem("login_name", response.name);
          localStorage.setItem("user_role", response.role);
        } else {
          alert("请使用支持Web Storage Support的浏览器")
        }
        window.location.href = "index.html"
      } else {
        localStorage.removeItem("login_name");
        localStorage.removeItem("user_role");
        alert("登录失败!");
        window.location.href = "login.html"
      }
    });

  });
});
