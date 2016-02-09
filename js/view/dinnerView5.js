//DinnerView5 Object constructor
var DinnerView5 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	//containers för sidomenyn
	this.numberOfGuests = container.find("#numberOfGuests");
	this.tillagd = container.find("#tillagd");
	this.borttagen = container.find("#borttagen");
	this.dishes = container.find("#dishes");
	this.dishsummary = container.find("#dish-summary-display");
	this.totalPrice = container.find("#totalPrice");
	
	//data för att lägga till rätter samt antal personer
	this.numberOfGuests.html(model.getNumberOfGuests()+" personer");
	this.tillagd.html(model.addDishToMenu(1));
	this.tillagd.html(model.addDishToMenu(201));
	this.tillagd.html(model.addDishToMenu(100));

//CONTENT
	var menu = model.getFullMenu();

	//Skriver ut Starter från menyn
		this.dishsummary.append(
			"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.starter.image+'"'+">"
			+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.starter.name+"</h2>"+"<p>"+
			menu.starter.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
			"<h2>Preparation</h2>"+"<p>"+menu.starter.description+"</p></div></div>");

	//Skriver ut Main Dish från menyn
		this.dishsummary.append(
			"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.main.image+'"'+">"
			+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.main.name+"</h2>"+"<p>"+
			menu.main.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
			"<h2>Preparation</h2>"+"<p>"+menu.main.description+"</p></div></div>");

	//Skriver ut Dessert från menyn
			this.dishsummary.append(
			"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+"images/"+menu.dessert.image+'"'+">"
			+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu.dessert.name+"</h2>"+"<p>"+
			menu.dessert.description+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
			"<h2>Preparation</h2>"+"<p>"+menu.dessert.description+"</p></div></div>");

	//Skriver ut totalt pris på alla rätter på menyn
	var allIngredients = model.getAllIngredients();
	this.totalPrice.append("Totalt pris:"+"\n"+model.getTotalMenuPrice(allIngredients)+" SEK");


}
 
