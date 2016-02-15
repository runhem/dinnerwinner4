//DinnerView5 Object constructor
var DinnerView5 = function (container, model) {
	

	//containers för sidomenyn
	this.dishsummary = container.find("#dish-summary-display");
	this.totalPrice = container.find("#totalPrice");
	
	this.update = function(){
	var menu = model.getFullMenu();

	this.dishsummary.empty();

	this.dishsummary.append(
		"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.starter.image+'"'+">"
		+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.starter.name+"</h2>"+"<p>"+
		menu.starter.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
		"<h2>Preparation</h2>"+"<p>"+menu.starter.description+"</p></div></div>");

	this.dishsummary.append(
		"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.main.image+'"'+">"
		+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.main.name+"</h2>"+"<p>"+
		menu.main.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+			
		"<h2>Preparation</h2>"+"<p>"+menu.main.description+"</p></div></div>");

	this.dishsummary.append(
		"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.dessert.image+'"'+">"
		+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.dessert.name+"</h2>"+"<p>"+
		menu.dessert.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
		"<h2>Preparation</h2>"+"<p>"+menu.dessert.description+"</p></div></div>");

	//Skriver ut totalt pris på alla rätter på menyn
	var allIngredients = model.getAllIngredients();
	this.totalPrice.append("Totalt pris:"+"\n"+model.getTotalMenuPrice(allIngredients)+" SEK");
	};

	model.addObserver(this);
	this.update();


}
 
