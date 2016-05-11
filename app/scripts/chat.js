$(document).ready(function () {
  var userName;
  var userRole;
  if (typeof(Storage) !== 'undefined') {
    userName = localStorage.getItem('login_name');
    userRole = localStorage.getItem('user_role');
    if (userName == null || userRole == null) {
      alert('请先登录!');
      window.location.href = "login.html"
    } else {
      var socket = io();
      socket.emit('init', userName, userRole);

      socket.on('message', function (message) {
        console.log('---client get message---' + JSON.stringify(message));
        $('#chat_panel').append('<li class="list-group-item">' + message.from + ': ' + message.message + '</li>');
      });
    }
  }
  $('#send_but').on('click', function () {
    var message = $('#message_input').val();
    $('#chat_panel').append('<li class="list-group-item">' + userName + ': ' + message + '</li>');
    $('#message_input').val("");
    socket.emit('message', userName, userRole, message);
  });
});
