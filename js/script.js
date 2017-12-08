let picture = [];
let previouslySelectedCard = false;
let moveCount = 0;
let score = 900;
let startingTime = 0;
let timeStop = false;
$( document ).ready(function() {
   let scoreDiv = $("#score");
   let gameBoard = $('.gameboard');
   let card = $(".card");
   let hasGameStarted = false;
   let timer = $("#timer");
   let time = 0;
   let winScreen = $(".win-Screen");
   let cards = [];
   let loadPage = $("#play-again");
   let restartGame = $("#restart");

    function loadCards() {
	    loadImages();
	    card.each(function(index) {
		  let id = $(this).attr('id');
		  let i = getRandomImage();
		  let photo = picture[i]
		   currentCard = new Card(photo, id);
		   cards.push(currentCard);
		   picture.splice(i, 1);
	   });
   }
   
    function getRandomImage() {
	  min = 0;
	  max = Math.floor(picture.length);
	  return Math.floor(Math.random() * (max - min)) + min; 
	}
   
    function updateScoreIcon() {
		 var finalScore = Math.round( Math.floor((score / 3 )) / 100);				
			
			if(finalScore > 3){ finalScore = 3} 
			
			$("#final-time").text(`Final Time: ${timer.text().replace("Time: ", "")}`);

			switch(finalScore){
				case 3:
					$(".r1").css("background-image" , "url(images/mono-coin.png)");
					$(".r2").css("background-image" , "url(images/mono-coin.png)");
					$(".r3").css("background-image" , "url(images/mono-coin.png)");
					break;
				case 2:
					$(".r1").css("background-image" , "url(images/mono-coin.png)");
					$(".r2").css("background-image" , "url(images/mono-coin.png)");
					$(".r3").css("background-image" , "url(images/mono-coinless.png)");
					break;
				default:
					$(".r2").css("background-image" , "url(images/mono-coinless.png)");			
					$(".r3").css("background-image" , "url(images/mono-coinless.png)");
			}
	}	
   
    function setBackCardImage() {
	  card.each(function (index) {
		  $(this).css("background-image" , "url(images/mono-hide.png)");
	  });
    }
  
	function getPictureId(elementId){
	   var match = undefined;
	   jQuery.each(cards, function (index) {
				if(cards[index].divId == elementId){
				 match = cards[index].picture;
				}
			});
	   return match;
    } 
   
    function setScore(points){
		updateScoreIcon();
		score += points;
		return score;	
    }

	function updateMovesCounter(){
		$("#move-counter").text(`Moves : ${moveCount}`);
	}
   
    function startTime(){
	   if (!startingTime){
			startingTime = Date.now();
		}
	   timer.text("Time: " +Math.floor((Date.now() - startingTime)/ 1000));
		//lowers score each second
		score <= 0 ? setScore(0) : setScore(-1);
		if(!isGameFinished() && !timeStop){
		   setTimeout(startTime, 1000);
	   }else{
		   startingTime = 0;
			
	   }
    }
   
	function buttonRestart() {
		startingTime = 0;
		timeStop = true;
		console.log("FinalScore before reset" + score);
		score = 900;
		moveCount = 0;
		hasGameStarted = false;
		updateScoreIcon();
		updateMovesCounter();
		cards = [];
		card.each(function (index) {
			$(this).css("visibility", "visible");
		});
		timer.text("Time: 0");
		setBackCardImage();
		loadCards();
	}
		

	loadPage.click(function (){
		buttonRestart();
		winScreen.css("display", "none");
		
	});

	restartGame.click(function (){
		buttonRestart();
	});


    card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let divCardClass = false;
		++moveCount;


		selectedCard.addClass("flip");
		setTimeout(function () {
			selectedCard.removeClass("flip");
		}, 200);

		updateMovesCounter();
		//checks if game has already starting
		if(!hasGameStarted){
			timeStop = false;			
			startTime();
			hasGameStarted = true;
		}
		 //Finds the matching class for the selected div
			 jQuery.each(cards, function (index) {
				if(cards[index].divId == cardId){
					divCardClass = cards[index];
				}
			});
		//Shows the Image of the Selected Div
			selectedCard.css("background-image" , "url(" + "images/" + divCardClass.picture + ".jpg" + ")");
		//Flow for the second picked card
		if(previouslySelectedCard){
				//Flow for Matching Cards
				if(getPictureId(cardId) == getPictureId(previouslySelectedCard)){
					//Creates a delay to show card before hiding them
					setTimeout(function() {  
						 $(`#${cardId}`).css("visibility", "hidden");
						 $("#" + previouslySelectedCard).css("visibility", "hidden");		
						 previouslySelectedCard = false;
						 if(isGameFinished() == true){			
								updateScoreIcon();
								winScreen.css("display", "block");
								$("#final-moves").text(`Total Moves:  ${moveCount}`)
								hasGameStarted = false;
							}
						}, 1000);
					return false;
				}else{
					 //Failed Match Ends in a point Pentalty and Re-hides card
					 setScore(-25);
				
					 setTimeout(function() {
						 $(`#${cardId}`).css("background-image" , "url(images/mono-hide.png)");
						
						 $("#" + previouslySelectedCard).css("background-image" , "url(images/mono-hide.png)");
						
							selectedCard.addClass("flip-back");
							
						setTimeout(function () {
							selectedCard.removeClass("flip-back");
							selectedCard.addClass("match");
						}, 200);


						 previouslySelectedCard = false;

					
						
						}, 1000);

						
				}
		}else {
				previouslySelectedCard = cardId;
	
		}
		
	});
	
	//startingTimes The Setup for the Game On Load Complete
	setBackCardImage();
    loadCards();
	
   });
   
	//A class for each Card Div that stores picture and div ID data
    class Card {
	   constructor(picture, divId){
		   this.picture = picture;
		   this.divId = divId;
	   }
    }
   
   //Checks if game has completed
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
	
	//Loads Images to be used as Card Matching Images
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
   


 
   