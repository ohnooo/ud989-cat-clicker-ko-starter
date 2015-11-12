
var Cat = function(){
	this.clickCount = ko.observable(0);
	console.log(this.clickCount());

	this.catLevel = ko.computed(function(){
		var title,
			clicks = this.clickCount();

			if(clicks <= 10){
				title = 'infint';
			}else if(clicks <= 20){
				title = 'baby';
			}else if(clicks > 20){
				title = 'teen';
			}else{
				title = 'undefined';
			};
		return title;
	}, this);// why do I need 'this' keyword?  If I don't use 'this' returns undefine...

	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.imgAttribution = ko.observable('Someone else image, I am just borrowing for this project');

	// Control flow
	this.nickname = ko.observableArray(
		[ 'Toby', 'Timmy', 'Tom', 'Tomy']
	);
	/*
	this.nickname = ko.observableArray([
		{name: 'Toby'},
		{name: 'Tommy'},
		{name: 'Timmy'}
	]);
	*/
}

var ViewModel = function(){

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};


};

ko.applyBindings(new ViewModel);



