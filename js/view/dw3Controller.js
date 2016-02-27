var Dw3Controller = function(view, model) {
	
	view.container.find("#confirm-dish").click( function(){
    	model.addDishToMenu();
       	model.getAllDishes('all');
		view.display("page-1");
	}
	);

	view.container.find("#back-2-select").click( function(){
    	model.removeFromPending();
    	model.getAllDishes('all');
		view.display("page-1");
	}
	);

};