/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function() {
	var cat = document.getElementsByClassName("cat");
       
        
        var i;
	// Show or hide the subcat when a cat is clicked
        for(i = 0; i < cat.length; i++) {
            cat[i].children[0].addEventListener("click",function() {
                this.classList.toggle("rotate");
                this.nextElementSibling.classList.toggle("show");
            });
        }



};

