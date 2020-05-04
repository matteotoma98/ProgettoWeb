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
            cat[i].addEventListener("click",function() {
                this.classList.toggle("rotate");
                this.children[1].classList.toggle("show");
            });
        }

	// Show or hide the subcat when a cat is clicked
	function showHideSub() {
            this.classList.toggle("rotate");
            sub[0].classList.toggle("show");
	};
};

