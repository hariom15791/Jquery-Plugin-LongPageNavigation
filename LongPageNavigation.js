(function ( $ ) {
 
    $.fn.LongPageNavigation = function( options ) {
 
     // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
			longPageNavigationPosition:"" ,// Give Class Name Where Long Navigation Append.
        }, options );
 
 
 
    // Append Loop
	if(settings.longPageNavigationPosition=="")
	{
		 $(this).before('<div class="longPageNavigationDiv"><ul></ul></div>');
		
	}
	else
	{
		 $('.'+settings.longPageNavigationPosition).append('<div class="longPageNavigationDiv"><ul></ul></div>');
		
	}	
    
     $(this).children('h2').each(function(index){
		 
		   var getMenuName = $(this).text();
		   $(this).attr('id','LongNavigation-'+index);
		  
		   $('.longPageNavigationDiv ul').append('<li><a href="#LongNavigation-'+index+'">'+ getMenuName +'</a></li>');
		   // Smooth Scroll 
		
		   
		 
	 });
       
// Smooth Navigation	   
		
		$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
		
// Smooth Navigation END	        
 

 
    };
 
}( jQuery ));
