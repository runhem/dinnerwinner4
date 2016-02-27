//DinnerView3 Object constructor
var DinnerView3 = function (container, model) {

	//Hitta rätt taggar
	this.dishDisplay = container.find("#dish-display");
	this.quantity = container.find("#quantity");
	this.recipeCost = container.find("#recipeCost");
	this.tableHeading = container.find("#tableHeading");
	this.preparation = container.find("#preparation-display")

	this.update = function(object){
	this.pending = object;
	console.log('3', object);

	this.dishDisplay.empty();
	this.tableHeading.empty();
	this.preparation.empty();
	try{
	this.guest = model.getNumberOfGuests();
	this.price = model.getTotalDishPrice(object.Ingredients);
	this.guest = model.getNumberOfGuests();

	this.dishDisplay.append("<div class="+'"'+"dishName"+'"'+">"+"<h3>"+object.Title+"</h3>"+"</div>"+
		"<img src="+'"'+object.ImageURL+'"'+"id="+'"'+"image"+'"'+">"
		+"<div class="+'"'+"description"+'"'+">"+"<p>"+object.Instructions+"</p>"+"</div>");
 
	this.tableHeading.append("<h2>"+"Recipe for "+"<span id="+'"'+"guests"+'"'+"></span>"+" people"+"</h2>");

	this.preparation.append("<div>"+object.Instructions+"</div>");


		this.guest = model.getNumberOfGuests();
		document.getElementById("guests").innerHTML = this.guest;
		this.quantity.empty();
		this.displayIn(object);
		this.recipeCost.html("<td>"+"SEK "+this.price+"</td>");
	}
	catch(err){
		console.log(object);
	}
	};

	this.displayIn = function(object){
		this.pending = object;
		for(x in object.Ingredients){
		this.quantity.append("<tr>")
		this.quantity.append("<td>"+object.Ingredients[x].Quantity*this.guest+"</td>");
		if(object.Ingredients[x].Unit == ''){
			this.quantity.append("<td>st</td>");
		}
		else{
		this.quantity.append("<td>"+object.Ingredients[x].Unit+"</td>");
		}
		this.quantity.append("<td>"+object.Ingredients[x].Name+"</td>");
		this.quantity.append("<td>"+"SEK "+1*this.guest+"</td>");
		this.quantity.append("</tr>");
		}
	};
	model.addObserver(this);
	this.update();

	//Skriver ut totalt pris på valda receptet

	//Skriver ut preparation-instructions

}
