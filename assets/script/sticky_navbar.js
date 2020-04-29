window.onload = function() {
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction();};
        // When the window is resized, execute changeHeight
        window.onresize = function() {changeHeight();};

	// Get the navbar
	var navbar = document.getElementById("topnav");
	var main_content = document.getElementById("main");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;
        // Get the height of the navbar
        var height = navbar.offsetHeight;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= sticky) {
			if (main_content!==null) main_content.style.padding=height+"px 0 0 0";
			navbar.classList.add("sticky");
		} else {
			navbar.classList.remove("sticky");
		}
	}
        // Update the height of the navbar and the padding of the main box
        function changeHeight(){
            height = navbar.offsetHeight;
            myFunction();
        }
};