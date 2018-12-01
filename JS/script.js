$(document).ready(function() {
  $(".dropdown-trigger").dropdown({
    hover: true
  });
  $(".sidenav").sidenav({
    draggable: true
  });
  $(".slider").slider({
    indicators: false,
    interval: 8000,
    height: 600
  });
  $(".button-collapse").sideNav({
    menuWidth: 200, // Default is 240
    edge: "left", // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $(".collapsible").collapsible();
  $(".materialboxed").materialbox();
});
var elems = document.querySelectorAll(".materialboxed");
var instances = M.Materialbox.init(elems);
