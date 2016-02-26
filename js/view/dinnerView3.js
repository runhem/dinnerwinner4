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
//	var pending = model.returnPending();
//	console.log(pending);

//	this.selDishis = pending.id; //hämta värde


	this.update = function(object){
	this.pending = model.returnPending();
	this.dishDisplay.empty();
	this.tableHeading.empty();
	this.preparation.empty();

	if(this.pending.length !== 0){
	this.guest = model.getNumberOfGuests();
	this.price = model.getTotalDishPrice(this.pending[0].Ingredients);
	this.guest = model.getNumberOfGuests();

	this.dishDisplay.append("<div class="+'"'+"dishName"+'"'+">"+"<h3>"+this.pending[0].Title+"</h3>"+"</div>"+
		"<img src="+'"'+this.pending[0].ImageURL+'"'+"id="+'"'+"image"+'"'+">"
		+"<div class="+'"'+"description"+'"'+">"+"<p>"+this.pending[0].Instructions+"</p>"+"</div>");
 
	this.tableHeading.append("<h2>"+"Recipe for "+"<span id="+'"'+"guests"+'"'+"></span>"+" people"+"</h2>");

	this.preparation.append("<div>"+this.pending[0].Instructions+"</div>");


		this.guest = model.getNumberOfGuests();
		document.getElementById("guests").innerHTML = this.guest;
		this.quantity.empty();
		this.displayIn();
		this.recipeCost.html("<td>"+"SEK "+this.price+"</td>");
	}
	};

	this.displayIn = function(){
		console.log("HEJ");
		console.log('pending display',this.pending);
		for(x in this.pending[0].Ingredients){
		this.quantity.append("<tr>")
		this.quantity.append("<td>"+this.pending[0].Ingredients[x].Quantity*this.guest+"</td>");
		if(this.pending[0].Ingredients[x].Unit == ''){
			this.quantity.append("<td>st</td>");
		}
		else{
		this.quantity.append("<td>"+this.pending[0].Ingredients[x].Unit+"</td>");
		}
		this.quantity.append("<td>"+this.pending[0].Ingredients[x].Name+"</td>");
		this.quantity.append("<td>"+"SEK "+1*this.guest+"</td>");
		this.quantity.append("</tr>");
		}
	};
	model.addObserver(this);
	this.update();

	//Skriver ut totalt pris på valda receptet

	//Skriver ut preparation-instructions

}
