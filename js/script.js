var picture = [];
let firstSelection = false;
$( document ).ready(function() {
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   var num = 0;
   
   let SecondSelection = false;
   let gameStart = false;
   let timer = $("#timer");
   let time = 0;
   let score = 0;
   let start = new Date;
   let startTimer = false;
   let cards = [];
   
   function loadCards() {
	   //console.log(card.length);
	    loadImages();
	   card.each(function(index) {
		  let id = $(this).attr('id');
		  let i = getRandomImage();
		  let photo = picture[i]
		   currentCard = new Card(photo, id);
		   cards.push(currentCard);
		   picture.splice(i, 1);
		   num++;
	   });
	  // console.log(cards.length);
   }
   
   
   function getRandomImage() {
	  min = 0;
	  max = Math.floor(picture.length);
	  return Math.floor(Math.random() * (max - min)) + min; 
	}
   
   
   
   
   function startGame() {
	  card.each(function (index) {
		  $(this).css("background-image" , "url(images/mono-hide.jpg)");
	  });

   }
  
      function getPictureId(elementId){
	   var match = undefined;
	   
	   jQuery.each(cards, function (index) {
				
				if(cards[index].divId == elementId){
				 match = cards[index].picture;
				 
				 console.log(match);
				}
			});
	   
	   return match;
   } 
   
   
   function startTime(){
	   startTimer = setInterval(function(){ timer.text("Time: " +Math.floor((new Date - start)/ 1000) )},1000);
	   console.log("start!");
	   
   }
   
   card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let divCardClass = false;
		
		
		//console.log(`cardID = ${cardId}\nfirstSelection = ${firstSelection};`);
		
		
		 //Finds the matching class for the selected div
			 jQuery.each(cards, function (index) {
				if(cards[index].divId == cardId){
					divCardClass = cards[index];
				}
			});
		//Shows the Image of the Selected Div
			selectedCard.css("background-image" , "url(" + "images/" + divCardClass.picture + ".jpg" + ")");
			
			
		//If this the second picked card
		if(firstSelection){

			//console.log(firstSelection + " Second Run ");
			//console.log(`cardID = ${cardId} == firstSelection = ${firstSelection}`);
			//jQuery.each(cards, function (index) {
				
				
				console.log(`cardId ${getPictureId(cardId)}\n firstSelection ${getPictureId(firstSelection)}`);
				if(getPictureId(cardId) == getPictureId(firstSelection)){
					//selectedCard.style.backgroundImage="url(" + "images/" + this.picture + ".jpg" + ")";
					console.log("url(" + "images/" + this.picture + ".jpg" + ")" ,  'background: #222; color: #bada55');
					//selectedCard.attr("src", "images/" + this.picture);
					//alert("match!");
					
					//$(divCardClass.divId).css("visibility", "hidden");
					setTimeout(function() {
						  
						 $(`#${cardId}`).css("visibility", "hidden");
						 $("#" + firstSelection).css("visibility", "hidden");		
						 
						 firstSelection = false;
						 
						 if(isGameFinished() == true){
								alert("You Win!");
								
								clearInterval(startTimer);
		
							}
							
						}, 1000);
				
					
					
					
					return false;
					
				}else{
					 //setTimeout(hideCard(cardId, firstSelection), 2000);
					 setTimeout(function() {
						  
						 $(`#${cardId}`).css("background-image" , "url(images/mono-hide.jpg)");
						 $("#" + firstSelection).css("background-image" , "url(images/mono-hide.jpg)");			
						 
						 firstSelection = false;
						}, 1000);
				}

			
			
			
			
		}else {
			
			//selected.css("visibility", "hidden");
			firstSelection = cardId;
			
			//console.log(firstSelection + " First Run ");
			
			
			}
			
			
			
			//console.log("####");
	});
	
	
	startGame();
	startTime();
    loadCards();
   
	   
   });
   
   class Card {
	   
	   constructor(picture, divId){
		   this.picture = picture;
		   this.divId = divId;
	   }
	   
   }
   
   
   function isGameFinished(){
	   var gameOver = true;
	   
	  var allCards =  $(".card");

		allCards.each( function(index) {
			
			if($(this).css("visibility") == "visible"){
				gameOver = false;
			}
			
		});
		
		
		
		
		return gameOver;
	   
   }
   
   
   function hideCard(cardId, firstSelection){
	   
   }
   
   function loadImages(){
	   console.log("!!!!!!!!!!!!!!!!!!!" + "Image Loaded");
	var pictureItems = 
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
   
   
   jQuery.each(pictureItems, function(index) {
	   picture.push(pictureItems[index]);
	   
	  // console.log(`picture push = ${pictureItems[index]}`);
   });
   
  // console.log(`picture length = ${picture.length}`);
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
