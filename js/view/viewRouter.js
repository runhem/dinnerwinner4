var ViewRouter = function (container, model) {

	this.container = container;

	this.dinnerView1 = new DinnerView1($("#page-1"), model);
	var dinnerView3 = new DinnerView3($("#page-3"), model);
// 	var dinnerView4 = new DinnerView4($("#page-4"), model);
//	var dinnerView5 = new DinnerView5($("#page-5"), model);

	var menuView = new MenuView($("#menu-column"), model);

//	$("#page-5").hide();

	$("#page-3").hide();

	this.display = function(){
		$("#page-1").hide();
		$("#page-2").show();
	};



};
