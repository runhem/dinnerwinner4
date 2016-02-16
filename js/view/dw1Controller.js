var Dw1Controller = function(view, model) {

	view.container.find("#starter").click( function(){
		view.dinnerView1.displayDishes("starter");
	}
	);

	view.container.find("#main").click( function(){
		view.dinnerView1.displayDishes("main dish");
	}
	);

	view.container.find("#dessert").click( function(){
		view.dinnerView1.displayDishes("dessert");
	}
	);

	view.container.find("#showall").click( function(){
		view.dinnerView1.displayDishes();
	}
	);

	view.container.find("#search").click( function(){
		searchInput = $('input:text').val();
		view.dinnerView1.searchDishes(searchInput);
	})

	view.container.find(".dish").click( function(){
    	var status = $(this).attr('id');
    	console.log(status);
	    	model.addToPending(status);
    	view.display("page-3");
	})
};






