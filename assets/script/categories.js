/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function() {
	var cat = document.getElementsByClassName("cat");
        var sub = document.getElementsByClassName("sub");
        
        var i;
        for(i = 0; i < cat.length; i++) {
            cat[i].addEventListener("click",showHideSub(i));
        }

	// Show or hide the subcat when a cat is clicked
	function showHideSub(index) {
            cat[index].classList.toggle("rotate");
            sub[index].classList.toggle("show");
	};
};

