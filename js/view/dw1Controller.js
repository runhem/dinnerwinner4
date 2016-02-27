var Dw1Controller = function(view, model) {

	view.container.find("#starter").on('click', function(){
		model.getAllDishes("Appetizers");
	}
	);

	view.container.find("#main").on('click', function(){
		model.getAllDishes("Main Dish");
	}
	);

	view.container.find("#dessert").on('click', function(){
		model.getAllDishes("Desserts");
	}
	);

	view.container.find("#showall").on('click', function(){
		model.getAllDishes('all');
	}
	);

	view.container.find("#search").on('click', function(){
		searchInput = $('input:text').val();
		model.getAllDishes(searchInput);
	});

	this.update = function(){
		$(".dish").on('click', function(){
	   	var status = $(this).attr('id');
	    model.getDish(status);
    	view.display("page-3");
		});
	};

	// EVENT.TARGET

	model.addObserver(this)
};
