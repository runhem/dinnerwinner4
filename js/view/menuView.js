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

	this.pending = model.returnPending();
//	this.pending = (model.addToPending(2));


//SIDOMENY
	var dishes = model.getAllDishes('main dish');
	var guests = model.getNumberOfGuests();
	//räknar ut pris på ingredienser

	var fullMenu = model.getFullMenu();
	var allIngredList = model.getAllIngredients();
	var starterIngredList = model.getDishIngredients('starter');
	var mainIngredList = model.getDishIngredients('main dish');
	var dessertIngredList = model.getDishIngredients('dessert');
	var pendingIngredList = model.getDishIngredients('pending');

	this.update = function(){

	this.numberOfGuests.html(model.getNumberOfGuests());


	if(fullMenu.starter.length == 0){
		document.getElementById("starterTr").style.display = 'none';
	}
	else{
	this.starterName.html(fullMenu.starter.name);
	this.starterPrice.html(model.getTotalMenuPrice(starterIngredList)+" SEK");
	};

	if(fullMenu.main.length == 0){
		document.getElementById("mainTr").style.display = 'none';
	}
	else{
	this.mainName.html(fullMenu.main.name);
	this.mainPrice.html(model.getTotalMenuPrice(mainIngredList)+" SEK");
	};

	if(fullMenu.dessert.length == 0){
		document.getElementById("dessertTr").style.display = 'none';
	}
	else{
	this.dessertName.html(fullMenu.dessert.name);
	this.dessertPrice.html(model.getTotalMenuPrice(dessertIngredList)+" SEK");
	};

	if(this.pending.length !== 0){
		this.pendingName.html(this.pending[0].name+" (pending)");
		this.pendingPrice.html(model.getPendingPrice()+" SEK");
	}
	else{
		this.pendingName.html("Pending");
		this.pendingPrice.html("0.00");
	};

	console.log(this.pending);
	allIngredList = model.getAllIngredients();
 	this.totalCost.html(model.getTotalMenuPrice(allIngredList)+" SEK");
};


	if(fullMenu.starter.length !== 0){
	this.menuDish.append("<tr id="+'"'+"starterTr"+'"'+"><td id="+'"'+"starterName"+'"'+"></td><td id="+'"'+"starterPrice"+'"'+"></td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeStarter"+'"'+">X</button></td></tr>");
	}
	if(fullMenu.main.length !== 0){
	this.menuDish.append("<tr id="+'"'+"mainTr"+'"'+"><td id="+'"'+"mainName"+'"'+"></td><td id="+'"'+"mainPrice"+'"'+"></td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeMain"+'"'+">X</button></td></tr>");
	}
	if(fullMenu.dessert.length !== 0){
	this.menuDish.append("<tr id="+'"'+"dessertTr"+'"'+"><td id="+'"'+"dessertName"+'"'+"></td><td id="+'"'+"dessertPrice"+'"'+"></td>"+
		"<td><button class="+'"'+"btn removebtn"+'"'+"id="+'"'+"removeDessert"+'"'+">X</button></td></tr>");
	}


	this.menuDish.append("<tr id="+'"'+"pendingRow"+'"'+"><td id="+'"'+"pendingName"+'"'+"></td><td id="+'"'+"pendingPrice"+'"'+"></td>")


//	if((fullMenu.starter.length == 0 || fullMenu.main.length == 0 || fullMenu.dessert.length == 0) && pending.length==0){
//		this.menuDish.append("<tr id="+'"'+"Pending"+"><td>Pending</td><td>0 SEK</td></tr>");}


	this.price.append("<tr><td>Total cost:</td><td id="+'"'+"totalCost"+'"'+"></td></tr><td></td>");


	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");

	this.mainName = container.find("#mainName");
	this.mainPrice = container.find("#mainPrice");

	this.dessertName = container.find("#dessertName");
	this.dessertPrice = container.find("#dessertPrice");

	this.pendingName = container.find("#pendingName");
	this.pendingPrice = container.find("#pendingPrice")

	this.totalCost = container.find("#totalCost")

	model.addObserver(this);
	this.update();

};