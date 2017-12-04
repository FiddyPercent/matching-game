let picture = [];
let firstSelection = false;
let moveCount = 0;
let score = 900;
let start = 0;

$( document ).ready(function() {
   let scoreDiv = $("#score");
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   var num = 0;
   let SecondSelection = false;
   let gameStart = false;
   let timer = $("#timer");
   let time = 0;
   let winScreen = $(".modal");
   let cards = [];
   let loadPage = $("#play-again");
   let restart = $("#restart");


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
   
   function updateScoreIcon() {
		 var finalScore = Math.round( Math.floor((score / 3 )) / 100);
								//console.log(`You win! your score is ${finalScore}`);

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
		updateScoreIcon();
		score += points;
		return score;	
   }

	function updateMovesCounter(){
		$("#move-counter").text(`Moves: ${moveCount}`);
	}
   
   function startTime(){
	   if (!start){
			start = Date.now();
		}
	  // startTimer = setInterval(function(){ ) )},1000);
	   console.log("starting time");
	   timer.text("Time: " +Math.floor((Date.now() - start)/ 1000));
	   score <= 0 ? setScore(0) : setScore(-1);
	   if(!isGameFinished()){
	   console.log("tick");
	   setTimeout(startTime, 1000);
	   
	   }else{
			start = 0;
		}
   }
   

	loadPage.click(function (){
		location.reload();
	});

	restart.click(function (){
		location.reload();
	});


   card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let divCardClass = false;
		++moveCount;
		updateMovesCounter();
		console.log(`Move Count = ${moveCount}`);
		if(!gameStart){
			startTime();
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
					
					setTimeout(function() {  
						 $(`#${cardId}`).css("visibility", "hidden");
						 $("#" + firstSelection).css("visibility", "hidden");		
						 firstSelection = false;
						 if(isGameFinished() == true){			
								updateScoreIcon();
								winScreen.css("display", "block");
								gameStart = false;
							}
							
						}, 1000);
					return false;
				}else{
					 //setTimeout(hideCard(cardId, firstSelection), 2000);
					 setScore(-25);
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
   


 
   