let picture = [];
let firstSelection = false;

$( document ).ready(function() {
   let score = $("#score");
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   var num = 0;
   let SecondSelection = false;
   let gameStart = false;
   let timer = $("#timer");
   let time = 0;
  
   let start = new Date;
   let cards = [];
   
   function loadCards() {
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
   
   
     function setScore(points){
	   score.css("background-color", "yellow");
	   console.log(`score text = ${score.text()}`);
	 
	 score.text(`Score: ${Number(getScore()) + points}`);
	   
   }
   
   function getScore(){
	   var currentScore = score.text().replace("Score: ", "" );
	   return currentScore;
   }
   
   function startTime(){
	  // startTimer = setInterval(function(){ ) )},1000);
	   //console.log("start!");
	   timer.text("Time: " +Math.floor((new Date - start)/ 1000));
	   getScore() <= 0 ? setScore(0) : setScore(-1);
	   if(!isGameFinished()){
	   setTimeout(startTime, 1000);
	   
	   }
   }
   
   card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let divCardClass = false;
		
		if(!gameStart){
			startTime()
			gameStart = true;
		}
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
	
				if(getPictureId(cardId) == getPictureId(firstSelection)){
					
					setScore(100);
					
					setTimeout(function() {  
						 $(`#${cardId}`).css("visibility", "hidden");
						 $("#" + firstSelection).css("visibility", "hidden");		
						 firstSelection = false;
						 if(isGameFinished() == true){
								
						 var finalScore = Math.round( Math.floor((getScore() / 2 ) /100) );
								alert(`You win! your score is ${finalScore}`);
								
								
								gameStart = false;
							}
							
						}, 1000);
					return false;
				}else{
					 //setTimeout(hideCard(cardId, firstSelection), 2000);
					 setScore(-15);
					 setTimeout(function() {
						 $(`#${cardId}`).css("background-image" , "url(images/mono-hide.jpg)");
						 $("#" + firstSelection).css("background-image" , "url(images/mono-hide.jpg)");			
						 
						 firstSelection = false;
						}, 1000);
				}

			}else {
				firstSelection = cardId;
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

   function loadImages(){
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
   });
  }
   

 
   