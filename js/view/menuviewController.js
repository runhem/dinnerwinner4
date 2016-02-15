//ExampleViewController Object constructor
var menuviewController = function(view, model ) {
 
 view.container.find("#plusGuest").click( function()
 	{model.setNumberOfGuests(model.getNumberOfGuests()+1);}
 	);

  view.container.find("#minusGuest").click( function()
 	{model.setNumberOfGuests(model.getNumberOfGuests()-1);}
 	);

  view.container.find("#removeStarter").click( function()
  { model.removeDishFromMenu("starter");
  });

  view.container.find("#removeMain").click( function()
  { console.log("main");
  	model.removeDishFromMenu("main");
  });

  view.container.find("#removeDessert").click( function()
  { model.removeDishFromMenu("dessert");
  });

  view.container.find("#confirm").click( function() 
    { console.log("CONFIRM!")})

};