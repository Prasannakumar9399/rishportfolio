function openNavigation(evt, cityName) {
  // console.log("Open Navigation Called"+cityName);
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(`link`);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  if (cityName == "home") {
    // console.log("City Name same");
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "block";
    }
    document.getElementsByClassName(`link_${cityName}`)[0].classList.add("active");
    return;
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  if (cityName == "about") {
    document.getElementById("slider").style.display = "block";
    document.getElementById("footer-down").style.display = "block";


  }
  if (cityName != "home")
    document.getElementsByClassName('navbar-fixed-top')[0].style.backgroundColor = "black";
  // console.log(evt.currentTarget);
  // evt.currentTarget.className += " active";

  document.getElementsByClassName(`link_${cityName}`)[0].classList.add("active");
}
document.addEventListener('DOMContentLoaded', function () {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => { console.log(editor); })
    .catch(error => { console.error(error); });

});

function openTextEditor() {
  if (document.getElementsByClassName("new-blog")[0].style.display == "" || document.getElementsByClassName("new-blog")[0].style.display == "none") {
    document.getElementsByClassName("new-blog")[0].style.display = "block";
    document.getElementsByClassName("all-blogs")[0].style.display = "none";

  }
  else {
    document.getElementsByClassName("new-blog")[0].style.display = "none";
    document.getElementsByClassName("all-blogs")[0].style.display = "block";

  }
}

function toggleMoreLess(id) {
  console.log(id);
  console.log(`author-${id.split("-")[1]}`);
  if (document.getElementsByClassName(id)[0].style.display == "none" || document.getElementsByClassName(id)[0].style.display == "") {
    document.getElementsByClassName(id)[0].style.display = "block";
    document.getElementsByClassName(`${id}-button`)[0].innerHTML = "Read Less";
    document.getElementsByClassName(`author-${id.split("-")[1]}`)[0].classList.replace('col-md-5', 'col-md-12');

  }
  else {
    document.getElementsByClassName(id)[0].style.display = "none";
    document.getElementsByClassName(`${id}-button`)[0].innerHTML = "Read More";
    document.getElementsByClassName(`author-${id.split("-")[1]}`)[0].classList.replace('col-md-12', 'col-md-5');

  }
}