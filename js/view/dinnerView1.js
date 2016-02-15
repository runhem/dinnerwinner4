//DinnerView1 Object constructor
var DinnerView1 = function (container, model) {

	this.container = container;

	model.removeFromPending();

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//containers för main content 
	this.dishes = container.find("#dishes");

//CONTENT. Hämtar alla rätter. Skapar divar som visar innehållet, sätter style till display:none så ingen visas
	this.starter = (model.getAllDishes('starter'));
	this.main = (model.getAllDishes('main dish'));
	this.dessert = (model.getAllDishes('dessert'));

	this.inputValue = container.find(".form-control");

	for(var x=0, y=this.starter.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish starter"+'"'+"id="+'"'+this.starter[x].name+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.starter[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.starter[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starter[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.main.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish main"+'"'+"id="+'"'+this.main[x].name+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.main[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.main[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.main[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.dessert.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish dessert"+'"'+"id="+'"'+this.dessert[x].name+'"'+"style="+'"'+"display:none"+'"'+">"+
			"<img src="+'"'+"images/"+this.dessert[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.dessert[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.dessert[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	this.displayDishes = function(button){
	if(button){
		for(var i=0, x=document.getElementsByClassName(this.active).length;i<x;i++){
			document.getElementsByClassName(this.active)[i].style.display = 'none';}
		this.active = button;
	}
	else{
		for(var i=0, x=document.getElementsByClassName(this.active).length;i<x;i++){
		document.getElementsByClassName(this.active)[i].style.display = 'block';
		};
	}
	};

	this.searchDishes = function(filter){
	var result = model.getAllDishes(this.active, filter);
	var alex = [];
	for(var j=0, y=result.length;j<y;j++){
		for(var i=0, x=document.getElementsByClassName(this.active).length;i<x;i++){
		document.getElementsByClassName(this.active)[i].style.display = 'none';
			if(document.getElementsByClassName(this.active)[i].id == result[j].name){
			alex.push(document.getElementsByClassName(this.active)[i]);
			}
		}
	}
	console.log(alex);
	for(var k=0, z=alex.length;k<z;k++){
		alex[k].style.display = 'block';
	};
};

	this.update = function(){
	this.displayDishes();
	};

	
// Väljer vilken av typerna som är aktiv och i update kallas sedan på en funktion som sätter style.display=block. 

	this.active = "starter";
	model.addObserver(this);
	this.update();


};