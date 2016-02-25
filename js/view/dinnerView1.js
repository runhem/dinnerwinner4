//DinnerView1 Object constructor
var DinnerView1 = function (container, model) {

	this.container = container;

	model.removeFromPending();

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//containers för main content 
	this.dishes = container.find("#dishes");

//CONTENT. Hämtar alla rätter. Skapar divar som visar innehållet, sätter style till display:block så att alla visas som default
	this.getAllDishes = model.getAllDishes();

	this.inputValue = container.find(".form-control");


	//Metod displayDishes som visar rätter beroende på vilken typ
	this.displayDishes = function(dishType){
		if (!(dishType)){
		var result = model.getAllDishes('all');
		console.log("not dishtype")}

		if(dishType){
		var result = model.getAllDishes(dishType);
		console.log("dishtype")
		}
	};

	//Metod som söker bland rätter och sedan visar de rätter som hittats och gömmer de andra
	this.searchDishes = function(filter){
	var storeDishes = [];

	for(var i=0, x=document.getElementsByClassName("dish").length;i<x;i++){
		document.getElementsByClassName("dish")[i].style.display = 'none';}	

	var result = model.getAllDishes(filter);
	};

	this.update = function(){
		this.allDishes = model.allDishes.Results;

		this.dishes.empty();


		for(var x=0, y=this.allDishes.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish "+this.allDishes[x].Category+'"'+"id="+'"'+this.allDishes[x].RecipeID+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+this.allDishes[x].ImageURL+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.allDishes[x].Title+"</h5>"
			//+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starter[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
			};
	};

	model.addObserver(this);

};