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


	var guests = "JA";

	selDish = 'French '

	this.selDish = model.getDish(1);
	this.namn = this.selDish.name;
	this.image = this.selDish.image;
	this.description = this.selDish.description;
	this.guest = model.getNumberOfGuests();
	this.price = model.getTotalDishPrice(1);


	this.guest = model.getNumberOfGuests();
	this.spansk = [];


	this.dishDisplay.append("<div class="+'"'+"dishName"+'"'+">"+"<h3>"+this.namn+"</h3>"+"</div>"+
		"<img src="+'"'+"images/"+this.image+'"'+"id="+'"'+"image"+'"'+">"
		+"<div class="+'"'+"description"+'"'+">"+"<p>"+this.description+"</p>"+"</div>");
 
	this.tableHeading.append("<h2>"+"Recipe for "+"<span id="+'"'+"guests"+'"'+"></span>"+" people"+"</h2>");


	this.displayIn = function(){
		for(x in this.selDish.ingredients){
		this.quantity.append("<tr>")
		this.quantity.append("<td>"+this.selDish.ingredients[x].quantity*this.guest+"</td>");
		if(this.selDish.ingredients[x].unit == ''){
			this.quantity.append("<td>st</td>");
		}
		else{
		this.quantity.append("<td>"+this.selDish.ingredients[x].unit+"</td>");
		}
		this.quantity.append("<td>"+this.selDish.ingredients[x].name+"</td>");
		this.quantity.append("<td>"+"SEK "+this.selDish.ingredients[x].price*this.guest+"</td>");
		this.quantity.append("</tr>");
		}
	};



	this.update = function(){
		this.guest = model.getNumberOfGuests();
		document.getElementById("guests").innerHTML = this.guest;
		this.quantity.empty();
		this.displayIn();
		this.recipeCost.html("<td>"+"SEK "+this.price+"</td>");
	};

	model.addObserver(this);
	this.update();


	//Skriver ut totalt pris på valda receptet

	//Skriver ut preparation-instructions
	this.preparation.append("<div>"+dishes[0].description+"</div>");
	
}
