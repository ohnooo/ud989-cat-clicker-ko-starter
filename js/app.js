
var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	//console.log(this.clickCount());

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

	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	// Control flow
	this.nickname = ko.observableArray(data.nickNames);

	/*
	this.nickname = ko.observableArray([
		{name: 'Toby'},
		{name: 'Tommy'},
		{name: 'Timmy'}
	]);
	*/
}

var ViewModel = function(){
	// self represent the view model
	var self = this;

	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution : 'Someone else image, I am just borrowing for this project',
		nickNames: ['Toby', 'Timmy', 'Tom', 'Tomy']
	})	);

	this.incrementCounter = function(){
		//console.log('incrementCounter is clicked'+ this.currentCat());
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};


};

ko.applyBindings(new ViewModel);



