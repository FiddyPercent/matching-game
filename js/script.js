let picture = [];
let previouslySelectedCard = false;
let moveCount = 0;
let score = 900;
let startingTime = 0;

$( document ).ready(function() {
   let scoreDiv = $("#score");
   let gameBoard = $('.gameboard');
   let card = $(".card");
   let gamestartingTime = false;
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
			console.log(`final score after check ${finalScore}`);
			$("#final-time").text(`Final Time: ${timer.text().replace("Time: ", "")}`);

			switch(finalScore){
				case 3:
					$(".r3").css("visibility", "visable");
					break;
				case 2:
					$(".r2").css("visibility", "visable");
					$(".r1").css("visibility", "visable");		
					$(".r3").css("visibility", "hidden");
					break;
				default:
					$(".r1").css("visibility", "visable");
					$(".r2").css("visibility", "hidden");			
					$(".r3").css("visibility", "hidden");
			}
	}	
   
   
    function startingTimeGame() {
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
		updateScoreIcon();
		score += points;
		return score;	
   }

	function updateMovesCounter(){
		$("#move-counter").text(`Moves: ${moveCount}`);
	}
   
    function startingTimeTime(){
	   if (!startingTime){
			startingTime = Date.now();
		}
	   timer.text("Time: " +Math.floor((Date.now() - startingTime)/ 1000));
	   score <= 0 ? setScore(0) : setScore(-1);
		if(!isGameFinished()){
		   setTimeout(startingTimeTime, 1000);
	   }else{
		   startingTime = 0;
	   }
    }
   

	loadPage.click(function (){
		location.reload();
	});

	restartGame.click(function (){
		location.reload();
	});


    card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let divCardClass = false;
		++moveCount;
		updateMovesCounter();
		
		//checks if game has already startingTimeed
		if(!gamestartingTime){
			startingTimeTime();
			gamestartingTime = true;
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
								gamestartingTime = false;
							}
						}, 1000);
					return false;
				}else{
					 //Failed Match Ends in a point Pentalty and Re-hides card
					 setScore(-25);
					 setTimeout(function() {
						 $(`#${cardId}`).css("background-image" , "url(images/mono-hide.jpg)");
						 $("#" + previouslySelectedCard).css("background-image" , "url(images/mono-hide.jpg)");
						 previouslySelectedCard = false;
						}, 1000);
				}
		}else {
				previouslySelectedCard = cardId;
		}
	});
	
	//startingTimes The Setup for the Game On Load Complete
	startingTimeGame();
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
   


 
   