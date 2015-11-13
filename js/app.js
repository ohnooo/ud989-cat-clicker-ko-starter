var initialCats = [
		{
			'clickCount': 0,
			'name': 'Timmy',
			'imgSrc': 'img/cat_picture1.jpg',
			'imgAttribution': 'img/cat_picture1.jpg',
			'nickNames': ['clicky']
		},
		{
			'clickCount': 0,
			'name': 'Tom',
			'imgSrc': 'img/cat_picture2.jpg',
			'imgAttribution': 'img/cat_picture2.jpg',
			'nickNames' : ['coby']
		},
		{
			'clickCount': 0,
			'name': 'Sevo',
			'imgSrc': 'img/cat_picture3.jpg',
			'imgAttribution': 'img/cat_picture3.jpg',
			'nickNames': ['clippy']
		},
		{
			'clickCount': 0,
			'name': 'Steven',
			'imgSrc': 'img/cat_picture4.jpg',
			'imgAttribution': 'img/cat_picture4.jpg',
			'nickNames' : ['choppy']
		},
		{
			'clickCount': 0,
			'name': 'stevy',
			'imgSrc': 'img/cat_picture1.jpg',
			'imgAttribution': 'img/cat_picture1.jpg',
			'nickNames' : ['clamppy']
		}
	];

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
	console.log(data.imgSrc);
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

// Make the cats show up in a list

// Make the list clickable so currentCat can change when its clicked.


var ViewModel = function(){
	// self represent the view model
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		// console.log(catItem);
		// catItem -> cat object from initialCats object literal

		// self is always going to map to ViewModel ****
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function(){
		//console.log('incrementCounter is clicked'+ this.currentCat());
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	// passing a "current item" as a parameter
	// When calling your handler, Knockout will supply the current model value as the
	// first parameter. This is particularly useful if you’re rendering some UI for
	// each item in a collection, and you need to know which item’s UI was clicked

	this.setCat = function(clickedCat){
		// currentCat lives in the ViewModel, that is why we use self.
		self.currentCat(clickedCat);
	}


};

ko.applyBindings(new ViewModel);



