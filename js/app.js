var changeLevel = function(numClicks){

	//console.log('changeLevel called ' + numClicks);
	if(numClicks >= 0 && numClicks <=10){
		return 'infint';
	}else if(numClicks > 10 && numClicks <=20){
		return 'baby';
	}else if(numClicks >20){
		return 'teen';
	}else{
		return 'undefined';
	};

};

var ViewModel = function(){
	this.clickCount = ko.observable(0);
	console.log(this.clickCount());


	this.catLevel = ko.computed(function(){
		return changeLevel(this.clickCount());
	}, this);// why do I need 'this' keyword?  If I don't use 'this' returns undefine...

	/*
	this.catLevel = ko.computed({
		read: function(){
			return changeLevel(this.clickCount());
		},
		write: function(){
			return changeLevel(this.clickCount());
		},
		owner: this
		//console.log(changeLevel(this.clickCount()));
	}); // why do I need 'this' keyword?  If I don't use 'this' returns undefine...
	*/


	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.imgAttribution = ko.observable('Someone else image, I am just borrowing for this project');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
};



ko.applyBindings(new ViewModel);