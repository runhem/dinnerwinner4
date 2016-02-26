//DinnerModel Object constructor
var DinnerModel = function() {

	var observersArray = [];

	this.number = 4;

	//Method that will add new observer to array "_observersArray"
	this.addObserver = function(observer){
		observersArray.push(observer);
	}

	//Method that will call the update method on all the observers in the array
	this.notifyObservers = function(obj){
		for(var i=0; i<observersArray.length; i++){
			observersArray[i].update(obj);
		}
	}

	//Meny för alla valda recept att stoppas i
 	var menu = {'starter':[],'main':[],'dessert':[]};
	var pending = [];


	this.getPendingPrice = function(){	
			var pendingPrice = 0;
			if (pending.length !== 0){
			for(x in pending[0].Ingredients){
				var pendingPrice = pendingPrice + pending[0].Ingredients[x].Quantity;
			};
			var pendingPrice = pendingPrice*this.getNumberOfGuests();
			console.log(pendingPrice);
			return pendingPrice;
		
		}
		else{return 0}
	}


	this.addToPending = function(dish){
		console.log('dish',dish);
		pending.push(dish);
		this.notifyObservers();
	
	}

	this.removeFromPending = function(){
		while(pending.length > 0) {
    	pending.pop();
    	this.notifyObservers();
		}
	}

	this.returnPending = function(){
		return pending;
	}


//  ANTAL GÄSTER-RELATERAT
	this.setNumberOfGuests = function(num) {
		this.number = num;
		if (this.number <= 0){
			this.number=0;
		}
		this.notifyObservers();
		return this.number;
	}
 
	this.getNumberOfGuests = function() {
		return this.number;
	}

//  MENYRELATERAET

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		if(menu.starter.Category == type){ 
			return menu.starter.Title;
		}
		if(menu.main.Category == type){
			return menu.main.Title;
		}
		if(menu.dessert.Category == type){
			return menu.dessert.Title;
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		for(x in menu){
			if (!(menu[x].Title)){
				menu[x].Title = "None selected";
				menu[x].ImageURL = "images/none.jpg";
				menu[x].description = "Hej hej hej";
			}
		}
		return menu;
		notifyObservers();
	};

// INGREDIENSER OCH PRIS 

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(){
		var ingredientList = [];
		for(pos in menu.starter.Ingredients){
			ingredientList.push(menu.starter.Ingredients[pos]);
			}
		for(pos in menu.main.Ingredients){
			ingredientList.push(menu.main.Ingredients[pos]);
			}
		for(pos in menu.dessert.Ingredients){
			ingredientList.push(menu.dessert.Ingredients[pos]);
			}
		return ingredientList;
		}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	//FUNKAR
	this.getTotalMenuPrice = function(allIngredients) {
		var pris = 0;
		for(x in allIngredients){
		var pris = pris + allIngredients[x].Quantity;
			}
		var personer = this.getNumberOfGuests();
		var totalPrice = pris*personer;
		return totalPrice;
		this.notifyObservers();
	};

	this.getTotalDishPrice = function(dish){
		var pris = 0;
		var personer = this.getNumberOfGuests();
		for (x in dish){
		var pris = pris + dish[x].Quantity;
			}
		return pris*personer;
		this.notifyObservers();
	};


	this.getDishIngredients = function(type){
		var dishIngredientList = [];
		if(type == 'Appetizer'){
		for(pos in menu.starter.Ingredients){
			dishIngredientList.push(menu.starter.Ingredients[pos]);
		}
		}
		if(type == 'Main Dish'){
		for(pos in menu.main.Ingredients){
			dishIngredientList.push(menu.main.Ingredients[pos]);
		}
		}
		if(type == 'Dessert'){
		for(pos in menu.dessert.Ingredients){
			dishIngredientList.push(menu.dessert.Ingredients[pos]);
		}
		}
		return dishIngredientList;
	}

// LÄGG TILL OCH TA BORT FRÅN MENY

	//Adds the passed dish to the menu from list pending. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function() {
				if(pending[0].Category == 'Appetizers'){
				menu.starter = pending[0];
				}
				if(pending[0].Category == 'Main Dish'){
					menu.main = pending[0];
				}
				if(pending[0].Category == 'Desserts'){
					menu.dessert = pending[0];
				}
		this.removeFromPending();
		this.notifyObservers();
	};

	//Removes dish from menu
	//FUNKAR
	this.removeDishFromMenu = function(type) {
		var removeValue = [];
		if (type == "starter"){
			menu.starter = removeValue;
			}
		if(type == "main"){
			menu.main = removeValue;
			}
		if(type == "dessert"){
			menu.dessert = removeValue;
			}
		this.notifyObservers();
		return menu;
	}


//  HÄMTA FRÅN BIG OVEN 

	this.getAllDishes = function (titleKeyword) {
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		if(titleKeyword){
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="
                  + titleKeyword 
                  + "&api_key="+apiKey;
              }
        if(titleKeyword=='all'){
       		var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&api_key="+apiKey;
        }
        var model =  this;
     	$.ajax({
        	type: "GET",
        	dataType: 'json',
        	cache: false,
        	url:url,
        	success: function(data){
        		model.allDishes = data;
        		model.notifyObservers();
        	},
        	error: function(){
        		
        	}
        });
	}

	//function that returns a dish of specific name
	this.getDish = function (id) {
		var RecipeID = id;
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		var url = "http://api.bigoven.com/recipe/"+RecipeID+"?api_key="+apiKey;

		var model =this;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function(data){
				console.log(data);
			
				model.addToPending(data);
				model.notifyObservers();
			},
			error: function(){
				console.log('error i getDish');
			}
		});
	}	
};