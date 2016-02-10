//DinnerView1 Object constructor
var DinnerView1 = function (container, model) {


	model.removeFromPending();

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//containers för main content 
	this.dishes = container.find("#dishes");

//CONTENT. Vi väljer att bara visa alla desserter 
	var dishes = model.getAllDishes('dessert');
	console.log(dishes);
	for(var x=0,y=dishes.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish"+'"'+">"+
			"<img src="+'"'+"images/"+dishes[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+dishes[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+dishes[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};
		model.addObserver(this);


}