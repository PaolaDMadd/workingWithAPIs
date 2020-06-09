//On Github 

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
});