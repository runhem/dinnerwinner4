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

	var guests = "JA";

	this.name = null;
	this.image = null;
	this.description = null;
	this.selDish = null;

	this.showDish = function (name) {
		this.selDish = model.getDish(name);
		console.log("sel", this.selDish);
		this.namn = this.selDish.name;
		this.image = this.selDish.image;
		this.description = this.selDish.description;
	}

	this.guest = model.getNumberOfGuests();


	this.dishDisplay.append("<div class="+'"'+"dishName"+'"'+">"+"<h3>"+this.namn+"</h3>"+"</div>"+
		"<img src="+'"'+"images/"+this.image+'"'+"id="+'"'+"image"+'"'+">"
		+"<div class="+'"'+"description"+'"'+">"+"<p>"+this.description+"</p>"+"</div>");
 
	this.tableHeading.append("<h2>"+"Recipe for "+"<span id="+'"'+"guests"+'"'+"></span>"+" people"+"</h2>");

	this.recipeCost.html("<div>"+"SEK "+pris*this.guest+"</div>");

	this.update = function(){
		this.guest = model.getNumberOfGuests();
		console.log(document.getElementById("guests"));
		document.getElementById("guests").innerHTML = this.guest;
		console.log("Gu");
	};

	this.showDish('French toast');
	model.addObserver(this);
	this.update();

	for(x in this.selDish.ingredients){
	
		this.quantity.append("<div>"+this.selDish.ingredients[x].quantity*this.guest+"</div>");
		if(this.selDish.ingredients[x].unit == ''){
			this.unit.append("<div>"+'st'+"</div>");
		}
		else{
		this.unit.append("<div>"+this.selDish.ingredients[x].unit+"</div>");
	}
		this.ingredients.append("<div>"+this.selDish.ingredients[x].name+"</div>");
		this.price.append("<div>"+"SEK "+this.selDish.ingredients[x].price*this.guest+"</div>");
	};

	//Skriver ut totalt pris på valda receptet

	//Skriver ut preparation-instructions
	this.preparation.append("<div>"+dishes[0].description+"</div>");
	
}
