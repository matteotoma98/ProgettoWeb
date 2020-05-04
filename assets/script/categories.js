/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function() {
	var cat = document.getElementById("cat1");
        var sub = document.getElementById("sub1");
        
        cat.onclick = function() {showHideSub();};

	// Show or hide the subcat when a cat is clicked
	function showHideSub() {
            cat.classList.toggle("rotate");
            sub.classList.toggle("show");
	};
};

