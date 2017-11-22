$( document ).ready(function() {
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   var picture = 
   ["mono-1",
   "mono-2",
   "mono-3",
   "mono-4",
   "mono-5",
   "mono-6",
   "mono-7",
   "mono-8",
   "mono-1",
   "mono-2",
   "mono-3",
   "mono-4",
   "mono-5",
   "mono-6",
   "mono-7",
   "mono-8"];
   var num = 0;
   let firstSelection = false;
   let SecondSelection = false;
   let score = 0;
   let gameStart = false;
   
   function loadCards() {
	   console.log(card.length);
	   card.each(function(index) {
		  
		   $(this).text(picture[index]);
		   num++;
		   
	   });
   }
   
   function gameTimer(){
	   //TODO: create a function that has a timer
   }
   
   function startGame() {
	   //TODO: load each div with a raondom picture holder info
	   //TODO: set score to zero
   }
   
   loadCards();
   
   
   card.click(function() {
	var selected = $(this);
	
	if(!firstSelection){
		alert("first blood!");
		selected.css("background-color", "red");
	}else {
		alert("then crips");
		selected.css("visibility", "hidden");
		}
	});
	
	
	
	   
   });
   
   function cardClick(){
	   //check to see if gameStart is true
		//if not
			// start gameTimer()
			// set gameStart == true
			
	   
	   //show card image
	   
	   //check to see if another card has been clicked
			//if another card has been clicked
				//if the card matches
					//remove both cards
					//add points to scoreboard
					
				
	   
   
   
}
