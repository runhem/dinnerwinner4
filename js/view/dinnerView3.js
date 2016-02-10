//DinnerView3 Object constructor
var DinnerView3 = function (container, model) {

	//Hitta rätt taggar
	this.dishDisplay = container.find("#dish-display");
	this.ingredientsDisplay = container.find("#ingridient-display");
	this.quantity = container.find("#quantity");
	this.unit = container.find("#unit");
	this.ingredients = container.find("#ingredients");
	this.price = container.find("#price");
	this.recipeCost = container.find("#recipeCost");
	this.tableHeading = container.find("#tableHeading");
	this.preparation = container.find("#preparation-display");

	//räknar ut pris på ingredienser
	var dishes = model.getAllDishes('main dish');
	var pris = 0;
	for(x in dishes[0].ingredients){
		var pris = pris + dishes[0].ingredients[x].price;
	};

	model.addToPending(dishes[0].id);

	//CONTENT
	//Visar det valda receptet
	this.dishDisplay.append("<div class="+'"'+"dishName"+'"'+">"+"<h3>"+dishes[0].name+"</h3>"+"</div>"+
		"<img src="+'"'+"images/"+dishes[0].image+'"'+"id="+'"'+"image"+'"'+">"
		+"<div class="+'"'+"description"+'"'+">"+"<p>"+dishes[0].description+"</p>"+"</div>");
 
	//Skriver ut receptet, men pris och kvantitet m.m.
	//SAKNAR- om quantity = ' ', skriv ut också
	var guests = model.getNumberOfGuests();
	this.tableHeading.append("<h2>"+"Recipe for "+guests+" people"+"</h2>");
	for(x in dishes[0].ingredients){
	
		this.quantity.append("<div>"+dishes[0].ingredients[x].quantity*guests+"</div>");
		if(dishes[0].ingredients[x].unit == ''){
			this.unit.append("<div>"+'st'+"</div>");
		}
		else{
		this.unit.append("<div>"+dishes[0].ingredients[x].unit+"</div>");
	}
		this.ingredients.append("<div>"+dishes[0].ingredients[x].name+"</div>");
		this.price.append("<div>"+"SEK "+dishes[0].ingredients[x].price*guests+"</div>");
	};

	//Skriver ut totalt pris på valda receptet
	this.recipeCost.html("<div>"+"SEK "+pris*guests+"</div>");

	//Skriver ut preparation-instructions
	this.preparation.append("<div>"+dishes[0].description+"</div>");

	//Skriver ut totalt pris i sidomenyn

	
}
