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
   let gameStart = false;
   let timer = $("#timer");
   let time = 0;
   let score = 0;
   let start = new Date;
   let startTimer = setInterval(function(){"Time: " + timer.text(Math.floor((new Date - start)/ 1000) )},1000);
   
   function loadCards() {
	   console.log(card.length);
	   card.each(function(index) {
		  
		   //$(this).text(picture[index]);
		   num++;
		   
	   });
   }
   
   function startGame() {
	  card.each(function (index) {
		 // $(this).attr('src', 'src=(images/' + picture[0] + '.jpg)');
		  $(this).prepend('<img id="ff" src="images/mono-1.jpg" />')
		  //$(this).css("visibility", "visible");
		  //console.log('url(images/' + picture[0] + '.jpg)');
		//  return true;
	  });
	   
	   //TODO: load each div with a raondom picture holder info
	   //TODO: set score to zero
   }
  
   
   card.click(function() {
		var selected = $(this);
	
	
		if(!firstSelection){
			selected.css("background-color", "red");
			firstSelection = true;
			
			
		}else {
			selected.css("visibility", "hidden");
			firstSelection = false;
			clearInterval(startTimer);
			
			}
	});
	
	
	startGame();
    loadCards();
   
	   
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
