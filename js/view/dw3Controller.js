var Dw3Controller = function(view, model) {
	
	view.container.find("#confirm-dish").click( function(){
    	model.addDishToMenu();
		view.display("page-1");
	}
	);

	view.container.find("#back-2-select").click( function(){
    	model.removeFromPending();
		view.display("page-1");
	}
	);

};