// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

var js_skills = {
  title: "JavaScript",
  books: [["Head First JavaScript", "https://www.goodreads.com/book/show/1760441.Head_First_JavaScript", "27%"],
          ["Eloquent JavaScript", "http://eloquentjavascript.net/", "13%"]],
  courses: [["Career Foundry", "https://careerfoundry.com"],
            ["CodeSchool", "https://www.codeschool.com/learn/javascript"],
            ["FreeCodeCamp", "https://www.freecodecamp.com/jakeh91"],
            ["Codecademy", "https://www.codecademy.com/learn/javascript"]],
  github: [["Head First", "https://github.com/JakeH91/headfirst/tree/master/javascript"],
          ["Calculator", "https://github.com/JakeH91/Career-Foundry/tree/master/calculator"],
          ["Portfolio", "https://github.com/JakeH91/Career-Foundry/tree/master/portfolio"]]
}

var css_skills = {
  title: "CSS",
  books: [],
  courses: [["Career Foundry", "https://careerfoundry.com"],
            ["FreeCodeCamp", "https://www.freecodecamp.com/jakeh91"]],
  github: []
}

var html_skills = {
  title: "HTML",
  books: [],
  courses: [["Career Foundry", "https://careerfoundry.com"],
            ["FreeCodeCamp", "https://www.freecodecamp.com/jakeh91"]],
  github: []
}

var bootstrap_skills = {
  title: "Bootstrap",
  books: [],
  courses: [["Career Foundry", "https://careerfoundry.com"],
            ["FreeCodeCamp", "https://www.freecodecamp.com/jakeh91"]],
  github: []
}

var ruby_skills = {
  title: "Ruby",
  books: [["Head First Ruby", "https://www.goodreads.com/book/show/23466394-head-first-ruby", "37%"]],
  courses: [["Career Foundry", "https://careerfoundry.com"],
            ["FreeCodeCamp", "https://www.freecodecamp.com/jakeh91"]],
  github: []
}

function destroyInfo(){
  $(".books ul").html("");
  $(".courses ul").html("");
  $(".github-repos ul").html("");
}

function createInfo(skill){
  $(".skills-info").find("h3").text(skill.title);
  $.each(skill.books, function(index, value){
    $(".books ul").append("<li><a href='" + value[1] + "'>" + value[0] + "</a><span class='progress'><span class='complete' id='complete" + index +"'></span></span></li>");
    $("#complete" + index).css("width", value[2]);
  })
  $.each(skill.courses, function(index, value){
    $(".courses ul").append("<li><a href='" + value[1] + "'>" + value[0] + "</a></li>");
  })
  $.each(skill.github, function(index, value){
    $(".github-repos ul").append("<li><a href='" + value[1] + "'>" + value[0] + "</a></li>");
  })
}


$(document).ready(function(){
	// Stellar
	$(".fixed-background").stellar();


	// Tooltip
	$(function(){
    $("#ask").tooltip();
  });
  $(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .navbar-brand a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });

  // Display Info of Skills
  $(".skill-icon").on("click", function(){
    destroyInfo();
    var str = $(this).attr("id");
    createInfo(window[str]);
    if($(this).hasClass("triangle-pointer")){
      $(".skills-info").slideUp();
      $(this).removeClass("triangle-pointer");
    }
    else if($(this).siblings().hasClass("triangle-pointer")){
      $(this).siblings().removeClass("triangle-pointer");
      $(this).addClass("triangle-pointer");
    }
    else{
      $(".skills-info").slideDown();
      $(this).addClass("triangle-pointer");
    }    
  });


  // Display Message
  $("#form-button").on("click", function(){
  	if($("#message").val() === ""){
  		$("#message").css("border", "1px solid red");
  	}
  	else{
	  	var name = $("#name").val();
	  	var comment = $("#message").val();
	  	$("#visible-name").html("Message sent by " + name.toUpperCase());
	  	$("#visible-comment").html("Message:<br />" + comment);
	  	$("#name").hide();
	  	$("#number").hide();
	  	$("#email").hide();
	  	$("#message").hide();
	  	$("#form-button").hide();
      $(".title").hide();
  	}
  	
  	return false;
  });


  // Show title of form area
  $(".form-control").on("keyup", function(){
    var charCount = $(this).val().length;
    if(charCount > 0){
      var title = $(this).siblings("label").html();
      $(this).siblings(".title").html(title).show(200);
    }
    else {
      $(this).siblings(".title").hide(200);
    }
  });


  // Show character count for message
  $("#message").on("keyup", function(){
  	var charCount = $(this).val().length;
  	if(charCount == 0){
  		$("#char-count").hide();
  	}
  	else {
  		$("#char-count").show();
  		$("#char-count").html(charCount);
  	}

  	if(charCount > 50){
  		$("#char-count").css("color", "red");
  	}
  	else {
  		$("#char-count").css("color", "black");
  	}
  });


  // Append work images/links to work section
  for(var i = 0; i < works.length; i++){
    $("#work").append('\
      <div class="col-md-3 col-xs-6">\
        <a href="' + works[i].href + '">\
          <img class="work-image" src="' + works[i].src + '" alt="' + works[i].title + '">\
          <span class="info">\
            <p class="proj-title">Title: </p>\
            <p class="actual-title">' + works[i].title + '</p>\
          </span>\
        </a>\
      </div>');
    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "1px solid DodgerBlue");
    }
    else {
      $(images[i]).css("border", "1px solid salmon");
    }
  };

  // Toggle title of work on hover
  $(".work-image").mouseenter(function(){
    $(this).siblings(".info").show();
  });
  $(".work-image").mouseleave(function(){
    $(this).siblings(".info").hide();
  });


});


function initMap() {
  var myLatLng = {lat: 63.4241837, lng: 10.3832649}

  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 13
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "My Home",
    animation: google.maps.Animation.DROP
  })
}