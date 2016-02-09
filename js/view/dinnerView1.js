//ExampleView Object constructor
var DinnerView1 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	//containers för sidomenyn
	this.numberOfGuests = container.find("#numbGuest");
	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#menu-dish");
	this.menuDishCost = container.find("#menu-dish-cost");
	this.price = container.find("#dinnerCost");

	//För att kunna lägga till och ta bort i menyn
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");

	//containers för main content 
	this.row = container.find("#dish-bar");
	this.dishes = container.find("#dishes");
	

	//data för att lägga till rätter i menyn samt antal personer
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.tillagd.html(model.addDishToMenu(1));
	this.tillagd.html(model.addDishToMenu(201));
	this.tillagd.html(model.addDishToMenu(100));
	this.borttagen.html(model.removeDishFromMenu(100));

//SIDOMENY
	var fullMenu = model.getFullMenu();
	var allIngredList = model.getAllIngredients();
	var starterIngredList = model.getDishIngredients('starter');
	var mainIngredList = model.getDishIngredients('main dish');
	var dessertIngredList = model.getDishIngredients('dessert');

	if(fullMenu.starter.length !== 0){
	this.menuDish.append("<div>"+fullMenu.starter.name+"</div>");
	this.menuDishCost.append("<div>"+model.getTotalMenuPrice(starterIngredList)+" SEK"+"</div>");
	}
	if(fullMenu.main.length !== 0){
	this.menuDish.append("<div>"+fullMenu.main.name+"</div>");
	this.menuDishCost.append("<div>"+model.getTotalMenuPrice(mainIngredList)+" SEK"+"</div>");
	}
	if(fullMenu.dessert.length !== 0){
	this.menuDish.append("<div>"+fullMenu.dessert.name+"</div>");
	this.menuDishCost.append("<div>"+model.getTotalMenuPrice(dessertIngredList)+" SEK"+"</div>");
	}

	this.price.html(model.getTotalMenuPrice(allIngredList));

//CONTENT. Vi väljer att bara visa alla desserter 
	var dishes = model.getAllDishes('dessert');
	console.log(dishes);
	for(var x=0,y=dishes.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish"+'"'+">"+
			"<img src="+'"'+"images/"+dishes[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+dishes[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+dishes[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

}
 
