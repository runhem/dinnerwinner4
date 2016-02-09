//DinnerView4 Object constructor
var DinnerView4 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	//containers för sidomenyn
	this.numberOfGuests = container.find("#numberOfGuests");
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");
	this.dishes = container.find("#dishes");
	this.totalPrice = container.find("#totalPrice");
	
	
	//data för att lägga till rätter samt antal personer
	this.numberOfGuests.html(model.getNumberOfGuests()+" personer");
	this.tillagd.html(model.addDishToMenu(1));
	this.tillagd.html(model.addDishToMenu(201));
	this.tillagd.html(model.addDishToMenu(100));


//CONTENT
	var menu = model.getFullMenu();

	//Skriver ut Starter från menyn
		var starterPrice = 0;
		for(z in menu.starter.ingredients){
			var starterPrice = starterPrice + menu.starter.ingredients[z].price;
		};
		this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Starter</h4>"+
			"<img src="+'"'+"images/"+menu.starter.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+menu.starter.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+starterPrice*model.getNumberOfGuests()+" SEK"+"</p>"+"</div>"
			+"</div>");

	//Skriver ut Main Dish från menyn
		var mainPrice = 0;
		for(ingr in menu.main.ingredients){
			var mainPrice = mainPrice + menu.main.ingredients[ingr].price;
		};

		this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Main</h4>"+
			"<img src="+'"'+"images/"+menu.main.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+menu.main.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+mainPrice*model.getNumberOfGuests()+" SEK"+"</p>"+"</div>"
			+"</div>");

	//Skriver ut Dessert från menyn
		var dessertPrice = 0;
		for(ingre in menu.dessert.ingredients){
			var dessertPrice = dessertPrice + menu.dessert.ingredients[ingre].price;
		};

		this.dishes.append(
			"<div class="+'"'+"dish"+" "+"col-md-4"+'"'+">"+
			"<h4>Dessert</h4>"+
			"<img src="+'"'+"images/"+menu.dessert.image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+menu.dessert.name+"</h5>"
			+"<div class="+'"'+"price"+'"'+">"+"<p>"+dessertPrice*model.getNumberOfGuests()+" SEK"+"</p>"+"</div>"
			+"</div>");

	//Skriver ut totalt pris på alla rätter på menyn
	var allIngredients = model.getAllIngredients();
	this.totalPrice.append("Totalt pris:"+"\n"+model.getTotalMenuPrice(allIngredients)+" SEK");


}
 
