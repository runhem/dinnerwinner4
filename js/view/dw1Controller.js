var Dw1Controller = function(view, model) {

	view.container.find("#starter").click( function(){
		console.log("starter");
		view.dinnerView1.displayDishes("starter");
		view.dinnerView1.update();	
	}
	);

	view.container.find("#main").click( function(){
		console.log("main");
		view.dinnerView1.displayDishes("main dish");
		view.dinnerView1.update();	
	}
	);

	view.container.find("#dessert").click( function(){
		console.log("dessert");
		view.dinnerView1.displayDishes("dessert");
		view.dinnerView1.update();	
	}
	);

	view.container.find("#search").click( function(){
		searchInput = $('input:text').val();
		view.dinnerView1.searchDishes(searchInput);
	})

	view.container.find(".dish").click( function(){
    	var status = $(this).attr('id');
    	console.log("I klick")
    	model.addToPending(status)
    	view.display(status)
	})
};






