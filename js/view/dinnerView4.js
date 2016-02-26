//DinnerView4 Object constructor
var DinnerView4 = function (container, model) {


	this.dishes = container.find("#dishes4");
	this.totalPrice = container.find("#totalPrice");

	//Skriver ut totalt pris på alla rätter på menyn

	this.update = function(){
	var menu = model.getFullMenu();

	this.dishes.empty();

	for(i in menu){
	this.dishes.append(
			"<div class="+'"'+"confirmed-dish"+" "+"col-md-4"+'"'+">"+
			"<h4>"+menu[i].Category+"</h4>"+
			"<img src="+'"'+menu[i].ImageURL+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+menu[i].Title+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+model.getTotalDishPrice(menu[i].Ingredients)+" SEK"+"</p>"+"</div>"
			+"</div>");
	}

	this.totalPrice.html("Totalt pris:"+"\n"+model.getTotalMenuPrice(model.getAllIngredients())+" SEK");
	};

	model.addObserver(this);
	this.update();

}
 
