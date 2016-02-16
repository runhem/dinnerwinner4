//DinnerView1 Object constructor
var DinnerView1 = function (container, model) {

	this.container = container;

	model.removeFromPending();

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//containers för main content 
	this.dishes = container.find("#dishes");

//CONTENT. Hämtar alla rätter. Skapar divar som visar innehållet, sätter style till display:block så att alla visas som default
	this.starter = (model.getAllDishes('starter'));
	this.main = (model.getAllDishes('main dish'));
	this.dessert = (model.getAllDishes('dessert'));

	this.inputValue = container.find(".form-control");

	for(var x=0, y=this.starter.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish starter"+'"'+"id="+'"'+this.starter[x].name+'"'+"style="+'"'+"display:block"+'"'+">"+
			"<img src="+'"'+"images/"+this.starter[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.starter[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starter[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.main.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish main"+'"'+"id="+'"'+this.main[x].name+'"'+"style="+'"'+"display:block"+'"'+">"+
			"<img src="+'"'+"images/"+this.main[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.main[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.main[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};

	for(var x=0, y=this.dessert.length;x<y;x++){
		this.dishes.append(
			"<div class="+'"'+"col-md-3 dish dessert"+'"'+"id="+'"'+this.dessert[x].name+'"'+"style="+'"'+"display:block"+'"'+">"+
			"<img src="+'"'+"images/"+this.dessert[x].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h5 id="+'"'+"title"+'"'+">"+this.dessert[x].name+"</h5>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.dessert[x].description.slice(0,86)+"..."+"</p>"+"</div>"
			+"</div>");
	};


	//Metod displayDishes som visar rätter beroende på vilken typ
	this.displayDishes = function(dishType){
		if(dishType){
		for(var i=0, x=document.getElementsByClassName("dish").length;i<x;i++){
		document.getElementsByClassName("dish")[i].style.display = 'none';}
		
		for(var i=0, x=document.getElementsByClassName(dishType).length;i<x;i++){
		document.getElementsByClassName(dishType)[i].style.display = 'block';}

		}
	else{
	for(var i=0, x=document.getElementsByClassName("dish").length;i<x;i++){
		document.getElementsByClassName("dish")[i].style.display = 'block';}

}
	};

	//Metod som söker bland rätter och sedan visar de rätter som hittats och gömmer de andra
	this.searchDishes = function(filter){
	var dishTypes = ["starter", "main dish", "dessert"];

	var storeDishes = [];
	for(var i=0, x=document.getElementsByClassName("dish").length;i<x;i++){
		document.getElementsByClassName("dish")[i].style.display = 'none';}
	for (type in dishTypes){
	

	var result = model.getAllDishes(dishTypes[type], filter);
		for(var j=0, y=result.length;j<y;j++){
		for(var i=0, x=document.getElementsByClassName(dishTypes[type]).length;i<x;i++){
			if(document.getElementsByClassName(dishTypes[type])[i].id == result[j].name){
			storeDishes.push(document.getElementsByClassName(dishTypes[type])[i]);
			}
		}
	}
	}
	for(var k=0, z=storeDishes.length;k<z;k++){
		storeDishes[k].style.display = 'block';
	};
};




};