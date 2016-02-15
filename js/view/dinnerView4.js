//DinnerView4 Object constructor
var DinnerView4 = function (container, model) {


	this.dishes = container.find("#dishes4");
	this.totalPrice = container.find("#totalPrice");

	//Skriver ut totalt pris på alla rätter på menyn

	this.update = function(){
	var menu = model.getFullMenu();
	this.starter = menu.starter;
	this.main = menu.main;
	this.dessert = menu.dessert

	this.dishes.empty();

	this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Starter</h4>"+
			"<img src="+'"'+"images/"+this.starter.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.starter.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+model.getTotalDishPrice(this.starter.id)+" SEK"+"</p>"+"</div>"
			+"</div>");

	this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Main</h4>"+
			"<img src="+'"'+"images/"+this.main.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.main.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+model.getTotalDishPrice(this.main.id)+" SEK"+"</p>"+"</div>"
			+"</div>");


	this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Dessert</h4>"+
			"<img src="+'"'+"images/"+this.dessert.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.dessert.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+model.getTotalDishPrice(this.dessert.id)+" SEK"+"</p>"+"</div>"
			+"</div>");

	this.totalPrice.html("Totalt pris:"+"\n"+model.getTotalMenuPrice(model.getAllIngredients())+" SEK");


	};

	model.addObserver(this);
	this.update();

}
 
