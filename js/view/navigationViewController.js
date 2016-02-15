//ExampleViewController Object constructor
var navigationViewController = function(view, model ) {
 
 view.container.find("#back-2-edit").click( function() 
    {view.display("page-1")
    });

 view.container.find("#print-full-recipe").click( function()
 	{view.display("page-5")
 	});

};