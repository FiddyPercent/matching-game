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
   let cards = [];
   
   function loadCards() {
	   console.log(card.length);
	   card.each(function(index) {
		  
		  let id = $(this).attr('id');
		  let photo = picture[getRandomImage()]
		   //$(this).text(picture[index]);
		   currentCard = new Card(photo, id);
		   cards.push(currentCard);
		   num++;
		   
	   });
	   
	   console.log(cards.length);
   }
   
   
   function getRandomImage() {
	  min = 0;
	  max = Math.floor(picture.length);
	  return Math.floor(Math.random() * (max - min)) + min; 
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
			
			let cardId = $(this).attr('id');
			let currentDiv = $(this);
			console.log(cards[2].picture);
			cards.map(function (index) {
				
				if(this.attr('id') == cardId){
					currentDiv.attr("src", "images/" + this.picture);
					alert("match!");
					
					return true;
				}else{
					console.log(currentDiv.attr('id') + " " + cardId);
				}
				
			});
			
			
			
			
		}else {
			selected.css("visibility", "hidden");
			firstSelection = false;
			clearInterval(startTimer);
			
			}
	});
	
	
	startGame();
    loadCards();
   
	   
   });
   
   class Card {
	   
	   constructor(picture, divId){
		   this.picture = picture;
		   this.divId = divId;
	   }
	   
   }
   
   
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
