$(function() {
	//We instantiate our model
	var model = new DinnerModel();
 	var mainView = new MainView($(".container"), model);

	var dw1Controller = new Dw1Controller(mainView, model);
	var dw3Controller = new Dw3Controller(mainView, model);
	var navController = new navigationViewController(mainView, model);
	var menuController = new menuviewController(mainView, model);
	var headerController = new HeaderController(mainView, model);
	var startViewController = new StartViewController(mainView, model);

});
