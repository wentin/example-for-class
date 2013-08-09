$(document).ready(function(){
	$('ul.menu>li>a').click(function(e){
		e.preventDefault();
		$(this).siblings('ul').slideToggle();	
	})	
})