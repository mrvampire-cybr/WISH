function shareOnWhatsApp() {
    var sname = document.getElementById("nameInput").value;  //Get the value from input field
    var shareString = "";

    shareString = sname + "നിങ്ങൾക്ക് ഒരു മഹാശിവരാത്രി ആശംസ സന്ദേശം അയച്ചു! ഇത് കാണാൻ താഴെയുള്ള ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക 👇"; // Your Malayalam share text
    var link  = (window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");
    shareString += encodeURIComponent(link);

    var whatsappURL = "whatsapp://send?text=" + shareString;

    window.open(whatsappURL, '_blank');
}
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
