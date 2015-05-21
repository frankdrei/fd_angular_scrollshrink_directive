myApp.directive('scrollshrink', function($window, $log, $document){
	return function (scope, element, attrs) {
		var myoffset = 1;
		var mytop = parseInt(element.css("top"),10);
        myoffset =	parseInt(attrs.scrollshrink,10);
        $log.debug(mytop);
        $log.debug(myoffset);
		
		$(window).scroll(function() {
			if($(document).scrollTop() != 0 )
				{
					var newtop = ($(document).scrollTop()/ myoffset ) + mytop;
					element.css({
						"top": newtop,
						"position": "relative",
						"z-index": "10"
					});
				}
				else
				{
					element.css({
						"top": mytop,
						"position": "relative",
						"z-index": "10"
					});
				}
		});
	}

});