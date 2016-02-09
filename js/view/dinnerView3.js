//DinnerView3 Object constructor
var DinnerView3 = function (container, model) {

	//Hitta rätt taggar
	this.numberOfGuests = container.find("#numbGuest");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#menu-dish");
	this.menuDishCost = container.find("#menu-dish-cost");
	this.dinnerCost = container.find("#dinnerCost");
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");
	this.dishDisplay = container.find("#dish-display");
	this.ingredientsDisplay = container.find("#ingridient-display");
	this.quantity = container.find("#quantity");
	this.unit = container.find("#unit");
	this.ingredients = container.find("#ingredients");
	this.price = container.find("#price");
	this.recipeCost = container.find("#recipeCost");
	this.tableHeading = container.find("#tableHeading");
	this.preparation = container.find("#preparation-display");

	//Visa antal gäster, fylla menyn med rätter och ta bort en rätt
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.tillagd.html(model.addDishToMenu(1));
	this.tillagd.html(model.addDishToMenu(201));
	this.tillagd.html(model.addDishToMenu(100));
	this.borttagen.html(model.removeDishFromMenu(100));

	//SIDOMENY
	//variabeldeklaration
	var guests = model.getNumberOfGuests();
	var dishes = model.getAllDishes('main dish');
	var fullMenu = model.getFullMenu();
	var allIngredList = model.getAllIngredients();
	var starterIngredList = model.getDishIngredients('starter');
	var mainIngredList = model.getDishIngredients('main dish');
	var dessertIngredList = model.getDishIngredients('dessert');


	//skriver ut rätter i sidomenyn. Starter, main dish och dessert var för sig
	if(fullMenu.starter.length !== 0){
	this.menuDish.append("<div>"+fullMenu.starter.name+"</div>");
	this.menuDishCost.append("<div>"+"SEK"+model.getTotalMenuPrice(starterIngredList)+"</div>");
	}
	if(fullMenu.main.length !== 0){
	this.menuDish.append("<div>"+fullMenu.main.name+"</div>");
	this.menuDishCost.append("<div>"+"SEK"+model.getTotalMenuPrice(mainIngredList)+"</div>");
	}
	if(fullMenu.dessert.length !== 0){
	this.menuDish.append("<div>"+fullMenu.dessert.name+"</div>");
	this.menuDishCost.append("<div>"+"SEK"+model.getTotalMenuPrice(dessertIngredList)+"</div>");
	}

	//räknar ut pris på ingredienser
	var pris = 0;
	for(x in dishes[0].ingredients){
		var pris = pris + dishes[0].ingredients[x].price;
	};

	//Skriver ut Pending-dish
	//Skriver även ut priset gånger antal personer
	this.menuDish.append("<div>"+dishes[0].name+" (pending)"+"</div>");
	this.menuDishCost.append("<div>"+"SEK"+pris*guests+"</div>");

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
		this.unit.append("<div>"+dishes[0].ingredients[x].unit+"</div>");
		this.ingredients.append("<div>"+dishes[0].ingredients[x].name+"</div>");
		this.price.append("<div>"+"SEK "+dishes[0].ingredients[x].price*guests+"</div>");
	};

	//Skriver ut totalt pris på valda receptet
	this.recipeCost.html("<div>"+"SEK "+pris*guests+"</div>");

	//Skriver ut preparation-instructions
	this.preparation.append("<div>"+dishes[0].description+"</div>");

	//Skriver ut totalt pris i sidomenyn
	this.dinnerCost.html(pris*guests+model.getTotalMenuPrice(allIngredList));
	
}
