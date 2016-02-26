//DinnerView5 Object constructor
var DinnerView5 = function (container, model) {
	

	//containers för sidomenyn
	this.dishsummary = container.find("#dish-summary-display");

	
	this.update = function(){
	var menu = model.getFullMenu();

	this.dishsummary.empty();

	for (i in menu){
	this.dishsummary.append(
		"<div class="+'"'+"col-md-12 dish-summary"+'"'+">"+"<div class="+'"'+"col-md-3"+'"'+">"+"<img src="+'"'+menu[i].ImageURL+'"'+">"
		+"</div>"+"<div class="+'"'+"col-md-4"+'"'+">"+"<h2>"+menu[i].Title+"</h2>"+"<p>"+
		menu[i].Instructions+"</p></div>"+"<div class="+'"'+"col-md-5"+'"'+">"+
		"<h2>Preparation</h2>"+"<p>"+menu[i].Instructions+"</p></div></div>");

	}
	};

	model.addObserver(this);
	this.update();


}
 
