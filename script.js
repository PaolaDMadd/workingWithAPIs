
//github user finder example
var username = "";
$(document).ready(function() {
  $(document).on("keypress", "#username", function(event) {
    if (event.which === 13) {
      var input = $(this);
    username = input.val();
      showUser(getGithubInfo(username));
    }
  });


});function getGithubInfo(username) {
  var url = "https://api.github.com/users/" + username;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();

  return xmlhttp;
}