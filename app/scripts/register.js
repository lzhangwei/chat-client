$(document).ready(function () {
  // $('.amount').text(getAmounts());
  $('#register').on('click', function () {
    var name = $('#name').val();
    var password = $('#password').val();
    var password_repeat = $('#password_repeat').val();

    if (password != password_repeat) {
      $('#message').text('两次输入密码不一致');
    } else {
      var user = new User(name, password, 'user');
      $.post('/users', user, function (response, status) {
        if(status == 'success') {
          alert("注册成功!");
          window.location.href = "login.html"
        } else {
          alert("注册失败!");
          window.location.href = "index.html"
        }
      });
    }

  });
});
