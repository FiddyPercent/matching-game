var picture = [];

$( document ).ready(function() {
   var gameBoard = $('.gameboard');
   var header = $(".header");
   var card = $(".card");
   
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
	    loadImages();
	   card.each(function(index) {
		  
		  let id = $(this).attr('id');
		  let i = getRandomImage();
		  let photo = picture[i]
		   //$(this).text(picture[index]);
		   currentCard = new Card(photo, id);
		   cards.push(currentCard);
		   //console.log(`id = ${id} photo = ${photo} ${getRandomImage()} length = ${picture.length}`);
		  // console.log(`loops = : ${num} subtracted item ${picture[index]}`);
		   picture.splice(i, 1);
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
		
		  //$(this).prepend('<img id="ff" src="images/mono-1.jpg" />')
		  $(this).css("background-image" , "url(images/mono-hide.jpg)");
		  //$(this).css("visibility", "visible");
		  //console.log('url(images/' + picture[0] + '.jpg)');
		//  return true;
	  });
	   
	   //TODO: load each div with a raondom picture holder info
	   //TODO: set score to zero
   }
  
   
   card.click(function() {
		let selectedCard = $(this);
		let cardId = selectedCard.attr('id');
		let cardPicture = false;
		
		 //Finds the matching class for the selected div
			 jQuery.each(cards, function (index) {
				if(cards[index].divId == cardId){
					cardPicture = cards[index];
				}
				
				//console.log(`*=====================* ${cards[index].divId} matched against ${cardId} **`);
			});
			
			//console.log(`###### cardPicture = ${cardPicture}`);
			
			selectedCard.css("background-image" , "url(" + "images/" + cardPicture.picture + ".jpg" + ")");
			
			

		if(!firstSelection){
			//selectedCard.css("background-color", "red");
			//console.log("card id = " + cardId);
			//console.log(cards[2].picture);
			
			jQuery.each(cards, function (index) {
				console.log(index + "*******************");
				
				var c = cards[index];
				
				
				
				if(cardId == firstSelection){
					//selectedCard.style.backgroundImage="url(" + "images/" + this.picture + ".jpg" + ")";
					console.log("url(" + "images/" + this.picture + ".jpg" + ")" ,  'background: #222; color: #bada55');
					//selectedCard.attr("src", "images/" + this.picture);
					alert("match!");
					return true;
					
				}else{
					//console.log(selectedCard.attr('id') + " " + cardId);
					//console.log("cardid = " +  cardId + " first Selection = " + firstSelection);
				}
				
			});
			console.log("##################################")
			
			
			
		}else {
			selected.css("visibility", "hidden");
			firstSelection = cardId;
			clearInterval(startTimer);
			alert("first selection is true");
			
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
