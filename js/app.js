$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	

//	var dinnerView1 = new DinnerView1($(".container"), model);
//	var dinnerView2 = new DinnerView2($(".container"), model);
//	var dinnerView3 = new DinnerView3($(".container"), model);
//	var menuView = new MenuView($("#menu-column"), model);
 	var mainView = new MainView($(".container"), model);
//  var dinnerView4 = new DinnerView4($("#page-4"), model);
//	var dinnerView5 = new DinnerView5($("#page-5"), model);

	var dw1Controller = new Dw1Controller(mainView, model);
	var dw3Controller = new Dw3Controller(mainView, model);
	var navController = new navigationViewController(mainView, model);
	var menuController = new menuviewController(mainView, model);
	var headerController = new HeaderController(mainView, model);
	var startViewController = new StartViewController(mainView, model);

});
