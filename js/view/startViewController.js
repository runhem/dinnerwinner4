var StartViewController = function(view, model ) { 

 view.container.find("#createDinnerButton").click( function()
 {
 	model.getAllDishes('all');
 	view.display("page-1");
 });
};