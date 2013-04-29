//@codekit-prepend "jquery-1.9.1.min.js"
//@codekit-prepend "jquery-ui-1.10.2.custom.min.js"

$(function(){

	setDraggable();
	
	$("div.point:not(.player2)").droppable({ 
		hoverClass: "hover-piece",
		drop: function(event, ui) {
			var piece = $(ui.draggable).remove();
			$(this).addClass("player1").prepend('<div class="piece"></div>');

			setDraggable();
		}
	});
	
	//roll dice
	$("div.die").click(function(){
		$("div.die").shake();
		$("div.die div.face").removeClass("active");
		for (var i = 1; i < 3; i++) {
			var roll = Math.floor(Math.random() * 6) + 1;
			$("div#die" + i).find("div.face[data-id=" + roll + "]").addClass("active");
		}
	});
	
	function setDraggable() {
		$("div.piece.ui-draggable").each(function(){ 
			$(this).draggable('destroy'); 
		});

		$("div.point.player1").each(function(){
			$(this).find("div.piece").last().draggable({revert: "invalid"});
		});
	}
	
	jQuery.fn.shake = function() {
	    this.each(function(i) {
		    var left = $(this).position().left;
	        for (var x = 1; x <= 2; x++) {
	            $(this).animate({ left: left-25 }, 10).animate({ left: left }, 50).animate({ left: left + 25 }, 10).animate({ left: left }, 50);
	        }
	    });
	    return this;
	} 

});