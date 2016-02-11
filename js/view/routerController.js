var RouterController = function(view, model) {
 
// view.container.find("#print-full-recipe").click( function()
// 	{console.log("Print");
// 	view.display()
//	}
//	);

	view.container.find(".starter").onclick = function(){
		console.log("starter")
		view.dinnerView1.displayDishes("starters");
		view.dinnerView1.update();	
	};
		
};