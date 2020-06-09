
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


function getGithubInfo(username) {
  var url = "https://api.github.com/users/" + username;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();

  return xmlhttp;
}


function showUser(xmlhttp) {
  if (xmlhttp.status===200) {
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);


    // 1. Github ID
    document.getElementById("githubId").innerHTML = username + ' is GitHub user #' + user.id;

    // 2. Profile information
    var oldDiv = document.querySelector("#profile .information");

    var newAnchor = document.createElement("a");
    var newContent = document.createTextNode(" go to GitHub profile link");
    newAnchor.href = user.html_url;
    newAnchor.classList.add("profile");
    newAnchor.appendChild(newContent);
    oldDiv.appendChild(newAnchor);


    // 3. Avatar image
    var newImage = document.createElement("img");
    var avatarUrl = user.avatar_url;
    newImage.src = avatarUrl;
    var avatarParents = document.getElementsByClassName("avatar");

    if (avatarParents && avatarParents.length === 1) {
      var avatarParent = avatarParents[0];
      avatarParent.appendChild(newImage);
      newImage.classList.add("avatarFound");
    }
  } else {
    console.error("An error occurred. Received status code: ", xmlhttp.status);
    var headingElement = document.querySelector("#profile h2");
    headingElement.innerHTML = "No such user!";
  }

  var input = document.getElementById("username");
  input.value = "";
}

