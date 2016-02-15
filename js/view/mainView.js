var MainView = function (container, model) {

	this.container = container;

	this.dinnerView1 = new DinnerView1($("#page-1"), model);
	this.dinnerView3 = new DinnerView3($("#page-3"), model);
 	this.dinnerView4 = new DinnerView4($("#page-4"), model);
	this.navigationView = new NavigationView($("#navigation-bar"), model);
	this.dinnerView5 = new DinnerView5($("#page-5"), model);


	var menuView = new MenuView($("#menu-column"), model);

	$("#page-3").hide();
	$("#page-4").hide();
	$("#navigation-bar").hide();
	$("#page-5").hide();
	console.log("HEJ")

	this.display = function(message){
		if(message == "page-1"){
		$("#page-1").show();
		$("#menu-column").show();

		$("#page-3").hide();
		$("#page-4").hide();
		$("#page-5").hide();
		$("#navigation-bar").hide();
		}

		if(message == "page-3"){
		$("#page-3").show();
		$("#menu-column").show();

		$("#page-1").hide();
		$("#page-4").hide();
		$("#page-5").hide();
		$("#navigation-bar").hide();
		}

		if(message == "page-4"){
		$("#navigation-bar").show();
		$("#page-4").show();

		$("#menu-column").hide();
		$("#page-1").hide();
		$("#page-3").hide();
		$("#page-5").hide();
		}

		if(message == "page-5"){
		$("#page-5").show();
		$("#navigation-bar").show();


		$("#menu-column").hide();
		$("#page-1").hide();
		$("#page-3").hide();
		$("#page-4").hide();
		}

	};

};
