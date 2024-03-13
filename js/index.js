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
    if(cityName == "home"){
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
    if(cityName != "home")
    document.getElementsByClassName('navbar-fixed-top')[0].style.backgroundColor = "black";
    // console.log(evt.currentTarget);
    // evt.currentTarget.className += " active";
    
    document.getElementsByClassName(`link_${cityName}`)[0].classList.add("active");
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    console.log('Document is ready');
});