//DinnerView1 Object constructor
var DinnerView1 = function (container, model) {

	this.container = container;

	model.removeFromPending();

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//containers för main content 
	this.dishes = container.find("#dishes");

//CONTENT. Hämtar alla rätter. Skapar divar som visar innehållet, sätter style till display:none så ingen visas
	this.starters = (model.getAllDishes('starter'));
	this.mains = (model.getAllDishes('main dish'));
	this.desserts = (model.getAllDishes('dessert'));


	for(var x=0, y=this.starters.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish starters"+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.starters[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.starters[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starters[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.mains.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish mains"+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.mains[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.mains[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.mains[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.desserts.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish desserts"+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.desserts[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.desserts[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.desserts[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};


	this.displayDishes = function(button){
	if(button){
		for(var i=0, x=document.getElementsByClassName(this.active).length;i<x;i++){
			document.getElementsByClassName(this.active)[i].style.display = 'none';}
		this.active = button;
		console.log("I button")
	}
	else{
		for(var i=0, x=document.getElementsByClassName(this.active).length;i<x;i++){
		document.getElementsByClassName(this.active)[i].style.display = 'block';
		};
	console.log("else")
	}

	};

	this.update = function(){
	this.displayDishes();
	console.log("Update")
	};

	
// Väljer vilken av typerna som är aktiv och i update kallas sedan på en funktion som sätter style.display=block. 

	this.active = "desserts";
	model.addObserver(this);
	this.update();


};