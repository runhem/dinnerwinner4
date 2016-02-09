//DinnerView1 Object constructor
var MenuView = function (container, model) {
	
	this.numberOfGuests = container.find("#numbGuest");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#menu-dish");
	this.price = container.find("#dinnerCost");

	//För att kunna lägga till och ta bort i menyn
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");

	//data för att lägga till rätter i menyn samt antal personer
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.tillagd.html(model.addDishToMenu(1));
	this.tillagd.html(model.addDishToMenu(201));
	this.tillagd.html(model.addDishToMenu(100));

//SIDOMENY
	var dishes = model.getAllDishes('main dish');
	var guests = model.getNumberOfGuests();
	//räknar ut pris på ingredienser

	var fullMenu = model.getFullMenu();
	var allIngredList = model.getAllIngredients();
	var starterIngredList = model.getDishIngredients('starter');
	var mainIngredList = model.getDishIngredients('main dish');
	var dessertIngredList = model.getDishIngredients('dessert');

	if(fullMenu.starter.length !== 0){
	this.menuDish.append("<tr><td>"+fullMenu.starter.name+"</td><td>"+model.getTotalMenuPrice(starterIngredList)+" SEK</td></tr>");
	}
	if(fullMenu.main.length !== 0){
	this.menuDish.append("<tr><td>"+fullMenu.main.name+"</td><td>"+model.getTotalMenuPrice(mainIngredList)+" SEK</td></tr>");

	}
	if(fullMenu.dessert.length !== 0){
	this.menuDish.append("<tr><td>"+fullMenu.dessert.name+"</td><td>"+model.getTotalMenuPrice(dessertIngredList)+" SEK</td></tr>");
	}

	var pending = model.returnPending();

	if((fullMenu.starter.length == 0 || fullMenu.main.length == 0 || fullMenu.dessert.length == 0) && pending.length==0){
		this.menuDish.append("<tr><td>Pending</td><td>0 SEK</td></tr>");}

	if(pending.length !== 0){
	var pendingPrice = 0;
	for(x in dishes[0].ingredients){
		var pendingPrice = pendingPrice + dishes[0].ingredients[x].price;
	};
	//Skriver ut Pending-dish
	//Skriver även ut priset gånger antal personer
	this.menuDish.append("<tr><td>"+pending[0].name+" (pending)</td><td>"+pendingPrice*guests+" SEK</td></tr>");
	this.price.append("<tr><td>Total cost:</td><td>"+(model.getTotalMenuPrice(allIngredList)+pendingPrice*guests)+" SEK</td></tr>");
}
	else{
	this.price.append("<tr><td>Total cost:</td><td>"+model.getTotalMenuPrice(allIngredList)+" SEK</td></tr>");}
}





