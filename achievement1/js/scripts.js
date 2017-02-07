// Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

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
  	}
  	
  	return false;
  });


  // Show character count for message
  $("#message").on("keyup", function(){
  	var charCount = $(this).val().length;
  	if(charCount == 0){
  		$("#char-count").hide();
  		$("#form-button").removeClass("move-up");
  	}
  	else {
  		$("#char-count").show();
  		$("#char-count").html(charCount);
  		$("#form-button").addClass("move-up");
  	}

  	if(charCount > 50){
  		$("#char-count").css("color", "red");
  	}
  	else {
  		$("#char-count").css("color", "black");
  	}
  });
});