//DinnerView1 Object constructor
var MenuView = function (container, model) {

	this.container = container;
	
	this.numberOfGuests = container.find("#numbGuest");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#menu-dish");
	this.price = container.find("#dinnerCost");

	//För att kunna lägga till och ta bort i menyn
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");

	//data för att lägga till rätter i menyn samt antal personer
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


	this.update = function(){

	this.numberOfGuests.html(model.getNumberOfGuests());


	if(fullMenu.starter.length == 0){
		document.getElementById("starterTr").style.display = 'none';
	}
	else{
	this.starterName.html(fullMenu.starter.name);
	this.starterPrice.html(model.getTotalMenuPrice(starterIngredList));
	};

	if(fullMenu.main.length == 0){
		document.getElementById("mainTr").style.display = 'none';
	}
	else{
	this.mainName.html(fullMenu.main.name);
	this.mainPrice.html(model.getTotalMenuPrice(mainIngredList));
	};

	if(fullMenu.dessert.length == 0){
		document.getElementById("dessertTr").style.display = 'none';
	}
	else{
	this.dessertName.html(fullMenu.dessert.name);
	this.dessertPrice.html(model.getTotalMenuPrice(dessertIngredList));
	};

};


	if(fullMenu.starter.length !== 0){
	this.menuDish.append("<tr id="+'"'+"starterTr"+'"'+"><td id="+'"'+"starterName"+'"'+"></td><td id="+'"'+"starterPrice"+'"'+"> SEK</td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeStarter"+'"'+">X</button></td></tr>");
	}
	if(fullMenu.main.length !== 0){
	this.menuDish.append("<tr id="+'"'+"mainTr"+'"'+"><td id="+'"'+"mainName"+'"'+"></td><td id="+'"'+"mainPrice"+'"'+"> SEK</td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeMain"+'"'+">X</button></td></tr>");
	}
	if(fullMenu.dessert.length !== 0){
	this.menuDish.append("<tr id="+'"'+"dessertTr"+'"'+"><td id="+'"'+"dessertName"+'"'+"></td><td id="+'"'+"dessertPrice"+'"'+"> SEK</td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeDessert"+'"'+">X</button></td></tr>");
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
	this.price.append("<tr><td>Total cost:</td><td>"+model.getTotalMenuPrice(allIngredList)+" SEK</td></tr>");
}

	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");

	this.mainName = container.find("#mainName");
	this.mainPrice = container.find("#mainPrice");

	this.dessertName = container.find("#dessertName");
	this.dessertPrice = container.find("#dessertPrice");

	


	model.addObserver(this);
	this.update();


};