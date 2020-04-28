window.onload = function() {
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("topnav");
	var main_content = document.getElementById("main");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= sticky) {
			main_content.style.padding="54px 0 0 0";
			navbar.classList.add("sticky");
		} else {
			navbar.classList.remove("sticky");
		}
	}
}