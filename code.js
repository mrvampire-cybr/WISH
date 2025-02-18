/* animation_trigger.js */

document.addEventListener("DOMContentLoaded", function() {
  // Get the Shiva icon element
  var shivaIcon = document.querySelector(".shiva-icon");

  // Add the 'glowing' class to trigger the glow effect
  if (shivaIcon) {
    shivaIcon.classList.add("glowing");
  }
   var shareButton = document.querySelector("#whatsappShareButton");

    shareButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the link from navigating

        var sname = document.getElementById("nameInput").value;
        var shareString = sname + "നിങ്ങൾക്ക് ഒരു മഹാശിവരാത്രി ആശംസ സന്ദേശം അയച്ചു! ഇത് കാണാൻ താഴെയുള്ള ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക 👇"; // Your Malayalam share text
        var link  = (window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");
        shareString += encodeURIComponent(link);

        var whatsappURL = "https://web.whatsapp.com/send?text=" + shareString; // Using WhatsApp Web

        console.log("WhatsApp URL: " + whatsappURL);
        window.open(whatsappURL, '_blank');
    });
	 function shareOnBlogSpot() {
        // Replace with your actual BlogSpot URL
        var blogSpotURL = "https://mahashivarathri2025.blogspot.com/2025/02/body-font-family-arial-sans-serif-text.html"; //Enter your Blogspot URL
		var sname = document.getElementById("nameInput").value;  //Get the value from input field
		var shareString = "";

		shareString =  sname + "നിങ്ങൾക്ക് ഒരു മഹാശിവരാത്രി ആശംസ സന്ദേശം അയച്ചു! ഇത് കാണാൻ താഴെയുള്ള ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക 👇";
		var link  = (window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");
      shareString += encodeURIComponent(link);


        var shareURL = blogSpotURL ; //+ encodeURIComponent("Check out this Mahashivratri greeting!");
        window.open(shareURL, '_blank');
    }
	   var blogShareButton = document.querySelector("#blogShareButton");

    blogShareButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the link from navigating
  // Replace with your actual BlogSpot URL
        var blogSpotURL = "https://mahashivarathri2025.blogspot.com/2025/02/body-font-family-arial-sans-serif-text.html"; //Enter your Blogspot URL
		var sname = document.getElementById("nameInput").value;  //Get the value from input field
		var shareString = "";

		shareString =  sname + "നിങ്ങൾക്ക് ഒരു മഹാശിവരാത്രി ആശംസ സന്ദേശം അയച്ചു! ഇത് കാണാൻ താഴെയുള്ള ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക 👇";
		var link  = (window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");
      shareString += encodeURIComponent(link);


        var shareURL = blogSpotURL ; //+ encodeURIComponent("Check out this Mahashivratri greeting!");
        window.open(shareURL, '_blank');
    });
});

$(document).ready(function() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function animateMarquee(marquee) {
        var duration = 5000; // Adjust for speed
        var easing = 'easeInOutSine'; // Easing function

        $(marquee).animate({
            left: '-100%'
        }, {
            duration: duration,
            easing: easing,
            complete: function() {
                $(this).css('left', '100%'); // Reset position to start from right
                animateMarquee(this); // Repeat
            },
            step: function() {
                $(this).css('color', getRandomColor()); // Change color
            }
        });
    }

    // Find all marquee elements and initiate animation
    $('marquee').each(function() {
        $(this).css('left', '100%'); // Start off screen
        animateMarquee(this);
    });
});
