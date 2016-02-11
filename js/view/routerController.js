var RouterController = function(view, model) {
 
// view.container.find("#print-full-recipe").click( function()
// 	{console.log("Print");
// 	view.display()
//	}
//	);

	view.container.find("#starter").click( function(){
		console.log("starter");
		view.dinnerView1.displayDishes("starters");
		view.dinnerView1.update();	
	}
	);

	view.container.find("#main").click( function(){
		console.log("main");
		view.dinnerView1.displayDishes("mains");
		view.dinnerView1.update();	
	}
	);

	view.container.find("#dessert").click( function(){
		console.log("dessert");
		view.dinnerView1.displayDishes("desserts");
		view.dinnerView1.update();	
	}
	);
};