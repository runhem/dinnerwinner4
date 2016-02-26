var Dw1Controller = function(view, model) {

	view.container.find("#starter").on('click', function(){
		view.dinnerView1.displayDishes("Appetizers");
		console.log("starter");
	}
	);

	view.container.find("#main").on('click', function(){
		view.dinnerView1.displayDishes("Main Dish");
	}
	);

	view.container.find("#dessert").on('click', function(){
		view.dinnerView1.displayDishes("Desserts");
	}
	);

	view.container.find("#showall").on('click', function(){
		view.dinnerView1.displayDishes('all');
	}
	);

	view.container.find("#search").on('click', function(){
		searchInput = $('input:text').val();
		view.dinnerView1.displayDishes(searchInput);
	})

	this.update = function(){
		$(".dish").on('click', function(){
	   	var status = $(this).attr('id');
	    model.getDish(status);
    	view.display("page-3");
		});
	};

	model.addObserver(this)
};






