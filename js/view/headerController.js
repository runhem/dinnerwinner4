var HeaderController = function(view, model ) {

	view.container.find(".page-header").click( function(){
		view.display("page-1");
		view.dinnerView1.displayDishes();
	});
}
