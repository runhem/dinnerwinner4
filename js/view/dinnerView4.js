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

	var sprice = model.getTotalDishPrice(this.starter.id)
	if(!(sprice)){ sprice = 0}
	this.dishes.append(
			"<div class="+'"'+"confirmed-dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Starter</h4>"+
			"<img src="+'"'+"images/"+this.starter.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.starter.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+sprice+" SEK"+"</p>"+"</div>"
			+"</div>");

	var mprice = model.getTotalDishPrice(this.main.id)
	if(!(mprice)){ mprice = 0}
	this.dishes.append(
			"<div class="+'"'+"confirmed-dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Main</h4>"+
			"<img src="+'"'+"images/"+this.main.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.main.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+mprice+" SEK"+"</p>"+"</div>"
			+"</div>");


	var dprice = model.getTotalDishPrice(this.dessert.id)
	if(!(dprice)){ dprice = 0}
	this.dishes.append(
			"<div class="+'"'+"confirmed-dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Dessert</h4>"+
			"<img src="+'"'+"images/"+this.dessert.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.dessert.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+dprice+" SEK"+"</p>"+"</div>"
			+"</div>");

	this.totalPrice.html("Totalt pris:"+"\n"+model.getTotalMenuPrice(model.getAllIngredients())+" SEK");


	};

	model.addObserver(this);
	this.update();

}
 
