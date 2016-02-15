//DinnerView1 Object constructor
var NavigationView = function (container, model) {

	this.numberOfGuests = $(container).find("#numberOfGuests");

	this.update = function(){
	this.numberOfGuests.html(model.getNumberOfGuests());
	};

	model.addObserver(this);
	this.update();
};