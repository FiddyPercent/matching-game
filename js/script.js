$( document ).ready(function() {
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   var picture = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
   var num = 0;
   var firstSelection, SecondSelection;
	
	
   function loadCards() {
	   console.log(card.length);
	   card.each(function(index) {
		  
		   $(this).text(picture[index]);
		   num++;
		   
	   });
   }
   
   loadCards();
   card.click(function() {
	var selected = $(this);
	
	if(firstSelection.isEmpty()){
		firstSelection = selected;
	}else{
		if(firstSelection.text() == selected.text()){
			selected.css("visibility", "hidden");
			firstSelection.css("visibility", "hidden");
			
			selected = null;
		}else{
			selected.css("background-color", "red");
			firstSelection.css("background-color", "red");
			selected = null;
		}
	}	
	
	
	 // $(this).css("visibility", "hidden");
	   
   });
   
   var Card = {
	   
   }
   
});
