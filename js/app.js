$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	

//	var dinnerView1 = new DinnerView1($(".container"), model);
//	var dinnerView2 = new DinnerView2($(".container"), model);
//	var dinnerView3 = new DinnerView3($(".container"), model);
	var menuView = new MenuView($("#menu-column"), model);
// 	var dinnerView4 = new DinnerView4($(".container"), model);
//	var dinnerView5 = new DinnerView5($(".container"), model);

	var dinnerViewController = new DinnerViewController(menuView, model);

	

});
